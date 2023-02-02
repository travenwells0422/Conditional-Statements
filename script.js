// Header
const header = document.createElement("header");
document.body.appendChild(header);

let h1Element = document.createElement("h1");
h1Element.innerText = "Conditional Statements";
header.append(h1Element);

// Main HTML Element
let main = document.createElement("main");
document.body.appendChild(main);

// Section HTML Element
let section = document.createElement("section");
document.body.appendChild(section);

let input = document.createElement("input");
input.type = "number";
input.id = "inputOne";
input.placeholder = "Number";
main.append(input);

let input2 = document.createElement("input");
input2.type = "number";
input2.id = "inputTwo";
input2.placeholder = "Number";
main.append(input2);

const button = document.createElement("button");
button.innerText = "Solve";
button.id = "solveButton";
main.append(button);

document.querySelector("#solveButton").addEventListener("click", solveOnClick);

function solveOnClick() {
    const a = document.querySelector("#inputOne").value;
    const b = document.querySelector("#inputTwo").value;

    let value = parseInt(a) + parseInt(b);

    const h2Element = document.createElement("h2");
    h2Element.style.paddingTop = "40px";
    section.append(h2Element);

    const image = document.createElement("img");
    image.style.width = "300px";
    image.style.height = "300px";
    image.style.marginBottom = "40px";
    image.style.objectFit = "contain";
    image.style.borderStyle = "solid";
    image.style.borderWidth = "thick";
    image.style.borderRadius = "3rem";
    section.append(image);

    if (value > 0) {
        h2Element.innerText = `${value} is greater than 0. Great Job!!`;
        image.src = "./images/VeryGood.jpeg";
        console.log("Greater than 0!!");
        console.log(value);
    } else {
        h2Element.innerText = `${value} below 0. Try again!`;
        image.src = "./images/VeryGood.jpeg";
        console.log("Value below 0");
    }
}

// Reload Button to DOM
const reloadPage = document.createElement("button");
reloadPage.innerText = "Reload";
reloadPage.id = "reloadButton";
main.append(reloadPage);

document
    .querySelector("#reloadButton")
    .addEventListener("click", reloadOnClick);
function reloadOnClick() {
    location.reload();
}

// Inline Styling
const body = document.querySelector("body");
body.style.backgroundColor = "lightGray";
body.style.margin = "10px";

// Header Inline - Styling
header.style.height = "100px";
header.style.backgroundColor = "orange";
header.style.borderStyle = "solid";
header.style.borderWidth = "thick";
header.style.borderRadius = "2rem";
header.style.textAlign = "center";

h1Element.style.paddingTop = "10px";

// Main Inline - Styling
main.style.marginTop = "40px";
main.style.textAlign = "center";

// Section Inline - Styling
section.style.marginTop = "20px";
section.style.textAlign = "center";
section.style.background = "gray";
section.style.borderRadius = "1rem";
