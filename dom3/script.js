const colorInput = document.getElementById("colorInput");
const textInput = document.getElementById("textInput");
const changeBgButton = document.getElementById("changeBgButton");
const updateTextButton = document.getElementById("updateTextButton");
const contentDiv = document.getElementById("contentDiv");
changeBgButton.addEventListener("click", function() {
    let color = colorInput.value.trim(); 
    contentDiv.style.backgroundColor = color;
    if (contentDiv.style.backgroundColor === "") {
        alert("Invalid color name!");
    }
});
updateTextButton.addEventListener("click", function() {
    let text = textInput.value.trim(); 
    if (text === "") {
        alert("Please enter some text!");
    } else {
        contentDiv.textContent = text;
    }
});