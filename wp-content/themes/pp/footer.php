<?php

/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package ProjektPrestation
 */

?>

</div><!-- #content -->

<footer id="colophon" class="site-footer template-footer">
	<div class="site-info">
		<a href="<?php echo esc_url(__('https://wordpress.org/', 'pp')); ?>">
			<?php echo "Powered by Wordpress" ?>
		</a>
		<span class="sep"> | </span>
		<?php echo 'Theme by Tobias Gepp' ?>
	</div><!-- .site-info -->
</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>

</html>