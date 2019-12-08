<?php
get_header();


?>

<body <?php body_class(); ?>>
    <?php
    try {
        wp_body_open();

        ob_start();
        template('page/default');
        $content = ob_get_clean();
        //echo $content;
        template('wrapper/old-pc', [
            'content' => $content
        ]);

        wp_footer();
    } catch (Exception $exception) {
        print_error_box($exception);
    }
    ?>
</body>

</html>