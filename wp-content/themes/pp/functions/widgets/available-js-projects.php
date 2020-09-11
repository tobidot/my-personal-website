<?php

function get_available_js_projects__list_item($file)
{
    $result = preg_match(';uploads/([0-9]{4})/([0-9]{2})/([-_a-zA-Z0-9]+)\.zip;', $file, $matches);
    if ($result === false) return '';
    $year = $matches[1];
    $month = $matches[2];
    $name = $matches[3];
    $base_projects_url = get_site_url(null, '/projects');
    $projects_parameters = implode('&', array_map(function ($pair) {
        return implode('=', $pair);
    }, [
        ['pp-year', $year],
        ['pp-month', $month],
        ['pp-project', $name]
    ]));
    $full_url = "$base_projects_url?$projects_parameters";
    return <<< HTML
<li>
    <div class="click-and-copy">
        $full_url
    </div>
</li>
HTML;
}

function get_available_js_projects()
{
    $files_glob = wp_get_upload_dir()['basedir'] . "/*/*/*.zip";
    $files = array_reverse(glob($files_glob));
    $list = implode('', array_map('get_available_js_projects__list_item', $files));

    return <<< HTML
<ul>
    $list
</ul>
HTML;
}

function print_available_js_projects()
{
    echo get_available_js_projects();
}
