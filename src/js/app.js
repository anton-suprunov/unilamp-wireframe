import $ from 'jquery';

const onDomReady = () => {
  setDynamicElementsHeights();
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

$(onDomReady);
