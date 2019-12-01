<?php

/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @package WordPress
 * @subpackage Old_Pc
 * @since 0.1.0
 */

?>

</div><!-- #content -->

<footer id="footer" class="site-footer">
    <div class="site-footer__widgets">
        <?php get_template_part('template-parts/footer/footer', 'widgets'); ?>
    </div>
    <div class="site-footer__site-info">
        <?php $items = wp_get_nav_menu_items('footer'); ?>
        <?php foreach ($items as $menu_item) : /** @var WP_Post $menu_item*/ ?>
            <a href="<?= $menu_item->url ?>" class="site-footer__sticker site-footer__sticker--blue site-footer__name">
                <?= $menu_item->title ?>
            </a>
        <?php endforeach; ?>
    </div>
</footer><!-- #colophon -->

</div><!-- #page -->

<?php wp_footer(); ?>

</body>

</html>