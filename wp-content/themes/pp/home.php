<?php

get_header();


$archive_posts = [];
while (have_posts()) :
    the_post();
    $archive_posts[] = get_the_ID();
endwhile;
?>

<div id="primary" class="content-area template-home">
    <main id="main" class="site-main">
        <section class="template-home__introduction">
            <h1>Willkommen auf meiner Website</h1>
            Hier präsentiere ich in kürze Projekte oder nützliche Codesnippets
        </section>
        <section class="template-home__archive">
            <?php print_archive($archive_posts) ?>
        </section>
    </main>
</div>

<?php
get_sidebar();
get_footer();
