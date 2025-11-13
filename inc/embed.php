<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly.

/**
 * Takes a setting and ensures it's a number if it's a number
 */
function pdfjs_sanatize_number( $input ) {
	if ( is_numeric( $input ) ) {
		return $input;
	} else {
		return 0;
	}
}

/**
 * Takes a setting and ensures it returns as true or false
 */
function pdfjs_set_true_false( $input ) {
	if ( 'true' !== $input ) {
		return 'false';
	} else {
		return 'true';
	}
}

/**
 * Checks to see if a string ends with another string
 */
function pdfjs_ends_with( $haystack, $needle ) {
	$length = strlen( $needle );
	if( !$length ) {
		return true;
	}
	return substr( $haystack, -$length ) === $needle;
}

/**
 * Validates pixel and % values
 */
function pdfjs_is_percent_or_pixel( $value ) {
	if ( is_numeric( $value ) ) {
		return $value;
	} else if ( pdfjs_ends_with( $value, '%' ) ) {
		$number = str_replace('%', '', $value);
		$validNumber = pdfjs_sanatize_number($number);
		if ($number === $validNumber) {
			return $value;
		} else {
			return '0';
		}
	} else if ( pdfjs_ends_with( $value, 'px' ) ) {
		$number = str_replace('px', '', $value);
		$validNumber = pdfjs_sanatize_number($number);
		if ($number === $validNumber) {
			return $value;
		} else {
			return '0';
		}
	} else {
		return '0';
	}
}

// check to ensure there are no quotes in the zoom setting so people can't sneak bad stuff in
function pdfjs_validate_zoom( $zoom ) {
	if (strpos($zoom, '"') !== FALSE || strpos($zoom, "'") !== FALSE) {
		return 'auto';
	}
	return $zoom;
}

/**
 * Generate the PDF embed code.
 * @deprecated Use pdfjs_render_viewer() instead.
 */
function pdfjs_generator( $incoming_from_handler ) {
	return pdfjs_render_viewer( $incoming_from_handler );
}
