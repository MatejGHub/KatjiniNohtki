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

const storitveBtn = document.querySelector(".storitve");

storitveBtn.addEventListener("click", () => {
  window.open("KatjiniNohtki.html#storitve-section", "_self");
});
