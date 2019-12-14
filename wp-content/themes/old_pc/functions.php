<?php

/**
 * Twenty Nineteen functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Old_Pc
 * @since 0.1.0
 */

require_once get_template_directory() . "/functions/theme/setup.php";

function template(string $template_file, array $arguments = [])
{
    extract($arguments);
    require get_stylesheet_directory() . '/template-parts/' . $template_file . '.php';
}

function print_log(string $message)
{
    $bt = debug_backtrace(DEBUG_BACKTRACE_PROVIDE_OBJECT, 1);
    $caller = array_shift($bt);

    echo basename($caller['file']);
    echo " (";
    echo $caller['line'];
    echo ") : ";
    echo $message;
}

function print_error_box(Exception $exception)
{
    $file = $exception->getFile();
    $line = $exception->getLine();
    $message = $exception->getMessage();
    $trace = $exception->getTraceAsString();
    ?>
    <div class="debug-report">
        <h2><?= __('An error occured!', 'old_pc') ?></h2>
        <div class="debug-report__code-location code-location">
            <div class="code-location__part">
                <span>File</span>
                <span> : </span>
                <span> <?= $file ?> </span>
            </div>
            <div class="code-location__part">
                <span>Line</span>
                <span> : </span>
                <span> <?= $line ?> </span>
            </div>
        </div>
        <p class="debug-report__message"><?= $message ?></p>
        <p class="debug-report__trace"><?= $trace ?></p>
    </div>
<?php
}
