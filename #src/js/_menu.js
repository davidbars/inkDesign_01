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