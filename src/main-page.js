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
    const mainContent = document.createElement("div");
    mainContent.textContent = "Welcome To Noodle"
    main.appendChild(mainContent);
    content.appendChild(main);
    mainContent.classList.add("mainContent");
}

function footer() {
    const footer = document.createElement("footer");
    footer.textContent = "footer";
    content.appendChild(footer);
}

header();   
navbar();
main();
footer();