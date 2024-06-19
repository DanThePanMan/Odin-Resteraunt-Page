import "./style.css";
import { homepage } from "./pages/Home"


//getting queryselecting the 3 buttons and add event listener
const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const about = document.querySelector(".about")


home.addEventListener("click", () => console.log("home loaded"))
menu.addEventListener("click", () => console.log("menu loaded"))
about.addEventListener("click", () => console.log("about loaded"))
