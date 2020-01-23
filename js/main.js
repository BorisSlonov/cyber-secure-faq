$(document).ready(function () {
     //spoiler
     $('.answer-item__title').click(function (event) {
        if($('.answer-container').hasClass('one')){
            $('.answer-item__title').not($(this)).removeClass('activeA');
            $('.answer-item__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('activeA').next().slideToggle(300);
        
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__list'),
    menuItem = document.querySelectorAll('.header__link'),
    hamburger = document.querySelector('.header__burger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('burger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('burger_active');
            menu.classList.toggle('menu_active');
        })
    })
})