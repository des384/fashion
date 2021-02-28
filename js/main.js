// $('.header__burger').click(function (event) {
//     $('.header__burger,.main__menu').toggleClass('active');
//     $('body').toggleClass('lock');
// });



document.querySelector(".header__burger").onclick = function (){
    this.classList.toggle("active");
    document.querySelector(".main__menu").classList.toggle("active");
    document.querySelector("body").classList.toggle("lock");    
 }

