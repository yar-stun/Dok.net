let Shuffle = window.Shuffle;
const element = document.getElementById('content-documents');
const mainTabBtns = document.querySelectorAll('.tabs-nav__btn');
const filterBtns = document.querySelectorAll('.js-filter-document');

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

/*Табы сортировки*/
shuffleTab(filterBtns, 'tabs-category__btn--active');

/*Установка первого активного при загрузке*/
setActiveTab(filterBtns, filterBtns[0], 'tabs-category__btn--active');
shuffleInstance.filter(filterBtns[0].getAttribute('data-target'));
