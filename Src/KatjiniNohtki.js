const storitveBtn = document.querySelector(".storitve");
const cenikBtn = document.querySelector(".cenik");
const naročanjeBtn = document.querySelector(".naročanje");
const kontaktBtn = document.querySelector(".kontakt");
const logoBtn = document.querySelector(".logo-image");

const storitveSection = document.querySelector(".storitve-section");
const kontaktSection = document.querySelector(".kontakt-section");

const arrowToTopBtn = document.querySelector(".arrow-top-section");

// Window scroll event listener
window.addEventListener("scroll", () => {
  // Arrow to top button
  if (window.scrollY > 1000) {
    arrowToTopBtn.classList.add("active");
  } else {
    arrowToTopBtn.classList.remove("active");
  }
  //
});

// Arrow to top button event listener
arrowToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Window load event listener
window.addEventListener("load", () => {
  // Scroll to section if hash is present
  if (window.location.hash === "#storitve-section") {
    window.scrollBy(0, -140);
  }
  //
});

// Scrolls to stortive section
storitveBtn.addEventListener("click", () => {
  storitveSection.scrollIntoView({ behavior: "smooth" });
  window.scrollBy(0, -140);
});

// Scrolls to kontakt section
kontaktBtn.addEventListener("click", () => {
  kontaktSection.scrollIntoView({ behavior: "smooth" });
  window.scrollBy(0, -55);
});

// Scrolls to top
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

// Storitve Images
const manicureImages = [
  "../Images/Storitve/Manikura Delo/Manikura1.jpg",
  "../Images/Storitve/Manikura Delo/Manikura2.jpg",
  "../Images/Storitve/Manikura Delo/Manikura3.jpg",
  "../Images/Storitve/Manikura Delo/Manikura4.jpg"
];

const pedicureImages = [
  "../Images/Storitve/Pedikura Delo/Pedikura1.png",
  "../Images/Storitve/Pedikura Delo/Pedikura2.png",
  "../Images/Storitve/Pedikura Delo/Pedikura3.png",
  "../Images/Storitve/Pedikura Delo/Pedikura4.png"
];

let manicureIndex = 1;
let pedicureIndex = 1;

const manicureImage = document.querySelector(".manikura");
const pedicureImage = document.querySelector(".pedikura");

let manicureInterval;
let pedicureInterval;

// Manicure and Pedicure carousel
function startManicureCarousel() {
  manicureInterval = setInterval(() => {
    if (manicureIndex === manicureImages.length) {
      manicureIndex = 0;
    }
    manicureImage.src = manicureImages[manicureIndex];
    manicureIndex++;
  }, 2000);
}

function startPedicureCarousel() {
  pedicureInterval = setInterval(() => {
    if (pedicureIndex === pedicureImages.length) {
      pedicureIndex = 0;
    }
    pedicureImage.src = pedicureImages[pedicureIndex];
    pedicureIndex++;
  }, 2000);
}
//

// Manicure and Pedicure event listeners
manicureImage.addEventListener("mouseover", () => {
  manicureImage.src = manicureImages[0];
  startManicureCarousel();
});
manicureImage.addEventListener("mouseout", () => {
  manicureImage.src = "../Images/Storitve/Manikura.png";
  clearInterval(manicureInterval);
});

pedicureImage.addEventListener("mouseover", () => {
  pedicureImage.src = pedicureImages[0];
  startPedicureCarousel();
});
pedicureImage.addEventListener("mouseout", () => {
  pedicureImage.src = "../Images/Storitve/Pedikura.png";
  clearInterval(pedicureInterval);
});
//
