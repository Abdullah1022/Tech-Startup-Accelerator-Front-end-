let loginForm = document.querySelector('.login-form');
let navBar = document.querySelector('.nav-list');
let contact = document.querySelector('.contact-card');
let closebtn = document.querySelector('#pup');
var blur = document.querySelector('.blur');

document.querySelector('#menu-btn').onclick =() => {
  navBar.classList.toggle('active-nav')
}

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active')
}

document.querySelector('#contact').onclick = () => {
  contact.classList.toggle('active1')
  blur.classList.toggle('active3');
}

document.querySelector('#pup').onclick = () =>{
    contact.classList.toggle('active1')
    blur.classList.toggle('active3');
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });