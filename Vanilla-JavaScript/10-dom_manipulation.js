/**
 * Document Object Model (DOM) Manipulation
 * (use your browser for the best experience)
 * (open the pages/10.html file in your browser)
 */

/**
 * We can access the contents of an HTML file using the DOM API (Application Programming Interface)
 * An API is nothing but an interface to connect two or more programs together
 * In this case, it's connecting this JavaScript file to the 10.html file.
 */

/**
 * We can access those elements using the global `document` object.
 */

const myContainer = document.getElementById("container");
const myInput = document.querySelector("input");

myInput.addEventListener("keyup", () => {
    myContainer.innerText = myInput.value;
});