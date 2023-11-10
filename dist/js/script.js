'use strict';

const open = document.querySelector('.hamburger');
const close = document.querySelector('.menu__close');
const close_overlay=document.querySelector('.menu__overlay');
const menu = document.querySelector('.menu');

open.addEventListener('click', () => {
	menu.classList.add('active');
});

close.addEventListener('click', () => {
	menu.classList.remove('active');
});
close_overlay.addEventListener('click', () => {
	menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter');
const lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i)=>{
	lines[i].style.width = item.innerHTML;
});
