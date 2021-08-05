const burger = document.getElementById('burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const header = document.querySelector('header.header');

burger.addEventListener('click', () => {

  setTimeout(() => {
    burger.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open');
    header.classList.toggle('menu-open');
  }, 1);
});
