const hamburger = document.querySelector(".hamburger")
const navlinks = document.querySelector(".navlinks")

hamburger.addEventListener("click",function(){
    hamburger.classList.toggle("active")
    navlinks.classList.toggle("active")
})
