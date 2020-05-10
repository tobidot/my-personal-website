<?php

get_header();


?>

<body <?php body_class(); ?>>
    <div class="fullscreen">
        <?php
        try {
            wp_body_open();

            ob_start();
            template('page/archive', [
                'title' => get_the_title(get_option('page_for_posts', true))
            ]);
            $content = ob_get_clean();

            ob_start();
            template('wrapper/old-pc-monitor', [
                'content' => $content,
            ]);
            $old_pc = ob_get_clean();

            echo $old_pc;

            wp_footer();
        } catch (Exception $exception) {
            print_error_box($exception);
        }
        ?>
    </div>
</body>

</html>