/*
  * Define all variables
*/
let buttons = document.querySelectorAll(".btn");

let darkMode = localStorage.getItem("darkMode");
let darkModeToggle = document.querySelector("input[name=mode]");

let header = document.querySelector(".header-wrapper");
let menuToggle = document.querySelector(".menu-toggle");
let menu = document.querySelector(".main-menu");

let forms = document.querySelectorAll('form');

/*
  * Import required functions
*/
import {
  animateButton,
  enableDarkMode,
  disableDarkMode
} from "./modules/assets.js";

/*
  * Perfom all the required actions
*/
buttons.forEach(el => {
  el.onclick = animateButton;
});

if (darkMode === "enabled") {
  enableDarkMode();
  darkModeToggle.checked = true;
}

darkModeToggle.addEventListener("change", function () {
  darkMode = localStorage.getItem("darkMode");
  if (this.checked && darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

menuToggle.onclick = e => {
  e.stopPropagation();
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
  header.classList.toggle("active");

  document.documentElement.onclick = () => {
    if (e.target.closest(".main-menu")) return;
    menuToggle.classList.remove("active");
    menu.classList.remove("active");
    header.classList.remove("active");
  };
};

forms.forEach(el => {
  el.onsubmit = e => {
    e.preventDefault();
  }
})