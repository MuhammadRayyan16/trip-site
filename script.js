let menubars = document.querySelector('#menu-bars');

let mynav = document.querySelector('.navbar');

let loginform = document.querySelector('#myloginform');
let userlogin = document.querySelector('.login-form-container');


menubars.onclick = () =>{
    menubars.classList.toggle('fa-times');
    mynav.classList.toggle('active');
}

loginform.onclick = () =>{
    userlogin.classList.toggle('active');
}

const navbar = document.querySelector('.header');
window.onscroll = () =>{
    if(window.scrollY > 300){
        navbar.classList.add('active')
    }
    else{
        navbar.classList.remove('active');
    }
}






























// const navbar = document.querySelector('.header');
// window.onscroll = () => {
//     if (window.scrollY > 300) {
//         navbar.classList.add('nav-active');
//     } else {
//         navbar.classList.remove('nav-active');
//     }
// };