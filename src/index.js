import './style.css';
import updateHomeContent from './homecontent.js';
import updateMenuContent from './menucontent';
import updateContactContent from './contactcontent';

export default function createAppend(objectType, appendedParent, newClass = 0) {
    const newElement = document.createElement(objectType);
    if (typeof newClass == 'string') {
        newElement.classList.add(newClass)
    }
    appendedParent.appendChild(newElement);
    return newElement;
}

const page = document.querySelector("#content");

// create grid sections and append to page content area
const headerContent = createAppend("div", page, "header");
const menuContent = createAppend("div", page, "nav-menu");
export const innerContent = createAppend("div", page, "inner-content");
const footerContent = createAppend("div", page, "footer");

// create navmenu links
const navMenu = createAppend("ul", menuContent)
const navHomeTab = createAppend("li", navMenu)
const navMenuTab = createAppend("li", navMenu)
const navContactTab = createAppend("li", navMenu)

navHomeTab.innerHTML = "<h3>Home</h3>";
navMenuTab.innerHTML = "<h3>Menu</h3>";
navContactTab.innerHTML = "<h3>Contact</h3>";

// populate header
headerContent.innerHTML = "<h1>Best Restaurant Ever</h1>"

// populate footer
footerContent.innerHTML = "<h5>Copyright Moi</h5>"

// add event listeners
navHomeTab.addEventListener("click", updateHomeContent)
navMenuTab.addEventListener("click", updateMenuContent)
navContactTab.addEventListener("click", updateContactContent)

updateHomeContent();