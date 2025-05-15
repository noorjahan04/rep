const list = document.querySelector("#list");
const addButton = document.querySelector("#addItemButton");
addButton.addEventListener("click", function() {
    let newItem = document.createElement("li");
    newItem.textContent = "New Item";
    let listItems = list.getElementsByTagName("li");
    let sequenceNumber = listItems.length + 1; 
    if (sequenceNumber % 2 !== 0) {
        newItem.classList.add("odd"); 
    } else {
        newItem.classList.add("even"); 
    }
    list.appendChild(newItem);
});