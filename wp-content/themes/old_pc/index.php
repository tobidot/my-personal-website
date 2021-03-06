<?php

get_header();


?>

<body <?php body_class(); ?>>
    <?php
    try {
        wp_body_open();

        ob_start();
        template('page/bare');
        $content = ob_get_clean();

        ob_start();
        template('wrapper/old-pc-monitor', [
            'content' => $content,
            'position' => [0, 0, 400],
        ]);
        $old_pc = ob_get_clean();

        template('wrapper/fullscreen-center', [
            'content' => $old_pc
        ]);

        wp_footer();
    } catch (Exception $exception) {
        print_error_box($exception);
    }
    ?>
</body>

</html>