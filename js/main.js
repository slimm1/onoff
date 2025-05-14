document.addEventListener('DOMContentLoaded', () => {
    initBottomPanelEvents();
    initSideMenuEvents();
    const stickyBar = document.getElementById("supportContent");
    const footer = document.querySelector("footer"); // Asegúrate de que exista
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          stickyBar.style.transform = "translateY(100%)"; // ocultar
        } else {
            stickyBar.style.removeProperty('transform'); 
        }
      });
    }, {
      root: null,
      threshold: 0,
    });
  
    if (footer) observer.observe(footer);
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