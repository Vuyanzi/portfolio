export function animateButton(e){e.preventDefault,e.target.classList.remove("animate"),e.target.classList.add("animate"),setTimeout((function(){e.target.classList.remove("animate")}),700)}export function animateMode(){document.documentElement.classList.add("transition"),window.setTimeout(()=>{document.documentElement.classList.remove("transition")},3e3)}export function enableDarkMode(){animateMode(),document.documentElement.setAttribute("data-theme","dark"),document.querySelector("meta[name=theme-color]").setAttribute("content","#111"),localStorage.setItem("darkMode","enabled")}export function disableDarkMode(){animateMode(),document.documentElement.setAttribute("data-theme","light"),document.querySelector("meta[name=theme-color]").setAttribute("content","#fff"),localStorage.setItem("darkMode",null)}
//# sourceMappingURL=../../sourcmaps/js/modules/assets.js.map