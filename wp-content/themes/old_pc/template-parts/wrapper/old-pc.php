<?php

/**
 * @var string $content
 * @var array $position
 */
$style = "transform: translate3d(${position[0]}px, ${position[1]}px, -${position[2]}px) rotate3d(0,1,0,0deg);"

?>

<div class="old-pc" style="<?= $style ?>">
    <div class="old-pc__model">
        <div class="world-object old-pc-model">
            <div class="world-object old-pc-model__front "></div>
            <div class="world-object old-pc-model__inner-left "></div>
            <div class="world-object old-pc-model__inner-right "></div>
            <div class="world-object old-pc-model__inner-bottom "></div>
            <div class="world-object old-pc-model__inner-top "></div>

            <div class="world-object old-pc-model__left "></div>
            <div class="world-object old-pc-model__right "></div>
            <div class="world-object old-pc-model__top "></div>
            <div class="world-object old-pc-model__bottom "></div>
        </div>
        <div class="old-pc__monitor">
            <?php template('wrapper/old-pc-monitor', array(
                'content' => $content
            )); ?>
        </div><!-- .monitor -->
    </div>
</div>