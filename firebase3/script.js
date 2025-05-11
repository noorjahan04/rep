const firebaseURL = "https://sample-7930e-default-rtdb.asia-southeast1.firebasedatabase.app/users";  // Corrected URL
function loadUsers() {
    fetch(`${firebaseURL}.json`)  
    .then(response => response.json())
    .then(data => {
        const userTable = document.getElementById("userTable");
        userTable.innerHTML = `
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        `;
        for (let userId in data) {
            let user = data[userId];
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td><button onclick="openEditForm('${userId}', '${user.name}', '${user.email}')">Edit</button></td>
            `;
            userTable.appendChild(row);
        }
    })
    .catch(error => console.error("Error fetching users:", error));
}
function openEditForm(userId, name, email) {
    document.getElementById("editUserModal").style.display = "block";
    document.getElementById("userName").value = name;
    document.getElementById("userEmail").value = email;
    document.getElementById("editUserForm").onsubmit = function(event) {
        event.preventDefault();
        updateUser(userId);
    };
}
function updateUser(userId) {
    let updatedData = {
        name: document.getElementById("userName").value,
        email: document.getElementById("userEmail").value
    };
    fetch(`${firebaseURL}/${userId}.json`, { 
        method: "PATCH",
        body: JSON.stringify(updatedData),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(() => {
        alert("User updated successfully!");
        closeModal();
        loadUsers(); 
    })
    .catch(error => console.error("Error updating user:", error));
}
function closeModal() {
    document.getElementById("editUserModal").style.display = "none";
}
loadUsers();