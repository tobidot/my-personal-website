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
        <div class="site-footer__sticker site-footer__name">
            <div>
                Project [S]elf
            </div>
        </div>
        <a href="/impressum" class="site-footer__sticker site-footer__sticker--blue site-footer__impressum">
            <div>
                Impressum
            </div>
        </a>
    </div>
</footer><!-- #colophon -->

</div><!-- #page -->

<?php wp_footer(); ?>

</body>

</html>