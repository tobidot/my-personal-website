<?php
global $post;
?>
<div id="page" class="page--app">

    <main id="app" class="app-container">
    </main>
    <script>
        (function() {
            let target = document.getElementsByClassName('monitor').item(0);
            let model = document.getElementsByClassName('monitor').item(0);

            let resizeWorld = () => {
                let modelWidth = model.clientWidth + 100;
                let modelHeight = model.clientHeight + 100;
                let screenWidth = window.innerWidth;
                let screenHeight = window.innerHeight;
                let wantedMultiplication = Math.min(screenWidth / modelWidth, screenHeight / modelHeight);
                target.setAttribute('style', `transform: scale(${wantedMultiplication})`);
            };
            let handle = null;
            window.addEventListener('resize', () => {
                if (handle === null) handle = setTimeout(() => {
                    resizeWorld();
                    handle = null;
                }, 333);
            });
            resizeWorld();

        })();
    </script>
    <script>
        <?= $post->post_content ?>
    </script>
</div>
<!--#page-->