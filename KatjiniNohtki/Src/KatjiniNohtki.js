const storitveBtn = document.querySelector(".storitve");
const cenikBtn = document.querySelector(".cenik");
const naročanjeBtn = document.querySelector(".naročanje");
const kontaktBtn = document.querySelector(".kontakt");
const logoBtn = document.querySelector(".logo-image");

const storitveSection = document.querySelector(".storitve-section");
const kontaktSection = document.querySelector(".kontakt-section");

const arrowToTopBtn = document.querySelector(".arrow-top-section");

window.addEventListener("scroll", () => {
  if (window.scrollY > 1000) {
    arrowToTopBtn.classList.add("active");
  } else {
    arrowToTopBtn.classList.remove("active");
  }
});

storitveBtn.addEventListener("click", () => {
  storitveSection.scrollIntoView({ behavior: "smooth" });
  window.scrollBy(0, -55);
});

kontaktBtn.addEventListener("click", () => {
  kontaktSection.scrollIntoView({ behavior: "smooth" });
  window.scrollBy(0, -55);
});

logoBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const hamburgerBtn = document.querySelector("#hamburger-menu");
const closeBtn = document.querySelector(".close-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.add("active");
  hamburgerMenu.classList.add("active");
  closeBtn.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  closeBtn.classList.remove("active");
  hamburgerMenu.classList.remove("active");
  hamburgerBtn.classList.remove("active");
});

arrowToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
