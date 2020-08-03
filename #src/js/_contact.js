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