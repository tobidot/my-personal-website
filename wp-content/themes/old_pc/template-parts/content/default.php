<?php
$foot_notes = [];
?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <div class="article">
        <div class="article__head">
            <h1>
                <?php the_title() ?>
            </h1>
        </div>
        <div class="article__body">
            <?php the_content() ?>
        </div>
        <div class="article__foot <?= (empty($foot_notes)) ? ('article__foot--empty') : '' ?>">
            <div class="article-foot">
                <?php foreach ([6, 10] as $key => $entry) : ?>
                    <div class="article-foot__entry">
                        <?= $entry ?>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</article>