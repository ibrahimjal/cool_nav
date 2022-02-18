const menuBar = document.getElementById("menuBar")
const nav = document.querySelector("nav")
const topRight = document.getElementById("topRight")
const topLeft = document.getElementById("topLeft")
const bottomNav = document.getElementById("bottomNav")
const closeMenu = document.getElementById("closeMenu")


menuBar.addEventListener("click", function(){
    topRight.classList.toggle("top-right-hide")
    topLeft.classList.toggle("top-left-hide")
    bottomNav.classList.toggle("bottom-nav-hide")

    
})
closeMenu.addEventListener("click", function(){
    topRight.classList.toggle("top-right-hide")
    topLeft.classList.toggle("top-left-hide")
    bottomNav.classList.toggle("bottom-nav-hide")
    
})

