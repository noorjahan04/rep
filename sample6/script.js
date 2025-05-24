// Function to fetch images from Picsum API
async function fetchImages() {
    try {
        // Fetch data from Picsum API with pagination parameters
        let response = await fetch("https://picsum.photos/v2/list?page=1&limit=10");
        // Check if the response is successful, else throw an error
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        // Convert the response into JSON format
        let data = await response.json();
        // Log the fetched data in the console for debugging
        console.log("Fetched Data:", data);
        // Loop through the fetched data and dynamically create image elements
        data.forEach(photo => {
            const img = document.createElement("img"); // Create an <img> element
            img.src = photo.download_url; // Set image source URL
            img.alt = "Random Image"; // Set alternative text for accessibility
            img.style.width = "200px";  // Define fixed width for images
            img.style.height = "150px"; // Define fixed height for images
            gallery.appendChild(img); // Append the image to the gallery container
        });
    } catch (error) {
        // Handle errors that occur during the fetch process
        console.error("Error fetching images:", error);
        alert("Failed to load images. Check your internet connection."); // Show an alert for user feedback
    }
}
// Ensure images are fetched only after the page is fully loaded
document.addEventListener("DOMContentLoaded", fetchImages);