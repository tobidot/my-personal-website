<?php

/**
 * @var string $content
 * @var array $position
 */
$style = "transform: translate3d(${position[0]}px, ${position[1]}px, -${position[2]}px);"

?>

<div class="old-pc" style="<?= $style ?>">
    <div class="old-pc__model">
    </div>
    <div class="old-pc__monitor monitor">
        <div class="monitor__light-filter">
            <div class="monitor__activated-filter">
                <div class="monitor__content">
                    <?= $content ?>
                </div>
            </div><!-- .monitor__activated-filter -->
        </div><!-- .monitor__light-filter -->
    </div><!-- .monitor -->
</div>