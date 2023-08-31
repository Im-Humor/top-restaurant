import './style.css';

export default function createAppend(objectType, appendedParent, newClass = 0) {
    const newElement = document.createElement(objectType);
    if (typeof newClass == 'string') {
        newElement.classList.add(newClass)
    }
    appendedParent.appendChild(newElement);
    return newElement;
}

const pageContent = document.querySelector("#content");

const testObject = createAppend("div", pageContent, "header");
testObject.innerText = "hi";


console.log("Hello, butthead!");