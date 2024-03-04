/*=============== SHOW MENU ===============*/
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/*===============  MENU SHOW ===============*/
navToggle.addEventListener("click", function () {
  navMenu.classList.add("show-menu");
});
/*===============  MENU HIDDEN ===============*/
navClose.addEventListener("click", function () {
  navMenu.classList.remove("show-menu");
});

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== sticky ===============*/
const homeSection = document.getElementById("home");
const initialCoords = homeSection.getBoundingClientRect();
window.addEventListener("scroll", function () {
  if (window.scrollY > initialCoords.bottom) header.classList.add("sticky");
  else header.classList.remove("sticky");
});

/*=============== Reaveal sections ===============*/
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

/*=============== project count ===============*/
const counters = document.querySelectorAll(".creation-value, .exp-value");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.7,
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const target = entry.target;
      const targetValue = parseInt(target.textContent);
      let currentCount = 0;

      const updateCount = () => {
        target.textContent = `+${currentCount}`;
        if (currentCount < targetValue) {
          currentCount++;
          setTimeout(updateCount, 50);
        }
      };

      updateCount();
      observer.unobserve(target);
    }
  });
};

const observer = new IntersectionObserver(callback, options);
counters.forEach((counter) => {
  observer.observe(counter);
});

/*=============== Reveal Projects ===============*/

document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll(".project");

  const revealProjects = () => {
    projects.forEach((project) => {
      const projectTop = project.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (projectTop < windowHeight * 0.8) {
        project.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealProjects);

  // Initial check
  revealProjects();
});
