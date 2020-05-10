<?php

function old_pc_dashboard_widgets()
{
    global $wp_meta_boxes;

    wp_add_dashboard_widget('old_pc_available_programs', 'Available Programs In Assets folder', 'old_pc_dashboard_show_available_pograms');
}
add_action('wp_dashboard_setup', 'old_pc_dashboard_widgets');


function old_pc_dashboard_show_available_pograms()
{
    $directory = get_stylesheet_directory() . '/assets/programs/**/**/index.html';
    $pattern = glob($directory);
    echo '<ul>';
    foreach ($pattern as $filename) {
        [$path, $relative_filename]  = explode('/programs/', $filename);
        $full_path = get_stylesheet_directory_uri() . "/assets/programs/$relative_filename";
?>
        <li>
            <a href="<?= $full_path ?>" target="_blank"><?= $relative_filename ?></a>
        </li>
<?php
    }
    echo '</ul>';
}
