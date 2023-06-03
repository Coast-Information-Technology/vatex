AOS.init({
  offset: 80,
  duration: 900,
});

const mediaScroller = document.querySelector(".media-scroller");
const leftController = document.querySelector(".left");
const rightController = document.querySelector(".right");
const mediaElements = document.querySelector(".media-element");

const mediaElementsTotal = mediaElements.classList.length;
let counter = 0;

const imageSlider = () => {
  leftController.addEventListener("click", () => {
    console.log(`This is the total media element ${mediaElementsTotal}`);
    console.log(`before clicking is ${counter}`);
    counter = counter + 35;
    mediaScroller.style.marginLeft = `${counter}%`;
    c;
    console.log("Left is clicked");
    console.log(`after clicking is ${counter}`);
  });
  rightController.addEventListener("click", () => {
    console.log(`This is the total media element ${mediaElementsTotal}`);
    console.log(`before clicking is ${counter}`);
    counter = counter - 35;
    mediaScroller.style.marginLeft = `${counter}%`;
    console.log("right is clicked");
    console.log(`after clicking is ${counter}`);
  });
};
imageSlider();


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



(function (w, d) {
  !(function (a, b, c, d) {
    a[c] = a[c] || {};
    a[c].executed = [];
    a.zaraz = { deferred: [], listeners: [] };
    a.zaraz.q = [];
    a.zaraz._f = function (e) {
      return function () {
        var f = Array.prototype.slice.call(arguments);
        a.zaraz.q.push({ m: e, a: f });
      };
    };
    for (const g of ["track", "set", "debug"]) a.zaraz[g] = a.zaraz._f(g);
    a.zaraz.init = () => {
      var h = b.getElementsByTagName(d)[0],
        i = b.createElement(d),
        j = b.getElementsByTagName("title")[0];
      j && (a[c].t = b.getElementsByTagName("title")[0].text);
      a[c].x = Math.random();
      a[c].w = a.screen.width;
      a[c].h = a.screen.height;
      a[c].j = a.innerHeight;
      a[c].e = a.innerWidth;
      a[c].l = a.location.href;
      a[c].r = b.referrer;
      a[c].k = a.screen.colorDepth;
      a[c].n = b.characterSet;
      a[c].o = new Date().getTimezoneOffset();
      if (a.dataLayer)
        for (const n of Object.entries(
          Object.entries(dataLayer).reduce(
            (o, p) => ({ ...o[1], ...p[1] }),
            {}
          )
        ))
          zaraz.set(n[0], n[1], { scope: "page" });
      a[c].q = [];
      for (; a.zaraz.q.length;) {
        const q = a.zaraz.q.shift();
        a[c].q.push(q);
      }
      i.defer = !0;
      for (const r of [localStorage, sessionStorage])
        Object.keys(r || {})
          .filter((t) => t.startsWith("_zaraz_"))
          .forEach((s) => {
            try {
              a[c]["z_" + s.slice(7)] = JSON.parse(r.getItem(s));
            } catch {
              a[c]["z_" + s.slice(7)] = r.getItem(s);
            }
          });
      i.referrerPolicy = "origin";
      i.src =
        "../../cdn-cgi/zaraz/sd0d9.js?z=" +
        btoa(encodeURIComponent(JSON.stringify(a[c])));
      h.parentNode.insertBefore(i, h);
    };
    ["complete", "interactive"].includes(b.readyState)
      ? zaraz.init()
      : a.addEventListener("DOMContentLoaded", zaraz.init);
  })(w, d, "zarazData", "script");
})(window, document);