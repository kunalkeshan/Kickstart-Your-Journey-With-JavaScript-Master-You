/**
 * Event Listeners
 * (use your browser for the best experience)
 * (open the pages/09.html file in your browser)
 */

/**
 * The browser has inbuilt capabilities to identify `user` based interaction.
 * These interactions are identified as events by JavaScript.
 * For example, you can say,
 *  - When the power is back, I can watch TV then. (waiting for a event, then calling a function)
 *  - When I have two more days left for exams, I will start studying. XD
 */

// Getting our html elements in a variable
const countContainer = document.getElementById("count-container");

// Initializing our count variable
let count = 0;
console.log(`Count: ${count}`);

// Add the count value to the container
countContainer.innerText = count;

// function to increment the count when the container is clicked
const incrementCount = () => {
    count++;
    countContainer.innerText = count;
    console.log(count);
}

countContainer.addEventListener('click', () => {
    incrementCount();
});