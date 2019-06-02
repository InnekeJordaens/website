//menu
let menuKnop = document.querySelector(".menu");
let navMenu = document.querySelector("nav");
let mainGedeelte = document.querySelector("main");
function verbergMenu() {
	navMenu.classList.add("onzichtbaar");
}

mainGedeelte.addEventListener("click",verbergMenu);

function toonMenu() {
	navMenu.classList.remove("onzichtbaar");
}

menuKnop.addEventListener("click",toonMenu);


//dark en light modus
let darkLink = document.querySelectorAll(".modus a")[0];
let lightLink = document.querySelectorAll(".modus a")[1];
let mijnCSS = document.querySelector("#switchcss");

function switchToLight() {
	mijnCSS.setAttribute("href","stijl-light.css");
}
function switchToDark() {
	mijnCSS.setAttribute("href","stijl-dark.css");
}
lightLink.addEventListener("click",switchToLight);
darkLink.addEventListener("click",switchToDark);
