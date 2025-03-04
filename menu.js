const navToggle = document.getElementById('nav-toggle');
const mainMenu = document.getElementById('main-menu');

navToggle.addEventListener('click', function(){
    mainMenu.classList.toggle('active');
});

