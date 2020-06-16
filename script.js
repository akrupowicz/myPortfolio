// Burger
const ico = document.querySelector('.burger');
const nav = document.querySelector('.menu');
const body = document.querySelector('html');
ico.addEventListener('click', function () {
    ico.classList.toggle('active');
    nav.classList.toggle('on');
})

// Popracuj nad tym:

// const li = document.querySelectorAll('.link');
// li.addEventListener('click', function () {
//     nav.classList.toggle('on');
//     console.log('działa')
// })