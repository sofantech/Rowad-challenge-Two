let toggle_btn=document.querySelector(".header .toglle .toglle-btn");
let toggle_img_hamburger=document.querySelector(".header .toglle .toglle-btn img.hamburger");
let toggle_img_close=document.querySelector(".header .toglle .toglle-btn img.close");
let navBar=document.querySelector(".header .nav-bar");
toggle_img_hamburger.onclick=function () {
    navBar.classList.add("active");
    toggle_img_hamburger.classList.add("hide");
    toggle_img_close.classList.remove("hide");
    
}
toggle_img_close.onclick=function () {
    toggle_img_close.classList.add("hide");
    toggle_img_hamburger.classList.remove("hide");
    navBar.classList.remove("active");
    
}