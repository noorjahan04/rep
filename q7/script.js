let item2 = document.getElementById("item2");
item2.addEventListener("click", () => {
    alert(`Parent Node Content: ${item2.parentNode.textContent.trim()}`);
    let prevSibling = item2.previousElementSibling;
    let nextSibling = item2.nextElementSibling;
    console.log(`Previous Sibling: ${prevSibling ? prevSibling.textContent : "None"}`);
    console.log(`Next Sibling: ${nextSibling ? nextSibling.textContent : "None"}`);
});