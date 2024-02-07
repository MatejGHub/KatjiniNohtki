const storitveBtn = document.querySelector(".storitve");

let narocanjeSectionSize = document.querySelector(".naročanje-section");
let formDisplay = document.querySelector(".form-grid");

let zaposlena1 = document.querySelector(".zaposlena-1-container");
let zaposlena2 = document.querySelector(".zaposlena-2-container");

// Opens main webpage and scrolls to storitve section
storitveBtn.addEventListener("click", () => {
  window.open("KatjiniNohtki.html#storitve-section", "_self");
});

// If zaposlena1 is clicked it display form. If it's clicked again it hides the form
zaposlena1.addEventListener("click", function () {
  if (this.classList.contains("selected")) {
    this.classList.remove("selected");
    formDisplay.classList.remove("active");
    narocanjeSectionSize.classList.remove("active");
  } else {
    this.classList.add("selected");
    formDisplay.classList.add("active");
    narocanjeSectionSize.classList.add("active");
    zaposlena2.classList.remove("selected");
  }
});

// If zaposlena2 is clicked it display form. If it's clicked again it hides the form
zaposlena2.addEventListener("click", function () {
  if (this.classList.contains("selected")) {
    this.classList.remove("selected");
    formDisplay.classList.remove("active");
    narocanjeSectionSize.classList.remove("active");
  } else {
    this.classList.add("selected");
    formDisplay.classList.add("active");
    narocanjeSectionSize.classList.add("active");
    zaposlena1.classList.remove("selected"); // Remove 'selected' from other element
  }
});

// Listens for changes in the naročanje field
document.getElementById("service").addEventListener("change", function () {
  let optionsSelect = document.getElementById("options");
  optionsSelect.innerHTML = ""; // Clear current options
  optionsSelect.disabled = false; // Enable the select field

  // If the selected value is manicure it will add options for manicure in options select
  if (this.value === "manicure") {
    // Add options for manicure
    optionsSelect.innerHTML = `
    <option value="" disabled selected>Izberite storitev</option>
    <option value="option1">Klasična manikura</option>
      <option value="option2">Navadno lakiranje</option>
      <option value="option3">Permanentno novo/staro</option>
      <option value="option4">Francoska/Baby Boomer</option>
      <option value="option5">Poslikava nohta</option>
      <option value="option6">Popravilo nohta</option>`;
  }
  // If the selected value is pedicure it will add options for pedicure in options select
  else if (this.value === "pedicure") {
    // Add options for pedicure
    optionsSelect.innerHTML = `
    <option value="" disabled selected>Izberite storitev</option>
    <option value="option1">Klasična pedikura</option>
      <option value="option2">Permanentno lakiranje</option>
      <option value="option3">Pedikura + navaden lak</option>
      <option value="option4">Spa pedikura + limfna drenaža</option>
      <option value="option5">Spa pedikura + permanentno lakiranje</option>
      `;
  }
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
