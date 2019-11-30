<?php


function shortcode_tester_shortcode($args, $content) {
    var_dump('');
}

add_shortcode('shortcode_tester', "shortcode_tester_shortcode");

function_exists();