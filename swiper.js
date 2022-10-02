


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
 
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      1000: {
        slidesPerView: 3,
        spaceBetween: 20,
        allowSlidePrev: false,
        allowSlideNext:false,
        autoplay: false
      }
    }
      });
