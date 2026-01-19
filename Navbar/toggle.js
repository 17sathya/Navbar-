const toggle=document.querySelector(".menu-toggle");
const navlinks=document.querySelector(".nav-links");
toggle.addEventListener("click",()=>{
    navlinks.classList.toggle("active");
})