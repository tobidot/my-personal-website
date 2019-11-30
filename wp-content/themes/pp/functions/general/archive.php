<?php
function print_archive($post_ids) {
    echo '<div class="archive">';
    foreach($post_ids as $post_id) :
    ?>
        <div class="archive__item">
            <div class="archive__item__image">
                <!--// TODO -->
            </div>
            <div class="archive__item__title">
                <?php echo get_the_title($post_id);?>
            </div>
            <div class="archive__item__description">
                <!--// TODO -->
            </div>
        </div>
    <?php
    endforeach;
    echo '</div>';
}