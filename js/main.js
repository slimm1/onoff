document.addEventListener('DOMContentLoaded', () => {
    initBottomPanelEvents();
    initSideMenuEvents();
    initCheckbox();
});

document.addEventListener('click', (event) => {
    const sideMenu = document.getElementById('onoff-side-menu');
    const burgerMenu = document.getElementById('burger-menu-top');
    const bottomMenu = document.getElementById('supportContent');

    if(sideMenu.classList.contains('active') && !sideMenu.contains(event.target) && !burgerMenu.contains(event.target)){
        sideMenu.classList.remove('active');
        burgerMenu.classList.remove('is-active');
        toggleBodyScroll(true);
    }
    
    if (bottomMenu.classList.contains('visible') && !bottomMenu.contains(event.target)) {
        bottomMenu.classList.remove('visible');
    }
});

/**
 * Inicia los eventos click para los elementos con la clase "slim-checkbox". Esto hace que los checkboxes se marquen o desmarquen al hacer
 * clic en los labels o contenedores.
 */
function initCheckbox() {
  const checkboxWrappers = document.querySelectorAll('.slim-checkbox');
  checkboxWrappers.forEach(item => {
    item.addEventListener('click', (event) => {
      const checkbox = item.querySelector('input');
      if(event.target !== checkbox){
        if(checkbox.checked){
          checkbox.checked = false;
        } else {
          checkbox.checked = true;
        }
      }
    });
  });
}

/**
 * Activa o desactiva el scroll en el body.
 * @param {*} enable para activar el scroll
 * @returns 
 */
function toggleBodyScroll(enable = false) {
  if(enable) {
    document.body.style.overflow = '';
    document.body.style.height = '';
    return;
  }
  document.body.style.overflow = 'hidden';
  document.body.style.height = '100%';
}