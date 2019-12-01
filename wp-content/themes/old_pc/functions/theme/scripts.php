<?php

/**
 * Enqueue scripts and styles.
 */
function old_pc_scripts()
{
    wp_enqueue_style('old-pc-style', get_stylesheet_uri(), array(), wp_get_theme()->get('Version'));

    //wp_style_add_data( 'twentynineteen-style', 'rtl', 'replace' );
}
add_action('wp_enqueue_scripts', 'old_pc_scripts');

/**
 * 
 */
function old_pc_print_footer_scripts()
{ }
add_action('wp_print_footer_scripts', 'old_pc_print_footer_scripts');
