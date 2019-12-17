<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <div class="excerpt">
        <h2 class="excerpt__title">
            <?php the_title() ?>
        </h2>
        <div class="excerpt__date">
            <?= the_date() ?>
        </div>
        <div class="excerpt__body">
            <?= the_excerpt() ?>
        </div>
</article>