document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.header__burger');
    const navigation = document.querySelector('.navigation');
    const closeButton = document.querySelector('.navigation__close');
    const overlay = document.querySelector('.navigation__overlay');
    const homeLink = document.querySelector('.navigation__link[href="#promo"]'); // Выбираем ссылку Home

    burger.addEventListener('click', () => {
        navigation.classList.remove('navigation--closed');
        navigation.classList.add('navigation--opened');
    });

    closeButton.addEventListener('click', () => {
        navigation.classList.remove('navigation--opened');
        navigation.classList.add('navigation--closed');
    });

    overlay.addEventListener('click', () => {
        navigation.classList.remove('navigation--opened');
        navigation.classList.add('navigation--closed');
    });

    homeLink.addEventListener('click', (event) => {
        event.preventDefault(); 
        navigation.classList.remove('navigation--opened'); 
        navigation.classList.add('navigation--closed');
        window.location.reload();
    });
});