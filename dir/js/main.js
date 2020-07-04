const menuBtn = document.querySelector('.menu-btn');
const humburger = document.querySelector('.menu-btn_burger');
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.menu-nav');
const navItem = document.querySelectorAll('.menu-nav__item'); 

let showMenu = false;

menuBtn.addEventListener('click', toogleMenu);

function toogleMenu(){
    if(!showMenu){
        humburger.classList.add('open');
        nav.classList.add('open');
        navMenu.classList.add('open');
        navItem.forEach(item => {
            item.classList.add('open');
        })
        showMenu = true; 
    } else {
        humburger.classList.remove('open');
        nav.classList.remove('open');
        navMenu.classList.remove('open');
        navItem.forEach(item => {
            item.classList.remove('open');
        })
        showMenu = false; 
    }
}

