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
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,
  centeredSlides: true,
  disableOnInteraction: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: true,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 1440px
    1440: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
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


//-----JS for Price Range slider-----
function getVals() {
  // Get slider values
  let parent = this.parentNode;
  let slides = parent.getElementsByTagName("input");
  let slide1 = parseFloat(slides[0].value);
  let slide2 = parseFloat(slides[1].value);
  // Neither slider will clip the other, so make sure we determine which is larger
  if (slide1 > slide2) { let tmp = slide2; slide2 = slide1; slide1 = tmp; }

  let minRangeValue = document.getElementsByClassName("minRangeValue")[0];
  let maxRangeValue = document.getElementsByClassName("maxRangeValue")[0];
  minRangeValue.innerHTML = "$" + slide1;
  maxRangeValue.innerHTML = "$" + slide2;
}

window.onload = function () {
  // Initialize Sliders
  let sliderSections = document.getElementsByClassName("range-slider");
  for (let x = 0; x < sliderSections.length; x++) {
    let sliders = sliderSections[x].getElementsByTagName("input");
    for (let y = 0; y < sliders.length; y++) {
      if (sliders[y].type === "range") {
        sliders[y].oninput = getVals;
        // Manually trigger event first time to display values
        sliders[y].oninput();
      }
    }
  }
}

$(document).ready(function () {
  $(".category-heading").click(function (e) {
    e.stopPropagation();
    if ($(".category-list").hasClass("d-block")) {
      $(".category-list").removeClass("d-block");
      $(".category-list").addClass("d-none");
    } else {
      $(".category-list").addClass("d-block");
      $(".category-list").removeClass("d-none");
    }

  });
});

$(document).ready(function () {
  $(".price-heading").click(function (e) {
    e.stopPropagation();
    if ($(window).width() < 700) {

      if ($(".range-slider").hasClass("d-block")) {
        $(".range-slider").removeClass("d-block");
        $(".range-slider").addClass("d-none");
        if ($(".brands").hasClass("mt-120")) {
          $(".brands").removeClass("mt-120");
          $(".brands").addClass("mt-30");
        } else {
          $(".brands").addClass("mt-120");
          $(".brands").removeClass("mt-30");
        }

      } else {
        $(".range-slider").addClass("d-block");
        $(".range-slider").removeClass("d-none");
        $(".brands").addClass("mt-120");
        $(".brands").removeClass("mt-30");
      }
    }
  });
});


$(document).ready(function () {
  $(".brands").click(function (e) {
    e.stopPropagation();
    if ($(".form-check").hasClass("d-block")) {
      $(".form-check").removeClass("d-block");
      $(".form-check").addClass("d-none");
    } else {
      $(".form-check").addClass("d-block");
      $(".form-check").removeClass("d-none");
    }

  });
});