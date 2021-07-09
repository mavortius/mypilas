var toggle = document.querySelector('.js-button-toggler');

toggle.onclick = function () {
  var menu = document.querySelector('.js-menu');
  menu.classList.toggle('menu--is-shown');
}
