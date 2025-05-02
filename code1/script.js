// Get references to the elements
let container = document.getElementById('container');
let addButton = document.getElementById('add');
let removeButton = document.getElementById('remove');
// Function to add a new paragraph
addButton.addEventListener('click', function() {
    let newParagraph = document.createElement('p'); // Creating a new paragraph element
    newParagraph.textContent = 'This is a new paragraph.'; // Set its text content
    container.appendChild(newParagraph); // Append it to the div
});
// Function to remove the last paragraph
removeButton.addEventListener('click', function() {
    if (container.lastChild) { // Checking if there's a child to remove
        container.removeChild(container.lastChild); // Remove the last paragraph
    }
});