<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly.

/**
 * Shared PDF viewer rendering logic.
 * Used by both shortcode and Gutenberg block.
 *
 * @param array $args {
 *     PDF viewer configuration arguments.
 *
 *     @type string $url               PDF file URL.
 *     @type string $viewer_height     Height of the iframe.
 *     @type string $viewer_width      Width of the iframe.
 *     @type string $fullscreen        Show fullscreen link ('true'/'false').
 *     @type string $fullscreen_text   Text for fullscreen link.
 *     @type string $fullscreen_target Open fullscreen in new tab ('true'/'false').
 *     @type string $download          Show download button ('true'/'false').
 *     @type string $print             Show print button ('true'/'false').
 *     @type string $openfile          Show open file button ('true'/'false').
 *     @type string $zoom              Initial zoom level.
 *     @type string $attachment_id     WordPress attachment ID.
 * }
 * @return string HTML markup for the PDF viewer.
 */
function pdfjs_render_viewer( $args ) {
	$defaults = array(
		'url'               => plugin_dir_url( dirname( __FILE__ ) ) . 'pdf-loading-error.pdf',
		'viewer_height'     => '800px',
		'viewer_width'      => '100%',
		'fullscreen'        => 'true',
		'fullscreen_text'   => 'View Fullscreen',
		'fullscreen_target' => 'false',
		'download'          => 'true',
		'print'             => 'true',
		'openfile'          => 'false',
		'zoom'              => 'auto',
		'attachment_id'     => '',
	);

	$args = wp_parse_args( $args, $defaults );

	// Sanitize and validate inputs.
	$viewer_base_url   = plugin_dir_url( dirname( __FILE__ ) ) . 'pdfjs/web/viewer.php';
	$viewer_height     = pdfjs_is_percent_or_pixel( $args['viewer_height'] );
	$viewer_width      = pdfjs_is_percent_or_pixel( $args['viewer_width'] );
	$fullscreen        = pdfjs_set_true_false( $args['fullscreen'] );
	$fullscreen_text   = sanitize_text_field( $args['fullscreen_text'] );
	$fullscreen_target = pdfjs_set_true_false( $args['fullscreen_target'] );
	$download          = pdfjs_set_true_false( $args['download'] );
	$print             = pdfjs_set_true_false( $args['print'] );
	$openfile          = pdfjs_set_true_false( $args['openfile'] );
	$zoom              = pdfjs_validate_zoom( $args['zoom'] );
	$pagemode          = get_option( 'pdfjs_viewer_pagemode', 'none' );
	$searchbutton      = get_option( 'pdfjs_search_button', 'on' );
	$editingbuttons    = get_option( 'pdfjs_editing_buttons', 'on' );
	$attachment_id     = pdfjs_sanatize_number( $args['attachment_id'] );
	$file_url          = sanitize_url( $args['url'] );
	$pdfjs_custom_page = false; // DISABLED get_option( 'pdfjs_custom_page', '' );

	// Store settings in transients for viewer.php to access (expires in 1 hour).
	set_transient( 'pdfjs_button_download_' . $attachment_id, $download, 3600 );
	set_transient( 'pdfjs_button_print_' . $attachment_id, $print, 3600 );
	set_transient( 'pdfjs_button_openfile_' . $attachment_id, $openfile, 3600 );
	set_transient( 'pdfjs_button_zoom_' . $attachment_id, $zoom, 3600 );
	set_transient( 'pdfjs_button_pagemode_' . $attachment_id, $pagemode, 3600 );
	set_transient( 'pdfjs_button_searchbutton_' . $attachment_id, $searchbutton, 3600 );
	set_transient( 'pdfjs_button_editingbuttons_' . $attachment_id, $editingbuttons, 3600 );

	// Decode URL if encoded.
	if ( strpos( $file_url, '%2F' ) ) {
		$file_url = urldecode( $file_url );
		$file_url = str_replace( 'http://http', 'http', $file_url );
		$file_url = esc_url( $file_url );
	}

	// Validate PDF URL matches current site domain for security.
	$site_url = get_site_url();
	$parsed_site = parse_url( $site_url );
	$parsed_file = parse_url( $file_url );

	// Build origins including protocol for clearer messaging.
	$site_origin = $site_url;
	if ( ! empty( $parsed_site['host'] ) ) {
		$site_origin = ( ! empty( $parsed_site['scheme'] ) ? $parsed_site['scheme'] . '://' : '' ) . $parsed_site['host'] . ( ! empty( $parsed_site['port'] ) ? ':' . $parsed_site['port'] : '' );
	}

	$file_origin = $file_url;
	if ( ! empty( $parsed_file['host'] ) ) {
		$file_origin = ( ! empty( $parsed_file['scheme'] ) ? $parsed_file['scheme'] . '://' : '' ) . $parsed_file['host'] . ( ! empty( $parsed_file['port'] ) ? ':' . $parsed_file['port'] : '' );
	}
	
	// Check if PDF URL has a different host than the current site.
	if ( ! empty( $parsed_file['host'] ) && $parsed_file['host'] !== $parsed_site['host'] ) {
		// External URL detected - return error message with details.
		return '<div class="pdfjs-error" role="alert" style="padding: 20px; border: 2px solid #dc3232; background: #f8d7da; color: #721c24; margin: 20px 0;">' .
			'<p style="margin: 0 0 10px 0;"><strong>' . esc_html__( 'Security Error:', 'pdfjs-viewer-shortcode' ) . '</strong> ' .
			esc_html__( 'PDF files must be hosted on the same domain as this site.', 'pdfjs-viewer-shortcode' ) . '</p>' .
			'<p style="margin: 0; font-size: 0.9em;">' .
			sprintf(
				/* translators: 1: PDF URL host, 2: Current site host */
				esc_html__( 'PDF is hosted on: %1$s but this site is: %2$s', 'pdfjs-viewer-shortcode' ),
				'<code>' . esc_html( $file_origin ) . '</code>',
				'<code>' . esc_html( $site_origin ) . '</code>'
			) .
			'</p>' .
			'</div>';
	}

	// Normalize dimensions.
	if ( '0' === $viewer_width || 0 === $viewer_width ) {
		$viewer_width = '100%';
	}

	if ( '0' === $viewer_height || 0 === $viewer_height ) {
		$viewer_height = '800px';
	}

	// Convert 'on'/'off' to 'true'/'false' for search and editing buttons.
	$searchbutton = ( 'on' === $searchbutton ) ? 'true' : 'false';
	$editingbuttons = ( 'on' === $editingbuttons ) ? 'true' : 'false';

	// Handle fullscreen target.
	$fullscreen_target_attr = ( 'true' === $fullscreen_target ) ? 'target="_blank"' : '';

	// Build viewer URL with all parameters.
	$attachment_info = '?file=' . $file_url . '&attachment_id=' . $attachment_id;
	$nonce     = wp_create_nonce( 'pdfjs_full_screen' );
	$final_url = $viewer_base_url . $attachment_info . '&dButton=' . $download . '&pButton=' . $print . '&oButton=' . $openfile . '&sButton=' . $searchbutton . '&editButtons=' . $editingbuttons . '&pagemode=' . $pagemode . '&_wpnonce=' . $nonce;

	// Build fullscreen link.
	$fullscreen_link = '';
	if ( 'true' === $fullscreen ) {
		$fullscreen_aria = esc_attr__( 'Open PDF in fullscreen mode', 'pdfjs-viewer-shortcode' );
		if ( $pdfjs_custom_page ) {
			$fullscreen_link = '<div class="pdfjs-fullscreen"><a href="?pdfjs_id=' . $attachment_id . '&_wpnonce=' . $nonce . '" ' . $fullscreen_target_attr . ' aria-label="' . $fullscreen_aria . '">' . esc_html( $fullscreen_text ) . '</a></div>';
		} else {
			$fullscreen_link = '<div class="pdfjs-fullscreen"><a href="' . esc_url( $final_url ) . '" ' . $fullscreen_target_attr . ' aria-label="' . $fullscreen_aria . '">' . esc_html( $fullscreen_text ) . '</a></div>';
		}
	}

	// Get file name for accessible title
	$file_name = basename( parse_url( $file_url, PHP_URL_PATH ) );
	$iframe_title = sprintf(
		/* translators: %s: PDF file name */
		esc_attr__( 'PDF document: %s', 'pdfjs-viewer-shortcode' ),
		$file_name
	);

	// Build iframe with accessibility attributes.
	$iframe_code = '<div role="region" aria-label="' . esc_attr__( 'PDF Viewer', 'pdfjs-viewer-shortcode' ) . '"><iframe width="' . esc_attr( $viewer_width ) . '" height="' . esc_attr( $viewer_height ) . '" src="' . esc_url( $final_url ) . '" title="' . $iframe_title . '" aria-label="' . $iframe_title . '" class="pdfjs-iframe" tabindex="0"></iframe></div>';

	return $fullscreen_link . $iframe_code;
}
