const languageSwitch = document.querySelector('.language');

languageSwitch.addEventListener('click', (e) => {
  let $this = e.currentTarget;
  $this.classList.toggle('is-open');
})
