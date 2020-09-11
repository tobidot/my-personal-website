const items = document.getElementsByClassName('click-and-copy');
for (let i = 0; i < items.length; i++) {
    const item = items.item(i);
    item.addEventListener('click', () => {
        navigator.clipboard.writeText(item.innerText);
        item.classList.add('js-clicked');
        setTimeout(() => {
            item.classList.remove('js-clicked');
        }, 1500);
    });
}