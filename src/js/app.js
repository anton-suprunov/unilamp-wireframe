import $ from 'jquery';
//import Swiper from 'swiper/dist/js/swiper.js`;
import Swiper from 'swiper';

const onDomReady = () => {
  setDynamicElementsHeights();
  initSlider();
  initPages();
};

const setDynamicElementsHeights = () => {
  $('.news-block').height($('.news-block').width());
  $('.catalog-img').height($('.catalog-img').width());

  $('.menu-open').on('click', (e) => {
    $('.menu').addClass('menu_active');
    e.preventDefault();
  });
  $('.menu-close').on('click', (e) => {
    $('.menu').removeClass('menu_active');
    e.preventDefault();
  });
};

const initSlider = () => {
  new Swiper('.slider', {
    loop: true,
    navigation: {
      nextEl: '.slider-arrow_right',
      prevEl: '.slider-arrow_left',
    },
  });

  new Swiper('.products-slider', {
    loop: true,
    navigation: {
      nextEl: '.product-arrow_right',
      prevEl: '.product-arrow_left',
    },
  });
};

const initPages = () => {
  $('.product-link').on('click', (e) => {
    e.preventDefault();
    switchPage('product');
  });
  $('.product-back').on('click', (e) => {
    e.preventDefault();
    switchPage('index');
  });
};

const switchPage = (toPage, backwards) => {
  const toPageEl = $('.page[data-page-id="' + toPage + '"]');
  const activePage = $('.page.page_active');

  if (!toPageEl.length) {
    return false;
  }
  scrollToTop();
  setTimeout(() => { 
    toPageEl.addClass('page_enter'); 
    activePage.addClass('page_exit');
    
    setTimeout(() => {
      toPageEl
        .removeClass('page_enter')
        .addClass('page_active');
      
      activePage.removeClass('page_exit page_active');
    }, 500);
  }, 300);
};

const scrollToTop = () => {
  var body = $("html, body");
  body.stop().animate({ scrollTop: 0 }, 300);
}; 

$(onDomReady);
