var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});



var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 0,
  centeredSlides: true,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  thumbs: {
    swiper: swiper,
  },
});

var swiper = new Swiper(".relatedProducts", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 1,
  freeMode: true,
  watchSlidesProgress: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  768: {
    slidesPerView: 1,
    spaceBetween: 30,
  },
  1200: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
});

// Close cart sidebar after clicking body
$(document).ready(function () {
  $(".cart-wrapper").click(function (e) {
    e.stopPropagation();
    $(".collapse-horizontal").addClass("show");

  });
  $("body").click(function () {
    $(".collapse-horizontal").removeClass("show");
  });
  $(".close-cart").click(function (e) {
    e.stopPropagation();
    $(".collapse-horizontal").removeClass("show");
  });
});
// Hide searchbar when scroll
$(window).scroll(function () {
  console.log('scrolling')

  if ($(this).scrollTop() > 50) {
    $('.search-field').addClass('hide-search-field');
    $('.search-icon-container').removeClass('hide-search-field');
  } else {
    $('.search-field').removeClass('hide-search-field');
    $('.search-icon-container').addClass('hide-search-field');
  }
});

$(function () {
  $(".search-icon-container").click(function () {
    $(this).addClass("hide-search-field");
    $('.search-field').removeClass('hide-search-field');
  });
});