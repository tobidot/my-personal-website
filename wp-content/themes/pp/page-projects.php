<?php

function not_found()
{
    status_header(404);
    exit;
}

function unzip_preject($zip_file, $target_folder): bool
{
    require_once(ABSPATH . '/wp-admin/includes/file.php');

    global $wp_filesystem;
    if (!$wp_filesystem) {
        WP_Filesystem();
        if (!$wp_filesystem)
            return false;
    }

    $result = unzip_file($zip_file, $target_folder);
    if (is_wp_error($result))
        return false;
    return true;
}

// var_dump($_GET);
$project_name = $_GET['pp-project'] ?? null;
if ($project_name === null) {
    not_found();
}
$month = $_GET['pp-month'] ?? null;
$year = $_GET['pp-year'] ?? null;
if ($month === null || $year === null) {
    not_found();
}
$project_base_dir = WP_CONTENT_DIR . '/projects';
$project_relative_file_path = "$project_name/$year/$month";
$project_file_path = "$project_base_dir/$project_relative_file_path";
$project_index_file_path = "$project_file_path/index.html";
$project_index_url = get_site_url() . "/wp-content/projects/$project_relative_file_path/index.html";

if (file_exists($project_index_file_path)) {
    wp_redirect($project_index_url);
    exit;
}


$upload_base_dir = wp_upload_dir("$year/$month")['path'];
$upload_zip_file_path = "$upload_base_dir/$project_name.zip";
if (file_exists($upload_zip_file_path)) {
    if (unzip_preject($upload_zip_file_path, $project_file_path)) {
        wp_redirect($project_index_url);
        exit;
    } else {
        not_found();
    }
}
