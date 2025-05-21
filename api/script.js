document.getElementById("registrationForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let messageEl = document.getElementById("message");
    if (!name || !email || !password) {
        messageEl.textContent = "All fields are required!";
        messageEl.style.color = "red";
        return;
    }
    let userData = { name, email, password };
    try {
        let response = await fetch("https://68202c7c72e59f922ef7eb7b.mockapi.io/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });
       let result = await response.json();
        if (response.ok) {
            messageEl.textContent = "Registration successful!";
            messageEl.style.color = "green";
        } else {
            messageEl.textContent = `Error: ${result.message || "Registration failed"}`;
            messageEl.style.color = "red";
        }
    } catch (error) {
        messageEl.textContent = "Network error!";
        messageEl.style.color = "red";
    }
});