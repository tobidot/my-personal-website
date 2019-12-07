<?php

get_header();
?>

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


        <div class="monitor">
            <div class="monitor__light-filter">
                <div class="monitor__activated-filter">
                    <div id="content" class="site-content">

                        <div id="primary" class="content-area">
                            <main id="main" class="site-main">

                                <?php
                                if (have_posts()) {

                                    // Load posts loop.
                                    while (have_posts()) {
                                        the_post();
                                        get_template_part('template-parts/content/content');
                                    }

                                    // Previous/next page navigation.
                                    //twentynineteen_the_posts_navigation();
                                } else {

                                    // If no content, include the "No posts found" template.
                                    get_template_part('template-parts/content/content', 'none');
                                }
                                ?>

                            </main><!-- .site-main -->
                        </div><!-- .content-area -->


                    </div><!-- #content -->
                </div><!-- .monitor__activated-filter -->
            </div><!-- .monitor__light-filter -->
        </div><!-- .monitor -->

        <?php
        get_footer();
        ?>
    </div><!-- #page -->

    <?php wp_footer(); ?>

</body>

</html>