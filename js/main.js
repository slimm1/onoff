document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu-top');
    burgerMenu.addEventListener('click', () => {
        console.log('click');
        burgerMenu.classList.toggle('is-active');
    });
});
