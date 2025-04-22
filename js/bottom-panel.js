function initBottomPanelEvents() {

    const supportBarToggler = document.getElementById('toggleSupport');
    const monthlySubscriptionButton = document.getElementById('monthly-subscription-button');
    const uniqueDonationButton = document.getElementById('unique-donation-button');
    const closeBtn = document.getElementById('closeModal');
    const modal = document.getElementById('onoff-subscriptions-modal');

    monthlySubscriptionButton.addEventListener('click', () => {
        supportBarToggler.click();
        fadeInModal(modal);
    });

    uniqueDonationButton.addEventListener('click', () => {
        supportBarToggler.click();
        fadeInModal(modal);
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);        }
    }); 

    supportBarToggler.addEventListener('click', () => {
        const content = document.getElementById('supportContent');
        const icon = document.querySelector('.bar-content .material-symbols-outlined');
        
        document.querySelector('.sticky-bottom-wrapper').classList.toggle('visible');
        icon.textContent = content.classList.contains('visible') ? 'arrow_drop_down' : 'arrow_drop_up';
    });
}

function fadeInModal(modal) {
    modal.style.display = 'flex';
    requestAnimationFrame(() => {
        modal.classList.add('show');
    });
}
