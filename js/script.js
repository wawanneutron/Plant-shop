const togleNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

togleNav.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

const year = document.getElementById("currentYear");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      header.classList.toggle("nav-open");
    }
  });
});
