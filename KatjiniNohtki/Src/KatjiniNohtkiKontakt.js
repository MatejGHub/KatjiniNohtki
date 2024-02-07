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

// Opens new website and goes to storitve-section
storitveBtn.addEventListener("click", () => {
  window.open("KatjiniNohtki.html#storitve-section", "_self");
});

// Resets form information after 1000ms
let myForm = document.querySelector(".form-grid");

myForm.addEventListener("submit", function (e) {
  setTimeout(() => {
    e.target.reset();
  }, 1000);
});
