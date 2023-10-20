import { scss } from "./index.scss";

const content = document.getElementById("content");

function navbar() {
    const nav = document.createElement("div");
    const homeTab = document.createElement("div");
    const menuTab = document.createElement("div");
    const contactTab = document.createElement("div");
    homeTab.textContent = "Home";
    menuTab.textContent = "Menu";
    contactTab.textContent = "Contact";
    content.appendChild(nav);
    nav.appendChild(homeTab);
    nav.appendChild(menuTab);
    nav.appendChild(contactTab);
    nav.classList.add("nav");
}

navbar();