// Burger menu
const body = document.querySelector('body');
const burger = document.querySelector('.icon-menu');
const menuList = document.querySelector('.menu__list');
const menuPersonalisation = document.querySelector('.menu__personalisation');

burger?.addEventListener('click', (event) => {
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

// Change localisation
const changeLocal = document.querySelector('.spoiler');
const spoilerList = document.querySelector('.spoiler__list');
const popupLink = document.querySelector('.spoiler .menu__popup-link');
changeLocal?.addEventListener('click', (event) => {
    changeLocal.classList.toggle('active');
});

spoilerList?.addEventListener('click', (event) => {
    if (event.target.closest('.spoiler__item')) {
        let local = popupLink.innerHTML;
        popupLink.innerHTML = event.target.innerHTML;
        event.target.innerHTML = local;
    }
});
