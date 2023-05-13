
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

const navToggle = document.querySelector('.mobile-nav-toggle')
const nav = document.querySelector('.nav')
const subMenu = document.querySelector('.navbar-submenu');
const dropdown = document.querySelector('.dropdown');
const mobileScreen = window.innerWidth

navToggle.addEventListener('click', () => {
  if (nav.hasAttribute('data-visible')) {
    navToggle.setAttribute("aria-expanded", false)
  } else {
    navToggle.setAttribute("aria-expanded", true)
  }
  nav.toggleAttribute('data-visible')
})

console.log(`screen width ${mobileScreen}`)
if (mobileScreen <= 768) {

  dropdown.addEventListener('click', () => {
    if (subMenu.hasAttribute('data-visible') === null) {
      dropdown.setAttribute("aria-expanded", false)
    } else {
      dropdown.setAttribute("aria-expanded", true)
    }
    subMenu.toggleAttribute('data-visible')
  })
}