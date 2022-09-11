const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.main-menu')
hamburger.addEventListener('click', () => {
  menu.classList.contains('display') ? menu.classList.remove('display') : menu.classList.add('display');
  console.log(menu)
})