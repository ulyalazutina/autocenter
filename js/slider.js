import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
 
 export const slider = () => {
    const swiper = new Swiper('.swiper', {
        
      slidesPerView: 1,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      // when window width is >= 320px
      1024: {
        slidesPerView: 3,
        spaceBetween: 12,
        grid: {
                rows: 2,
                fill: "row",
        },
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 12,
        grid: {
                rows: 2,
                fill: "row",
        },
      },
      550: {
        slidesPerView: 1,
        spaceBetween: 12,
        grid: {
                rows: 2,
                fill: "row",
        },
      },
    }
  
});
 }