const openModalBtn = document.querySelectorAll('.js-open-modal');
const modal = document.querySelectorAll('.modal');
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

modal.forEach(item => {
  item.addEventListener('click', event => {
    let currentModal = event.currentTarget;

    closeModal(currentModal);
  })
});
/*--------*/

let openModal = (modal) => {

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('hide-scroll');
}

let closeModal = (modal) => {

    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('hide-scroll');
}
