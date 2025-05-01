// Select elements
const colorInput = document.getElementById("colorInput");
const textInput = document.getElementById("textInput");
const changeBgButton = document.getElementById("changeBgButton");
const updateTextButton = document.getElementById("updateTextButton");
const contentDiv = document.getElementById("contentDiv");
// Function to change background color
changeBgButton.addEventListener("click", function() {
    let color = colorInput.value.trim(); // Get user input and trim whitespace
    // Check if the entered color is valid
    contentDiv.style.backgroundColor = color;
    if (contentDiv.style.backgroundColor === "") {
        alert("Invalid color name!");
    }
});
// Function to update text content
updateTextButton.addEventListener("click", function() {
    let text = textInput.value.trim(); // Get user input and trim whitespace
    if (text === "") {
        alert("Please enter some text!");
    } else {
        contentDiv.textContent = text;
    }
});