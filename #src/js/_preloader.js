/* PRELOADER */
let smile = document.querySelector(".preloader__smile");
let logo = document.querySelector(".header__logo");
let headerTitle = document.querySelector(".header__title");
let headerMenu = document.querySelector('.header__menu');
let line = document.querySelector('.header__line');
function lineOpacity() {
    setInterval(() => line.style.opacity = '1', 800);
    setInterval(() => line.style.opacity = '0', 1600 );
}
document.addEventListener("DOMContentLoaded", function() {
    document.body.style.overflow = 'hidden';
    window.scrollTo(0,0);
    setTimeout(() => smile.style.opacity = "1", 3000);
    setTimeout(() => logo.style.opacity = '1', 3000);
    setTimeout(() => headerMenu.style.opacity = '1', 3000);
    setTimeout(() => smile.style.backgroundImage = "url('assets/img/smile_success.png')", 4000);
    setTimeout(() => document.body.style.overflow = "", 4000);
    setTimeout(() => smile.style.backgroundSize = "contain", 4000);
    setTimeout(() => smile.style.backgroundRepeat = "no-repeat", 4000);
    setTimeout(() => headerTitle.classList.add('active'), 4000);
    setTimeout(() => smile.style.backgroundImage = "url('../assets/img/smile_loading.png')", 5000);
    setTimeout(lineOpacity, 3000);
});
/* PRELOADER END */