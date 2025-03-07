document.addEventListener('DOMContentLoaded', () => {
    const sliderList = document.querySelector('.slider__list');
    const prevButton = document.querySelector('.slider__button--prev');
    const nextButton = document.querySelector('.slider__button--next');
    const indicators = document.querySelectorAll('.slider__indicator');
    const sliderItems = document.querySelectorAll('.slider__item'); 
    let currentSlide = 0;

    function updateSlider() {
        sliderList.style.transform = `translateX(-${currentSlide * 50}%)`;
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('slider__indicator--active', index === currentSlide);
        });
    }

    prevButton.addEventListener('click', () => {
        currentSlide = currentSlide === 0 ? 1 : 0;
        updateSlider();
    });

    nextButton.addEventListener('click', () => {
        currentSlide = currentSlide === 1 ? 0 : 1;
        updateSlider();
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
        });
    });

    function updateParallax() {
        const scrollPosition = window.scrollY; 
        const sliderOffset = document.querySelector('.slider').getBoundingClientRect().top + scrollPosition; 
        const windowHeight = window.innerHeight; 

        sliderItems.forEach((item) => {
            const itemOffset = item.getBoundingClientRect().top + scrollPosition; 
            const relativePosition = itemOffset - scrollPosition; 
            let parallaxOffset = (scrollPosition - sliderOffset) * 0.1; 
            parallaxOffset = Math.max(-100, Math.min(100, parallaxOffset));
            item.style.backgroundPosition = `center ${-parallaxOffset}px`;
        });
    }

    window.addEventListener('scroll', updateParallax);

    updateSlider();
    updateParallax();
});
