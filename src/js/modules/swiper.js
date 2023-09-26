const swiper = new Swiper('.testimonials__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    effect: 'cards',
    grabCursor: true,

    pagination: {
        el: '.testimonials__swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});