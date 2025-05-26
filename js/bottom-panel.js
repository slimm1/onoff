function initBottomPanelEvents() {

    const supportBarToggler = document.getElementById('toggleSupport');
    const monthlySubscriptionButton = document.getElementById('monthly-subscription-button');
    const uniqueDonationButton = document.getElementById('unique-donation-button');
    const closeBtn = document.getElementById('closeModal');
    const modal = document.getElementById('onoff-subscriptions-modal');
    const submitSubscriptionFormButton = document.getElementById('submitSubscriptionForm');

    // abrir el modal al pulsar el icono de donación mensual
    monthlySubscriptionButton.addEventListener('click', () => {
        supportBarToggler.click();
        fadeInModal(modal);
    });

    // abrir el modal al pulsar el icono de donación única
    uniqueDonationButton.addEventListener('click', () => {
        supportBarToggler.click();
        fadeInModal(modal);
    });

    // cerrar el modal al hacer clic en el icono x del modal
    closeBtn.addEventListener('click', () => fadeOutModal(modal));

    // cerrar el modal al hacer click en el boton de confirmar
    submitSubscriptionFormButton.addEventListener('click', () => fadeOutModal(modal));

    // evento click para para cerrar el modal al hacer click fuera
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            fadeOutModal(modal);      
        }
    }); 

    // Evento clic para el panel flotante inferior
    supportBarToggler.addEventListener('click', () => {
        const content = document.getElementById('supportContent');
        content.removeAttribute('style');
        const icon = document.querySelector('.bar-content .material-symbols-outlined');
        
        document.querySelector('.sticky-bottom-wrapper').classList.toggle('visible');
        icon.textContent = content.classList.contains('visible') ? 'arrow_drop_down' : 'arrow_drop_up';
    });

    // observer del panel flotante inferior para cuando hay intersección con el footer
    initBottomBarObserver();
}

function fadeInModal(modal) {
    modal.style.display = 'flex';
    requestAnimationFrame(() => {
        modal.classList.add('show');
    });
    toggleBodyScroll();
}

function fadeOutModal(modal) {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);    
    toggleBodyScroll(true);
}

/**
 * Inicia el observer de interseccion para la barra flotante inferior. 
 */
function initBottomBarObserver() {
    const stickyBar = document.getElementById("supportContent");
    const footer = document.querySelector("footer");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          stickyBar.style.transform = "translateY(100%)";
        } else {
            stickyBar.style.removeProperty('transform'); 
        }
      });
    }, {
      root: null,
      threshold: 0,
    });
  
    if (footer) observer.observe(footer);
}