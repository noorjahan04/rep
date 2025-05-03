// Function to save notes to localStorage
function saveNotes() {
    const notes = document.getElementById("notes").value.trim();
    if (notes === "") {
        alert("Cannot save an empty note!");
        return;
    }
    localStorage.setItem("userNotes", notes);
    alert("Notes saved successfully!");
}
// Function to load saved notes from localStorage
function loadNotes() {
    const savedNotes = localStorage.getItem("userNotes");
    if (savedNotes) {
        document.getElementById("notes").value = savedNotes;
    } else {
        alert("No saved notes found.");
    }
}
// Function to clear saved notes from localStorage
function clearNotes() {
    localStorage.removeItem("userNotes");
    document.getElementById("notes").value = "";
    alert("Notes cleared successfully!");
}
// Load notes automatically on page load
window.onload = function () {
    loadNotes();
};