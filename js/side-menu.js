function initSideMenuEvents() {
    
    const burgerMenu = document.getElementById('burger-menu-top');
    const toggleIcons = document.querySelectorAll('.slim-side-menu svg');
    const sectionDisplay = document.querySelector(".onoff-section-display");
    const sections = sectionDisplay.querySelectorAll('div');
    let sectionPositions = [];

    // Evento clic para los togglers del menu lateral. Realizan un scroll suave hasta la sección correspondiente.
    toggleIcons.forEach((icon, index) => {
        if(sectionPositions.length === 0){
            sectionPositions = Array.from(sections).map(sec => sec.offsetTop);
        }
        icon.addEventListener('click', () => {
            toggleIcons.forEach(icon => icon.classList.remove('toggled'));
            icon.classList.add('toggled');
            sectionDisplay.scrollTo({
                top: index === 0 ? 0 : sectionPositions[index] - 120,
                behavior: 'smooth'
            });
        });
    });

    // Evento mouseEnter para las secciones. Disparan el toggler correspondiente.
    sections.forEach((section, index) => {
        section.addEventListener('mouseenter', (event) => {
            const matchinToggler = toggleIcons[index];
            toggleIcons.forEach(icon => icon.classList.remove('toggled'));
            matchinToggler.classList.add('toggled');
        });
    });

    // boton de menu hamburguesa para mostrar u ocultar el menu lateral.
    burgerMenu.addEventListener('click', () => {
        const sideMenu = document.getElementById('onoff-side-menu');
        burgerMenu.classList.toggle('is-active');
        sideMenu.classList.toggle('active');
        toggleBodyScroll(!sideMenu.classList.contains('active'));
    });
}