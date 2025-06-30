document.addEventListener('DOMContentLoaded', () => {
    initBottomPanelEvents();
    initSideMenuEvents();
    initCheckbox();
    initSlimScroll();
    initLandingItemsEvents();
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

/**
 * Efectos hover para los elementos de la tabla de la landing.
 */
function initLandingItemsEvents() {
  const landingActions = document.querySelectorAll('.landing-action');
  landingActions.forEach((item, index)=> {
    
    item.addEventListener('mouseover', () => {
      if(window.innerWidth > 500) {
        const targetId = item.dataset.target;
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const overlay = targetElement.querySelector('.overlay');
          const overlayText = targetElement.querySelector('.overlay-text');
          overlay.style.backgroundColor = determineLandingBackgroundColor(targetId);
          overlayText.style.textAlign = index % 2 === 0 ? 'left' : 'right';
          if (overlay) {
            overlay.style.opacity = '1';
          }
        }
      }
    });

    item.addEventListener('mouseout', () => {
      if(window.innerWidth > 500) {
        const targetId = item.dataset.target;
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const overlay = targetElement.querySelector('.overlay');
          if (overlay) {
            overlay.style.opacity = '0';
          }
        }
      }
    });
  });
}

function determineLandingBackgroundColor(elementId) {
  if(elementId.includes('purple')) {
    return COLORS.MAIN_PURPLE_TRANS;
  } else if(elementId.includes('orange')) {
    return COLORS.MAIN_ORANGE_TRANS;
  } else if(elementId.includes('blue')) {
    return COLORS.MAIN_BLUE_TRANS;
  } else {
    return COLORS.MAIN_YELLOW_TRANS;
  }
} 

function applyResponsiveBackgrounds() {
  if (window.innerWidth <= 768) {
    document.querySelectorAll('.landing-action').forEach(action => {
      const targetId = action.dataset.target;
      const target = document.getElementById(targetId);
      const img = target?.querySelector('img');

      if (img) {
        const imageUrl = img.getAttribute('src');
        const color = determineLandingBackgroundColor(targetId);
        action.style.backgroundImage = `
          linear-gradient(${color}, ${color}),
          url(${imageUrl})
        `;
      }
    });
  }
}

window.addEventListener('load', applyResponsiveBackgrounds);
window.addEventListener('resize', applyResponsiveBackgrounds);