const header = document.querySelector('header.header');

//language
const languageSwitch = document.querySelector('.language');

languageSwitch.addEventListener('click', (e) => {
  let $this = e.currentTarget;
  $this.classList.toggle('is-open');
});

//mobile menu
const burger = document.getElementById('burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');

burger.addEventListener('click', () => {

  setTimeout(() => {
    burger.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open');
    header.classList.toggle('menu-open');
    document.body.classList.toggle('hide-scroll');
  }, 1);
});

//modals
const openModalBtn = document.querySelectorAll('.js-open-modal');
const modals = document.querySelectorAll('.modal');
const modalContainer = document.querySelectorAll('.modal__container');

/*--- Кнопки открытия модалок ---*/
openModalBtn.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    let current = e.currentTarget;
    let targetModal = document.getElementById(current.getAttribute('data-modal'));

    openModal(targetModal);
  });
});

/*--- Закрытие модалки по клику вне ---*/
modalContainer.forEach(item => {
  item.addEventListener('click', event => {
    event.stopPropagation();
  });
});

modals.forEach(item => {
  item.addEventListener('click', event => {
    let currentModal = event.currentTarget;

    closeModal(currentModal);
  })
});
/*--------*/

let openModal = (modal) => {
  modals.forEach(item => {
    closeModal(item);
  });

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('hide-scroll');
}

let closeModal = (modal) => {
  if (header.classList.contains('menu-open')) {
    header.classList.remove('menu-open');
    document.querySelector('.mobile-menu').classList.remove('is-open');
    document.querySelector('.menu-burger').classList.remove('is-open');
  }
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('hide-scroll');
}


//reviews slider
$(function() {

  $('.slider__inner').slick({
    arrows: false,
    infinire: false

  });
});


//tabs
let Shuffle = window.Shuffle;
const element = document.getElementById('content-documents');
const mainTabBtns = document.querySelectorAll('.tabs-nav__btn');

let shuffleInstance = new Shuffle(element, {
  itemSelector: '.document-card'
});


let shuffleTab = (buttons, activeClass) => {
  buttons.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      let currentBtn = e.currentTarget;
      let target = currentBtn.getAttribute('data-target');

      setActiveTab(buttons, currentBtn, activeClass);

      shuffleInstance.filter(target);
    });
  })
}

let setActiveTab = (tabs, current, className) => {
  Array.from(tabs).forEach(function (el) {
    el.classList.remove(className);
  });

  current.classList.add(className);
}

/*Табы верхнего уровня*/
shuffleTab(mainTabBtns, 'tabs-nav__btn--active');

