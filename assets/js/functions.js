var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        300: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 30,
        },

    },
});

var swiper2 = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper3 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    thumbs: {
        swiper: swiper,
    },
});
