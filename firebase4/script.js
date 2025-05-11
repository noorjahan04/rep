const firebaseURL = "https://sample-7930e-default-rtdb.asia-southeast1.firebasedatabase.app/users";  
function loadUsers() {
    fetch(`${firebaseURL}.json`)
    .then(response => response.json())
    .then(data => {
        let userTable = document.getElementById("userTable");
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
            row.id = `user-${userId}`; // Assign ID for deletion
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>
                    <button onclick="openEditForm('${userId}', '${user.name}', '${user.email}')">Edit</button>
                    <button onclick="deleteUser('${userId}')">Delete</button>
                </td>
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
function deleteUser(userId) {
    fetch(`${firebaseURL}/${userId}.json`, {
        method: "DELETE",
    })
    .then(response => response.json())
    .then(() => {
        console.log("User deleted successfully!");
        removeUserFromTable(userId);
    })
    .catch(error => console.error("Error deleting user:", error));
}
function removeUserFromTable(userId) {
    const userRow = document.getElementById(`user-${userId}`);
    if (userRow) {
        userRow.remove();
    }
}
function closeModal() {
    document.getElementById("editUserModal").style.display = "none";
}
loadUsers();