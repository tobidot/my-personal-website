<?php
if (!function_exists('old_pc_setup')) :
    /**
     * Sets up theme defaults and registers support for various WordPress features.
     *
     * Note that this function is hooked into the after_setup_theme hook, which
     * runs before the init hook. The init hook is too late for some features, such
     * as indicating support for post thumbnails.
     */
    function old_pc_setup()
    {
        /*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Twenty Nineteen, use a find and replace
		 * to change 'twentynineteen' to the name of your theme in all the template files.
		 */
        load_theme_textdomain('old_pc', get_template_directory() . '/languages');

        // Add default posts and comments RSS feed links to head.
        add_theme_support('automatic-feed-links');

        /*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
        add_theme_support('title-tag');

        /**
         * remove top Padding for admin bar, to ensure 100% height
         */
        add_theme_support('admin-bar', array('callback' => '__return_false'));

        // This theme uses wp_nav_menu() in two locations.
        register_nav_menus(
            array(
                'menu-1' => __('Primary', 'old_pc'),
                'footer' => __('Footer Menu', 'old_pc'),
                'social' => __('Social Links Menu', 'old_pc'),
            )
        );

        /*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
        /*
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'script',
				'style',
			)
        );
        */

        /**
         * Add support for core custom logo.
         *
         * @link https://codex.wordpress.org/Theme_Logo
         */
        add_theme_support(
            'custom-logo',
            array(
                'height'      => 190,
                'width'       => 190,
                'flex-width'  => false,
                'flex-height' => false,
            )
        );

        register_post_type('App', array(
            'label' => 'App',
            'public' => true,
            'supports' => ['title', 'editor', 'exceprt'],
            'menu_icon' => 'dashicons-media-code',
            'has_archive' => true,
        ));
    }
endif;
add_action('after_setup_theme', 'old_pc_setup');


require_once dirname(__FILE__) . "/scripts.php";
require_once dirname(__FILE__) . "/widgets.php";
require_once dirname(__FILE__) . "/other.php";
