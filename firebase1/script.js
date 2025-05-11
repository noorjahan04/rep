let databaseURL = "https://sample-7930e-default-rtdb.asia-southeast1.firebasedatabase.app/users.json";
document.addEventListener("DOMContentLoaded", () => {
    fetchUsers();
});
async function fetchUsers() {
    try {
        let response = await fetch(databaseURL);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        let data = await response.json();
        console.log(data);
        displayUsers(data.users);
    } catch (error) {
        document.body.innerHTML += `<p style="color: red;">Error: ${error.message}</p>`;
    }
}
function displayUsers(users) {
    let usersTable = document.getElementById("usersTable");
    if (!usersTable) {
        console.error("Error: 'usersTable' element not found!");
        return;
    }
    usersTable.innerHTML = "";
    if (Array.isArray(users)) {
        users.forEach(user => {
            const row = `<tr><td>${user.name}</td><td>${user.email}</td></tr>`;
            usersTable.innerHTML += row;
        });
    } else {
        for (let key in users) {
            const user = users[key];
            const row = `<tr><td>${user.name}</td><td>${user.email}</td></tr>`;
            usersTable.innerHTML += row;
        }
    }
}