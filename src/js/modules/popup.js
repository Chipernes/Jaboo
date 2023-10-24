// Popups
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 300;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index += 1) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener('click', (event) => {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            event.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index += 1) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', (event) => {
           popupClose(el.closest('.popup'));
            event.preventDefault();
        });
    }
}

function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
        const popupActive = document.querySelector('.popup-open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        currentPopup.classList.add('open');
        currentPopup.addEventListener('click', (event) => {
            if (!event.target.closest('.popup__content')) {
                popupClose(event.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive, isUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (isUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue =
        window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index += 1) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }

    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(() => {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(() => {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index += 1) {
                const el = lockPadding[index];
                el.style.paddingRight = '0';
            }
        }
        body.style.paddingRight = '0';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(() => {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});


