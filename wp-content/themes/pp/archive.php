<?php

/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package ProjektPrestation
 */

$archive_posts = [];
while (have_posts()) :
	the_post();
	$archive_posts[] = get_the_ID();
endwhile;

get_header();
?>

<div id="primary" class="content-area template-archive">
	<main id="main" class="site-main">
		<?php if (have_posts()) : ?>
			<section class="template-archive__introduction">
				<h1><?php echo get_the_archive_title() ?></h1>
				<?php echo get_the_archive_description() ?>
			</section>
			<section class="template-archive__archive">
				<?php print_archive($archive_posts) ?>
			</section>
		<?php else : ?>
			<?php get_template_part('template-parts/content', 'none'); ?>
		<?php endif; ?>
	</main><!-- #main -->
</div><!-- #primary -->

<?php
get_sidebar();
get_footer();
