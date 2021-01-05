console.log("Working");


var mobileMenu = document.querySelector('.mobile-menu')

mobileMenu.addEventListener('click', function(){
    document.querySelector('nav').classList.toggle("active");
})