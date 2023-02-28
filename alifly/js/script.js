let loginForm = document.querySelector('.login-form');
let registerForm = document.querySelector('.register-form')
let contact = document.querySelector('.contact-card')
let closebtn = document.querySelector('#pup')
let body = document.querySelector('body')



document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active')
}

document.querySelector('#register-btn').onclick = () => {
    registerForm.classList.toggle('active')
}

document.querySelector('#contact').onclick = () => {
  body.classList.toggle('active3')
  contact.classList.toggle('active1')
}

document.querySelector('#pup').onclick = () =>{
    contact.classList.toggle('active1')
    body.classList.toggle('active3')
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