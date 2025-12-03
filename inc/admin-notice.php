<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly.

/**
 * Show a dismissible admin notice to inform editors about block recovery
 * for PDF blocks. The notice display is controlled by a "notice key"
 * which defaults to the plugin version, but can be overridden via
 * a constant or filter for precise control.
 *
 * Control options:
 * - Define a constant in wp-config.php or a mu-plugin:
 *     define('PDFJS_NOTICE_KEY', 'block-recovery-2025-12');
 * - Or use a filter (e.g., in a small mu-plugin):
 *     add_filter('pdfjs_update_notice_key', function($key){ return 'block-recovery-2025-12'; });
 * - Return an empty value in the filter to disable the notice entirely.
 */
function pdfjs_maybe_show_update_notice() {
	// Only in admin and for users who can edit posts.
	if ( ! is_admin() || ! current_user_can( 'edit_posts' ) ) {
		return;
	}

	// If version constant is missing, bail.
	if ( ! defined( 'PDFJS_PLUGIN_VERSION' ) ) {
		return;
	}

	// Resolve the current notice key: constant -> filter -> plugin version.
	$default_key = defined( 'PDFJS_NOTICE_KEY' ) ? PDFJS_NOTICE_KEY : PDFJS_PLUGIN_VERSION;
	$notice_key  = apply_filters( 'pdfjs_update_notice_key', $default_key );

	// Empty key disables the notice entirely.
	if ( empty( $notice_key ) ) {
		return;
	}

	// Back-compat: consider previous stored version value as shown when key === version
	$last_shown_key     = get_option( 'pdfjs_notice_key', '' );
	$last_shown_version = get_option( 'pdfjs_notice_version', '' );
	if ( $notice_key === $last_shown_key || ( PDFJS_PLUGIN_VERSION === $notice_key && PDFJS_PLUGIN_VERSION === $last_shown_version ) ) {
		return;
	}

	// Build a dismiss URL that persists the dismissal across admin screens.
	$dismiss_url = wp_nonce_url(
		admin_url( 'admin-post.php?action=pdfjs_dismiss_notice' ),
		'pdfjs_dismiss_notice'
	);

	// Translators: Message about block recovery after plugin updates.
	$message = __( "PDFjs Viewer has been updated.\n\nIf you edit a post that contains a PDF, you may see a message with an \"Attempt Block Recovery\" button. Simply click it as this is a normal part of how WordPress handles updates.\n\nIf you choose not to recover the block, your existing PDFs will still work perfectly, and your visitors won't see any changes.", 'pdfjs-viewer-shortcode' );

	// Enqueue inline script for AJAX dismissal.
	wp_enqueue_script( 'jquery' );
	?>
	<div id="pdfjs-update-notice" class="notice notice-info is-dismissible" role="alert" aria-live="polite" data-nonce="<?php echo esc_attr( wp_create_nonce( 'pdfjs_dismiss_notice_ajax' ) ); ?>">
		<p><?php echo esc_html( $message ); ?></p>
		<p><a href="<?php echo esc_url( $dismiss_url ); ?>" class="button button-secondary"><?php esc_html_e( 'Dismiss', 'pdfjs-viewer-shortcode' ); ?></a></p>
	</div>
	<?php
}
add_action( 'admin_notices', 'pdfjs_maybe_show_update_notice' );

/**
 * Enqueue admin script for AJAX notice dismissal.
 */
function pdfjs_enqueue_notice_script() {
	if ( ! is_admin() || ! current_user_can( 'edit_posts' ) ) {
		return;
	}

	// Check if notice would be shown.
	if ( ! defined( 'PDFJS_PLUGIN_VERSION' ) ) {
		return;
	}

	$default_key = defined( 'PDFJS_NOTICE_KEY' ) ? PDFJS_NOTICE_KEY : PDFJS_PLUGIN_VERSION;
	$notice_key  = apply_filters( 'pdfjs_update_notice_key', $default_key );

	if ( empty( $notice_key ) ) {
		return;
	}

	$last_shown_key     = get_option( 'pdfjs_notice_key', '' );
	$last_shown_version = get_option( 'pdfjs_notice_version', '' );
	if ( $notice_key === $last_shown_key || ( PDFJS_PLUGIN_VERSION === $notice_key && PDFJS_PLUGIN_VERSION === $last_shown_version ) ) {
		return;
	}

	// Only enqueue if notice is visible.
	$script = "
		jQuery(function($) {
			$('#pdfjs-update-notice').on('click', '.notice-dismiss', function(e) {
				e.preventDefault();
				var notice = $('#pdfjs-update-notice');
				var nonce = notice.data('nonce');
				$.post(ajaxurl, {
					action: 'pdfjs_dismiss_notice_ajax',
					nonce: nonce
				});
			});
		});
	";
	wp_add_inline_script( 'jquery', $script );
}
add_action( 'admin_enqueue_scripts', 'pdfjs_enqueue_notice_script' );

/**
 * Persist dismissal of the notice for the current version.
 */
function pdfjs_dismiss_notice_handler() {
	if ( ! is_admin() ) {
		wp_die();
	}

	// Capability: allow editors and above to dismiss for the site.
	if ( ! current_user_can( 'edit_posts' ) ) {
		wp_die( esc_html__( 'Insufficient permissions.', 'pdfjs-viewer-shortcode' ) );
	}

	check_admin_referer( 'pdfjs_dismiss_notice' );

	// Store dismissal against the current resolved key.
	$default_key = defined( 'PDFJS_NOTICE_KEY' ) ? PDFJS_NOTICE_KEY : ( defined( 'PDFJS_PLUGIN_VERSION' ) ? PDFJS_PLUGIN_VERSION : '' );
	$notice_key  = apply_filters( 'pdfjs_update_notice_key', $default_key );
	if ( ! empty( $notice_key ) ) {
		update_option( 'pdfjs_notice_key', $notice_key );
	}
	// Clean up legacy storage to avoid confusion.
	if ( null !== get_option( 'pdfjs_notice_version', null ) ) {
		delete_option( 'pdfjs_notice_version' );
	}

	$redirect = wp_get_referer();
	if ( ! $redirect ) {
		$redirect = admin_url();
	}
	wp_safe_redirect( $redirect );
	exit;
}
add_action( 'admin_post_pdfjs_dismiss_notice', 'pdfjs_dismiss_notice_handler' );

/**
 * AJAX handler for notice dismissal (used when clicking X button).
 */
function pdfjs_dismiss_notice_ajax_handler() {
	if ( ! is_admin() ) {
		wp_send_json_error();
	}

	if ( ! current_user_can( 'edit_posts' ) ) {
		wp_send_json_error();
	}

	check_ajax_referer( 'pdfjs_dismiss_notice_ajax', 'nonce' );

	$default_key = defined( 'PDFJS_NOTICE_KEY' ) ? PDFJS_NOTICE_KEY : ( defined( 'PDFJS_PLUGIN_VERSION' ) ? PDFJS_PLUGIN_VERSION : '' );
	$notice_key  = apply_filters( 'pdfjs_update_notice_key', $default_key );
	if ( ! empty( $notice_key ) ) {
		update_option( 'pdfjs_notice_key', $notice_key );
	}
	// Clean up legacy storage.
	if ( null !== get_option( 'pdfjs_notice_version', null ) ) {
		delete_option( 'pdfjs_notice_version' );
	}

	wp_send_json_success();
}
add_action( 'wp_ajax_pdfjs_dismiss_notice_ajax', 'pdfjs_dismiss_notice_ajax_handler' );

/**
 * On initial activation, mark the current version as shown so
 * the notice appears only on updates, not fresh installs.
 */
function pdfjs_notice_on_activate() {
	$default_key = defined( 'PDFJS_NOTICE_KEY' ) ? PDFJS_NOTICE_KEY : ( defined( 'PDFJS_PLUGIN_VERSION' ) ? PDFJS_PLUGIN_VERSION : '' );
	$notice_key  = apply_filters( 'pdfjs_update_notice_key', $default_key );
	if ( ! empty( $notice_key ) ) {
		update_option( 'pdfjs_notice_key', $notice_key );
	}
	// Remove legacy value if present.
	if ( null !== get_option( 'pdfjs_notice_version', null ) ) {
		delete_option( 'pdfjs_notice_version' );
	}
}
