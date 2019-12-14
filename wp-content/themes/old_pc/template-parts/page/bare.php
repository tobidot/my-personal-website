<div id="page" class="site">
    <div id="content" class="site-content">
        <main id="main" class="site-main">
            <?php
            if (have_posts()) {
                while (have_posts()) {
                    the_post();
                    get_template_part('template-parts/content/default');
                }
            }
            ?>
        </main>
    </div>

    <?php
    get_footer();
    ?>
</div><!-- #page -->