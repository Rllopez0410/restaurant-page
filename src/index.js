import { mainPage } from "./main-page.js";
import { contactPage } from "./contact-page.js";
import { menuPage } from "./menu-page.js";
import { scss } from "./index.scss";

export const content = document.getElementById("content");
content.classList.add("content");

 // -- Navigation Bar --

const navBar = document.createElement("div");
const homeTab = document.createElement("div");
const menuTab = document.createElement("div");
const contactTab = document.createElement("div");

content.appendChild(navBar);
navBar.appendChild(homeTab);
navBar.appendChild(menuTab);
navBar.appendChild(contactTab);

homeTab.textContent = "Home";
menuTab.textContent = "Menu";
contactTab.textContent = "Contact";

navBar.classList.add("nav");

// -- Main --

const mainDiv = document.createElement("div");
content.appendChild(mainDiv);
mainDiv.classList.add("main");

// -- Footer --

const footer = document.createElement("footer");
footer.textContent = "footer";
content.appendChild(footer);

// -- Functionality --

function displayNewContent(tab) {
    const main = document.querySelector(".main");
    mainDiv.replaceChildren();
    let mainchild;
    switch (tab) {
        case "home":
            mainchild = mainPage();
            break;
        case "menu":
            mainchild = menuPage();
            break;
        case "contact":
            mainchild = contactPage();
            break;        
        default:
    }
    return main.appendChild(mainchild);
}

homeTab.addEventListener("click", () => {
    displayNewContent("home")
})

menuTab.addEventListener("click", () => {
    displayNewContent("menu")
})

contactTab.addEventListener("click", () => {
    displayNewContent("contact")
})

displayNewContent("home");