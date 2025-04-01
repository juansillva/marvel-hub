//interação sidebar mobile//

const menu = document.getElementById('menu')
const sideBar = document.querySelector('.sidebar')
menu.addEventListener('click', () => {
    sideBar.style.transform = 'translateX(0)';
})

const closeSideBar = document.querySelector('.close-sidebar')

closeSideBar.addEventListener('click', () => {
    sideBar.style.transform = 'translateX(-100%)';
})

document.addEventListener("DOMContentLoaded", function () {
    const posts = document.querySelectorAll(".post-item");   

    posts.forEach(post => {   //percorre os posts e adiciona um evento de click
        post.addEventListener("click", function () {
            const filmeId = this.getAttribute("data-id"); 

            if (filmeId) {
                window.location.href = `modelo.html?filme=${filmeId}`;
            }
        });
    });
});



