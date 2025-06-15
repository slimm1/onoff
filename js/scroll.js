function smoothScroll(direction) {
    const scrollContainer = document.querySelector('.scroll-x');
    const cards = Array.from(scrollContainer.querySelectorAll('.slim-card'));

    if (!scrollContainer || cards.length === 0) return;

    const containerRect = scrollContainer.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    // Encontrar la tarjeta más cercana al centro actual del contenedor
    let closestCardIndex = 0;
    let minDistance = Infinity;

    cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(containerCenter - cardCenter);
        if (distance < minDistance) {
            minDistance = distance;
            closestCardIndex = index;
        }
    });

    // Determinar la tarjeta objetivo
    let targetIndex = direction === 'left'
        ? Math.max(0, closestCardIndex - 1)
        : Math.min(cards.length - 1, closestCardIndex + 1);

    // Lógica adicional para extremos
    if (targetIndex === 0) {
        scrollContainer.scrollTo({
            left: 0,
            behavior: 'smooth'
        });
        return;
    }

    if (targetIndex === cards.length - 1) {
        scrollContainer.scrollTo({
            left: scrollContainer.scrollWidth,
            behavior: 'smooth'
        });
        return;
    }

    // Scroll para centrar la tarjeta objetivo
    const targetCard = cards[targetIndex];
    const targetRect = targetCard.getBoundingClientRect();
    const scrollOffset = (targetRect.left + targetRect.width / 2) - containerCenter;

    scrollContainer.scrollBy({
        left: scrollOffset,
        behavior: 'smooth'
    });
}

function initSlimScroll() {
    const rightScrollButton = document.querySelector('.scroll-right-btn');
    const leftScrollButton = document.querySelector('.scroll-left-btn');
    if(rightScrollButton){
        rightScrollButton.addEventListener('click', () => smoothScroll('right'));
    }
    if(leftScrollButton){
        leftScrollButton.addEventListener('click', () => smoothScroll('left'));
    }
}