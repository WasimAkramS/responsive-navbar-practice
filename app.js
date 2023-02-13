// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navLinks = document.querySelector(".nav-links")
const toggleBtn = document.querySelector("button")

toggleBtn.addEventListener("click", function(){
    navLinks.classList.toggle("active")
})