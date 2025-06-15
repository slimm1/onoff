function checkHorizontalScroll() {
    const scrollContainer = document.querySelector();
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    const canScroll = scrollWidth > clientWidth;

    if (!canScroll) {
    console.log('No hay scroll horizontal disponible.');
    return;
    }

    const atLeft = scrollLeft === 0;
    const atRight = scrollLeft + clientWidth >= scrollWidth - 1; // tolerancia de 1px

    if (atLeft && !atRight) {
    onScrollDirection('right'); // puede hacer scroll a la derecha
    } else if (!atLeft && atRight) {
    onScrollDirection('left'); // puede hacer scroll a la izquierda
    } else if (!atLeft && !atRight) {
    onScrollDirection('both'); // puede hacer scroll en ambos sentidos
    } else {
    onScrollDirection('none'); // contenido completamente visible
    }
}