<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @package WordPress
 * @subpackage Old_Pc
 * @since 0.1.0
 */
?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="profile" href="https://gmpg.org/xfn/11" />
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <div id="page" class="site">
        <header id="main-menue" class="site-menu">
            <?php
            $locations = get_nav_menu_locations();
            $menu = get_term($locations['menu-1'], 'nav_menu');
            $menu_items = wp_get_nav_menu_items($menu->term_id);
            ?>
            <?php foreach ($menu_items as $menu_item) : /** @var WP_Post $menu_item*/ ?>
                <div class="site-menu__entry">
                    <div class="old-button">
                        <div class="old-button__label">
                            <?= $menu_item->title ?>
                        </div>
                        <a href="<?= $menu_item->url ?>" class="old-button__button">
                        </a>
                    </div>
                </div>
            <?php endforeach; ?>
        </header><!-- #header -->

        <div id="content" class="site-content monitor">