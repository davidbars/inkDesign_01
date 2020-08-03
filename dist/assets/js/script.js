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
/* HAMBURGER */
let menu = document.querySelector('.menu');
const overlay = document.createElement('div');
overlay.classList.add('overlay');
const overlayContainer = document.createElement('div');
overlayContainer.classList.add('overlay__container');
overlay.append(overlayContainer);
const linkMain = document.createElement('a');
linkMain.classList.add('overlay__link');
linkMain.textContent = 'главная';
linkMain.href = '#main';
overlayContainer.append(linkMain);
const linkServices = document.createElement('a');
linkServices.classList.add('overlay__link');
linkServices.textContent = 'услуги';
linkServices.href = '#services';
overlayContainer.append(linkServices);
const linkPortfolio = document.createElement('a');
linkPortfolio.classList.add('overlay__link');
linkPortfolio.textContent = 'портфолио';
linkPortfolio.href = 'archive.html';
overlayContainer.append(linkPortfolio);
const header = document.querySelector('.header');
header.after(overlay);
let spans = document.querySelectorAll('.menu__span');

const overlayIcons = document.createElement('div');
overlayIcons.classList.add('overlay__icons')
overlay.append(overlayIcons);
const bhIcon = document.createElement('img');
bhIcon.classList.add('icon__image');
const bhIconLink = document.createElement('a');
bhIconLink.href = '#';
bhIcon.src = 'assets/img/bh.png';
bhIconLink.classList.add('overlay__icon');
bhIconLink.classList.add('icon');
overlayIcons.append(bhIconLink);
bhIconLink.append(bhIcon);
const instIcon = document.createElement('img');
instIcon.classList.add('icon__image');
const instIconLink = document.createElement('a');
instIconLink.href = '#';
instIcon.src = 'assets/img/inst.png';
instIconLink.classList.add('overlay__icon');
instIconLink.classList.add('icon');
overlayIcons.append(instIconLink);
instIconLink.append(instIcon);
const mailIcon = document.createElement('img');
mailIcon.classList.add('icon__image');
const mailIconLink = document.createElement('a');
mailIconLink.href = '#';
mailIcon.src = 'assets/img/mail.png';
mailIconLink.classList.add('overlay__icon');
mailIconLink.classList.add('icon');
overlayIcons.append(mailIconLink);
mailIconLink.append(mailIcon);
const inIcon = document.createElement('img');
inIcon.classList.add('icon__image');
const inIconLink = document.createElement('a');
inIconLink.href = '#';
inIcon.src = 'assets/img/in.png';
inIconLink.classList.add('overlay__icon');
inIconLink.classList.add('icon');
overlayIcons.append(inIconLink);
inIconLink.append(inIcon);
let links = document.querySelectorAll('.overlay__link');

const languageSwitcher = document.createElement('div');
languageSwitcher.classList.add('overlay__language');
languageSwitcher.textContent = 'RU';
overlay.append(languageSwitcher);

menu.addEventListener("click", function () {
    menu.classList.toggle('on');
    spans.forEach(element => element.classList.toggle('on'));
    links.forEach(element => element.classList.toggle('on'));
    overlay.classList.toggle('active');
    overlayIcons.classList.toggle('on');
    languageSwitcher.classList.toggle('on');
});
links.forEach(element => element.addEventListener('click', function () {
    menuToggle.classList.toggle('on');
    spans.forEach(element => element.classList.toggle('on'));
    links.forEach(element => element.classList.toggle('on'));
    overlay.classList.toggle('overlay');
    overlayIcons.classList.toggle('on');
    languageSwitcher.classList.toggle('on');
}))
/* HAMBURGER END */
/* SERVICES */
let servicesCards = document.querySelectorAll('.services__card');
let servicesTabs = document.querySelectorAll('.services__tab');
let servicesContents = document.querySelectorAll('.services__content');
let contentWrapper = document.querySelectorAll('.content__wrapper');

function removeTabClasses() {
    servicesTabs.forEach(tab => tab.classList.remove('current'));
}
function elevateTabs() {
    servicesTabs.forEach(tab => tab.classList.add('active'));
}
function revealContent() {
    servicesContents.forEach(content => content.classList.add('active'));
}
function hideContentWrapper() {
    contentWrapper.forEach(wrapper => wrapper.classList.remove('active'));
}

function removeBorders() {
    servicesCards.forEach(card => card.style.border = 'none');
}


servicesTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
        elevateTabs();
        removeTabClasses();
        revealContent();
        removeBorders();
        hideContentWrapper();
        if (tab === servicesTabs[0]){
            setTimeout(() => contentWrapper[0].classList.add('active'), 500);
            setTimeout(() => contentWrapper[1].classList.add('active'), 1000);
            setTimeout(() => contentWrapper[2].classList.add('active'), 1500);
        } else if (tab === servicesTabs[1]) {
            setTimeout(() => contentWrapper[1].classList.add('active'), 500);
            setTimeout(() => contentWrapper[0].classList.add('active'), 1000);
            setTimeout(() => contentWrapper[2].classList.add('active'), 1500);
        } else if (tab === servicesTabs[2]) {
            setTimeout(() => contentWrapper[2].classList.add('active'), 500);
            setTimeout(() => contentWrapper[1].classList.add('active'), 1000);
            setTimeout(() => contentWrapper[0].classList.add('active'), 1500);
        }
        tab.classList.add('current');
    })
})
/* SERVICES END */
/* PORTFOLIO */
let gridItems = document.querySelectorAll('.grid__item');

function resizeBg() {
    this.classList.add('active');
}
function initialBg() {
    this.classList.remove('active');
}

gridItems.forEach(function (gridItem) {
    gridItem.addEventListener('mouseover', resizeBg);
    gridItem.addEventListener('mouseout', initialBg);
})
/* PORTFOLIO END */
// Contact

let servicesBtns = document.querySelectorAll('.services__btn');
let contact = document.querySelector('.contact');
let contactClose = document.querySelector('.contact__close');

servicesBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        contact.classList.add('active');
    })
})
contactClose.addEventListener('click', function () {
    contact.classList.remove('active');
})

// Contact END