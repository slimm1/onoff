document.addEventListener('DOMContentLoaded', () => {
    initBottomPanelEvents();
    initSideMenuEvents();
});

document.addEventListener('click', (event) => {
    const sideMenu = document.getElementById('onoff-side-menu');
    const burgerMenu = document.getElementById('burger-menu-top');
    const bottomMenu = document.getElementById('supportContent');

    if(sideMenu.classList.contains('active') && !sideMenu.contains(event.target) && !burgerMenu.contains(event.target)){
        sideMenu.classList.remove('active');
        burgerMenu.classList.remove('is-active');
    }
    
    if (bottomMenu.classList.contains('visible') && !bottomMenu.contains(event.target)) {
        bottomMenu.classList.remove('visible');
    }
});