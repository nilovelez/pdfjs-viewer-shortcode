<?php
/**
Plugin Name: PDFjs Viewer - Embed PDFs
Plugin URI: http://byterevel.com/
Description: Embed PDFs with the gorgeous PDF.js viewer
Version: 2.2.5
Author: <a href="http://byterevel.com/">Ben Lawson</a>, <a href="https://www.twistermc.com/">Thomas McMahon</a>
Contributors: FalconerWeb, twistermc
License: GPLv2
 **/

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly.

// Plugin version constant for cache busting - read from plugin header
if ( ! defined( 'PDFJS_PLUGIN_VERSION' ) ) {
	if ( ! function_exists( 'get_plugin_data' ) ) {
		require_once ABSPATH . 'wp-admin/includes/plugin.php';
	}
	$plugin_data = get_plugin_data( __FILE__, false, false );
	define( 'PDFJS_PLUGIN_VERSION', $plugin_data['Version'] );
}

/**
 * Load plugin text domain for translations.
 */
function pdfjs_load_textdomain() {
	load_plugin_textdomain( 'pdfjs-viewer-shortcode', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );
}
add_action( 'plugins_loaded', 'pdfjs_load_textdomain' );

/**
 * Generate the PDF embed code.
 */
require 'inc/embed.php';

/**
 * Shared PDF viewer rendering
 */
require 'inc/render-viewer.php';

/**
 * Shortcode
 */
require 'inc/shortcode.php';

/**
 * Media Button for Classic Editor
 */
require 'inc/media-button.php';

/**
 * Gutenberg Block
 */
require 'inc/gutenberg-block.php';

/**
 * Options Page
 */
require 'inc/options-page.php';

/**
 * Custom URL - Work in Progress
 */
$pdfjs_custom_page = get_option( 'pdfjs_custom_page', 0 );

if ($pdfjs_custom_page) {
	require 'inc/custom-page.php';
}
