// Burger menu
const body = document.querySelector('body');
const burger = document.querySelector('.icon-menu');
const menuList = document.querySelector('.menu__list');
const menuPersonalisation = document.querySelector('.menu__personalisation');

burger?.addEventListener('click', () => {
    burger.classList.toggle('menu-open');
    menuList.classList.toggle('menu-open');
    menuPersonalisation.classList.toggle('menu-open');
    body.classList.toggle('lock');
});

// Changing of list
const mediaQueryTransfer = window.matchMedia('(max-width: 425px)');
window.addEventListener('DOMContentLoaded', checkWidth);
mediaQueryTransfer.addEventListener('change', updateMenu);

function updateMenu() {
    if (window.innerWidth <= 425) {
        checkWidth();
    } else {
        menuList.querySelectorAll('.menu__popup').forEach((item) => item.remove());
        menuList.insertAdjacentHTML('afterend', menuPersonalisation.outerHTML);
    }
}

function checkWidth() {
    if (window.innerWidth <= 425) {
        menuList.insertAdjacentHTML('beforeend', menuPersonalisation.innerHTML);
        document.querySelector('.menu__personalisation').remove();
    }
}

// Fixed header
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > header.offsetHeight) {
        header.classList.add('header_fixed');
    } else {
        header.classList.remove('header_fixed');
    }
});
