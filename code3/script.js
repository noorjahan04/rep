// Function to handle event and show alerts
function handleEvent(event) {
    alert(`Clicked: ${this.id}`);
}
// Event listeners for bubbling (default behavior)
document.getElementById('outer').addEventListener('click', handleEvent);
document.getElementById('middle').addEventListener('click', handleEvent);
document.getElementById('inner').addEventListener('click', handleEvent);
document.getElementById('innerButton').addEventListener('click', function(event) {
    alert(`Clicked: ${this.id}`);
    event.stopPropagation(); // Stop event from propagating further
});
// Event listeners for capturing phase
document.getElementById('outer').addEventListener('click', handleEvent, true);
document.getElementById('middle').addEventListener('click', handleEvent, true);
document.getElementById('inner').addEventListener('click', handleEvent, true);