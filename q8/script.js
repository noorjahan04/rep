// Function to handle event and show alerts
function handleEvent(event) {
    alert(`Clicked: ${event.currentTarget.id}`);
}

// Event listeners for bubbling (default behavior)
document.getElementById('outer').addEventListener('click', handleEvent);
document.getElementById('middle').addEventListener('click', handleEvent);
document.getElementById('inner').addEventListener('click', handleEvent);

// Event listener for stopping propagation on innerButton
document.getElementById('innerButton').addEventListener('click', function(event) {
    alert(`Clicked: ${this.id}`);
    event.stopPropagation(); // Stops propagation
});

// Event listeners for capturing phase
document.getElementById('outer').addEventListener('click', handleEvent, true);
document.getElementById('middle').addEventListener('click', handleEvent, true);
document.getElementById('inner').addEventListener('click', handleEvent, true);