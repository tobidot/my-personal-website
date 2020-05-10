<?php
$is_dynamic_sized = true;
$is_full_color = true;

$class_modifier = join(' ', [
    $is_dynamic_sized ? 'monitor--dynamic-resolution' : '',
    $is_dynamic_sized ? 'monitor--colored' : '',
]);

/**
 * @var string $content
 */
?>
<div class="monitor <?= $class_modifier ?>">
    <div class="monitor__light-filter">
        <div class="monitor__activated-filter">
            <div class="monitor__content">
                <?= $content ?>
            </div>
        </div><!-- .monitor__activated-filter -->
    </div><!-- .monitor__light-filter -->
</div>