const content = document.getElementById("content");

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

// -- Main --

