// Style the backgrounf in JS
// Using the DOM API

const body = document.body;
// Now we can access and manipulate the body of the home page

// Create a button toggle the background
// Call the button to check wehn it's clicked
// To all classes we use .
// To call IDs we use #

const button = document.querySelector(".buttton-container ")

// Create the logic
// Check what the current background is
// Then change the background to a different one
// When the button is clicked

let background = 1;

function toggleBackGround(){

    // This is the function thay we will sue to change the background
    // the logic employe here must adhere to the requirement

    background = background === 1 ? 2 : 1; // Check the operator
    // If the operator is 1 we want to assign background number 1

    body.classList.remove(`bg- ${3-background}`); // Remove the class of the current background
    body.classList.add(`bg- ${background}`);
    // The next thing we need to do is give the bg class

}


// Event listener
// the event listener takes in the method and function name
button.addEventListener("click", toggleBackGround);