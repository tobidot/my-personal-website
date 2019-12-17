<?php
get_header();
?>

<body <?php body_class(); ?>>
    <div class="fullscreen">
        <?php
        try {
            wp_body_open();

            ob_start();
            template('page/app', []);
            $content = ob_get_clean();

            template('wrapper/old-pc-monitor', [
                'content' => $content,
            ]);

            wp_footer();
        } catch (Exception $exception) {
            print_error_box($exception);
        }
        ?>
        <div>
</body>

</html>