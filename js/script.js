const togleNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const navLists = document.querySelector(".main-nav-list");

togleNav.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

const year = document.getElementById("currentYear");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      header.classList.toggle("nav-open");
      // ambil menu link yang active
      const menuActive = document.querySelector(
        ".main-nav-list li a.menu-active"
      );

      // jika menu yang aktif tidak sama dengan yang di klik user (href nya di cek)
      if (menuActive.getAttribute("href") !== link.getAttribute("href")) {
        //  maka hapus clas menu-active nya
        menuActive.classList.remove("menu-active");
      }
      // dan tambahkan clas menu-active
      link.classList.add("menu-active");
    }
  });
});

// Sticky navigation
const sectionHeader = document.querySelector(".header");

const obs = new IntersectionObserver(
  (entries) => {
    const inter = entries[0].isIntersecting;
    console.log(inter);

    if (!inter) document.body.classList.add("sticky");
    else document.body.classList.remove("sticky");
  },
  {
    // in the view port
    rootMargin: "-70px",
  }
);

obs.observe(sectionHeader);
