document.getElementById("userForm").addEventListener("submit", async function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let messageElement = document.getElementById("message");
    if (!name || !email) {
        messageElement.textContent = "Please enter all details!";
        return;
    }
    let firebaseURL = "https://sample-7930e-default-rtdb.asia-southeast1.firebasedatabase.app/users.json"; 
    try {
        let response = await fetch(firebaseURL, {
            method: "POST",
            body: JSON.stringify({ name, email }),
            headers: { "Content-Type": "application/json" }
        });
        if (response.ok) {
            messageElement.textContent = "User added successfully!";
        } else {
            messageElement.textContent = "Error adding user.";
        }
    } catch (error) {
        messageElement.textContent = "Network error!";
    }
    document.getElementById("userForm").reset();
});