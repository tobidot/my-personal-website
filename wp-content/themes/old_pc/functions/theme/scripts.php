<?php

/**
 * Enqueue scripts and styles.
 */
function old_pc_scripts()
{
    wp_enqueue_style('old-pc-style', get_stylesheet_uri(), array(), wp_get_theme()->get('Version'));

    wp_enqueue_script('old-pc-ux', get_theme_file_uri('/assets/js/ux/index.js'), [], wp_get_theme()->get('Version'), true);
}
add_action('wp_enqueue_scripts', 'old_pc_scripts');

/**
 * 
 */
function old_pc_print_footer_scripts()
{ }
add_action('wp_print_footer_scripts', 'old_pc_print_footer_scripts');
