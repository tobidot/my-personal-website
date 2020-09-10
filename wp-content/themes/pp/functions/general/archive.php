<?php
function print_archive($post_ids)
{
    echo '<div class="archive">';
    foreach ($post_ids as $post_id) :
?>
        <a class="archive__item" href="<?php echo get_the_permalink($post_id) ?>">
            <div class="archive__item__image">
                <!--// TODO -->
            </div>
            <div class="archive__item__title">
                <?php echo get_the_title($post_id); ?>
            </div>
            <div class="archive__item__description">
                <!--// TODO -->
            </div>
        </a>
<?php
    endforeach;
    echo '</div>';
}
