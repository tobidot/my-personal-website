<?php
$title = $title ?? 'Kein Titel';
?>

<div id="page" class="site">
    <div id="content" class="site-content">
        <main id="main" class="site-main">
            <div class="archive-grid">
                <h1 class="archive-grid__title"><?= $title ?></h1>
                <?php
                if (have_posts()) {
                    while (have_posts()) {
                        ?>
                        <a class="archive-grid__element" href="<?= the_permalink() ?>">
                            <?php
                                    the_post();
                                    get_template_part('template-parts/content/excerpt');
                                    ?>
                        </a>
                <?php
                    }
                }
                ?>
            </div>
        </main>
    </div>

    <?php
    get_footer();
    ?>
</div><!-- #page -->