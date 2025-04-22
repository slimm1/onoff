function initSideMenuEvents() {
    
    const burgerMenu = document.getElementById('burger-menu-top');
    const svg = document.querySelectorAll('.slim-side-menu svg');
    const sectionDisplay = document.querySelector(".onoff-section-display");
    const sections = sectionDisplay.querySelectorAll('div');

    let sectionPositions = [];

    svg.forEach((el, index) => {
        el.addEventListener('click', () => {
            const screenWidth = window.innerWidth; 
            if(sectionPositions.length === 0){
                sectionPositions = Array.from(sections).map(sec => sec.offsetTop);
            }
            svg.forEach(s => s.classList.remove('toggled'));
            el.classList.add('toggled');
            let pos = 0;
            if(index > 0){
                pos = el.parentElement.offsetTop - sectionPositions[index];
            }
            if (index + 1 === svg.length && screenWidth <= 500) {
                pos = pos - 60; 
            }
            sectionDisplay.style.transform = `translateY(${pos}px)`;
        });
    });

    sections.forEach((section, index) => {
        section.addEventListener('mouseenter', () => {
            if(sectionPositions.length === 0){
                sectionPositions = Array.from(sections).map(sec => sec.offsetTop);
            }
            svg.forEach(el => el.classList.remove('toggled'));
            svg[index].classList.add('toggled');
            let pos = 0;
            if(index > 0){
                pos = svg[index].parentElement.offsetTop - sectionPositions[index];
            }
            sectionDisplay.style.transform = `translateY(${pos}px)`;
        });
    });

    burgerMenu.addEventListener('click', () => {
        const sideMenu = document.getElementById('onoff-side-menu');
        burgerMenu.classList.toggle('is-active');
        sideMenu.classList.toggle('active');
    });
}