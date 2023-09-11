// Burger menu
const burger = document.querySelector('.icon-menu');
const menuList = document.querySelector('.menu__list');

if (burger) {
    burger.addEventListener('click', () => {
       burger.classList.toggle('menu-open');
       menuList.classList.toggle('menu-open');
    });
}