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