const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // Toggle nav
    nav.classList.toggle("nav-active");
    burger.classList.toggle("active");

    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
      }
    });

    // Burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

const backgrounds = ["slide1.png", "slide2.png"];

const background = document.querySelector(".background-image");

let index = 0;

function changeBackground() {
  index++;

  if (index >= backgrounds.length) {
    index = 0;
  }

  background.style.backgroundImage = `url('../img/${backgrounds[index]}')`;
  background.classList.add("active");

  setTimeout(() => {
    background.classList.remove("active");
  }, 4500);
}

changeBackground();

setInterval(changeBackground, 5000);
