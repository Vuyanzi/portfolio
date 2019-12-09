// Button animation
export function animateButton(e) {
  e.preventDefault;
  e.target.classList.remove("animate");
  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
}

// Animate dark mode transition
export function animateMode() {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 3000);
}

// Enabling dark mode
export function enableDarkMode() {
  animateMode();
  document.documentElement.setAttribute("data-theme", "dark");
  document
    .querySelector("meta[name=theme-color]")
    .setAttribute("content", "#111");
  localStorage.setItem("darkMode", "enabled");
}

// Disable dark mmode
export function disableDarkMode() {
  animateMode();
  document.documentElement.setAttribute("data-theme", "light");
  document
    .querySelector("meta[name=theme-color]")
    .setAttribute("content", "#fff");
  localStorage.setItem("darkMode", null);
}