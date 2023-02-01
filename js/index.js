// burger menu
let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav-header');
let menulinks = menu.querySelectorAll('.link-nav');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');
    menu.classList.toggle('nav-header--active');
  })

menulinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('nav-header--active');

    document.body.classList.remove('stop-scroll');

  })
})

// search
let loop = document.querySelector('.loop');
let form_head = document.querySelector('.form-header');
let search = document.querySelector('.form-header--active');
let search_close = document.querySelector('.search-close');
let search_hidden = document.querySelector('.search-hidden');
let input_header = document.querySelector('.input-header');


loop.addEventListener('click',
  function () {
    form_head.classList.add('form-header--active');
    input_header.classList.remove('search-hidden');
    search_close.classList.remove('search-hidden');
    menu.classList.add('search-hidden');
  })

search_close.addEventListener('click',
  function () {
    form_head.classList.remove('form-header--active');
    input_header.classList.add('search-hidden');
    search_close.classList.add('search-hidden');
    menu.classList.remove('search-hidden');
  })

// swiper

const container = document.querySelector(".container-banner")
const swiper = new Swiper('.hero__swiper', {
  speed: 300,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true
  }

})

// tabs
let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('tabs-nav__btn--active') });
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('tabs-item--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

// accord

document.addEventListener("DOMContentLoaded", function () {
  let acc = new Accordion('.accordion__list', {
    duration: 700,
    elementClass: 'accordion__item',
    triggerClass: 'accordion__top',
    panelClass: 'accordion__bottom',
    showMultiple: false,

    collapse: true
  });
})

