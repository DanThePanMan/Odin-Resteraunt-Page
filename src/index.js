import "./style.css";
import displayHomePage from "./pages/Home"
import { displayMenu } from "./pages/menu";
import { displayAbout } from "./pages/about";


//getting queryselecting the 3 buttons and add event listener
const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const about = document.querySelector(".about")
displayHomePage();


home.addEventListener("click", () => {displayHomePage()})
menu.addEventListener("click", () => {displayMenu()})
about.addEventListener("click", () => {displayAbout()})
