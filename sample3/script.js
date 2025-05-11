// Function to fetch user data from the JSONPlaceholder API
async function fetchUsers() {
    try {
        // Make an API request to retrieve user data
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        // Check if the request was successful
        if (!response.ok) {
            throw new Error("Failed to fetch users"); // Throw an error if response is not OK
        }
        // Convert the response to JSON format
        const users = await response.json();
        // Get the selected sorting criteria from the dropdown
        const sortCriteria = document.getElementById("sort").value;
        // Sort users based on the selected criteria (name, email, or username)
        users.sort((a, b) => a[sortCriteria].localeCompare(b[sortCriteria]));
        // Display the sorted users on the page
        displayUsers(users);
    } catch (error) {
        // Log any errors that occur during the API call
        console.error("Error fetching users:", error);
    }
}
// Function to display users in the UI
function displayUsers(users) {
    // Get the HTML element where users will be displayed
    const userList = document.getElementById("userList");
    // Clear any existing content before displaying new data
    userList.innerHTML = "";
    // Loop through the users and create list items to display them
    users.forEach(user => {
        const li = document.createElement("li"); // Create a new list item
        li.textContent = `${user.name} - ${user.email} - ${user.username}`; // Add user details
        userList.appendChild(li); // Append the list item to the user list
    });
}