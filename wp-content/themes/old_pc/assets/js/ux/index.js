(() => {


    for (let element of document.getElementsByClassName('world')) {
        let first = element.firstElementChild;
        if (first instanceof HTMLElement) {
            let model = first.firstElementChild;
            if (model instanceof HTMLElement) {
                let resizeWorld = () => {
                    let modelWidth = model.clientWidth + 100;
                    let modelHeight = model.clientHeight + 100;
                    let screenWidth = window.innerWidth;
                    let screenHeight = window.innerHeight;
                    let wantedMultiplication = Math.min(screenWidth / modelWidth, screenHeight / modelHeight);
                    first.setAttribute('style', `transform: scale(${wantedMultiplication})`);
                };
                window.addEventListener('resize', () => {
                    resizeWorld();
                });
                resizeWorld();
            }
        }
    }
})();