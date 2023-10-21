import { scss } from "./index.scss";

const content = document.getElementById("content");

function header() {
    const header = document.createElement("div");
    header.textContent = "Noodle";
    content.appendChild(header);
    header.classList.add("head");
}

function navbar() {
    const nav = document.createElement("nav");
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
    homeTab.classList.add("home");
    menuTab.classList.add("menu");
    contactTab.classList.add("contact");
}

function main() {
    const main = document.createElement("main");
    content.appendChild(main);
}

header();   
navbar();