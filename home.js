let currentSlide = 0;
    const slides = document.querySelector('.slider');
    const slideWidth = document.querySelector('.slider img').offsetWidth;

    function showSlide() {
        slides.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.children.length;
        showSlide();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.children.length) % slides.children.length;
        showSlide();
    }