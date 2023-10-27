'use strict';

const open = document.querySelector('.hamburger');
const close = document.querySelector('.menu__close');
const menu = document.querySelector('.menu');

open.addEventListener('click', () => {
	menu.classList.add('active');
});

close.addEventListener('click', () => {
	menu.classList.remove('active');
});
