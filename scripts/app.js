const menu = document.getElementById('menu')
const sideBar = document.querySelector('.sidebar')
menu.addEventListener('click', () => {
    sideBar.style.transform = 'translateX(0)';
})

const closeSideBar = document.querySelector('.close-sidebar')

closeSideBar.addEventListener('click', () => {
    sideBar.style.transform = 'translateX(-100%)';
})

const postItem = document.querySelector('.post-item')
const postItemBack = document.querySelector('.post-item-back')


document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 800,  // Duração da animação (em ms)
        easing: "ease-out",  // Tipo de transição
        once: true  // Se true, a animação acontece só uma vez
    });
});
