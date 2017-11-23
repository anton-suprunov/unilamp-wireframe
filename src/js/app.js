import $ from 'jquery';
//import Swiper from 'swiper/dist/js/swiper.js`;
import Swiper from 'swiper';

const onDomReady = () => {
  setDynamicElementsHeights();
  initSlider();
};

const setDynamicElementsHeights = () => {
  $('.news-block').height($('.news-block').width());
  $('.catalog-img').height($('.catalog-img').width());

  $('.menu-open').on('click', (e) => {
    $('.menu').addClass('menu_active');
  });
  $('.menu-close').on('click', (e) => {
    $('.menu').removeClass('menu_active');
  });
};

const initSlider = () => {
  new Swiper('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.slider-arrow_right',
      prevEl: '.slider-arrow_left',
    },
  });
};

$(onDomReady);
