const togleNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

togleNav.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});
