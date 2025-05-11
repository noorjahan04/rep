let fetchUsers = async (page = 1, limit = 6) => {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`);
        if (!response.ok) throw new Error("Failed to fetch users.");
        let data = await response.json();
        displayUsers(data);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
};
let displayUsers = (users) => {
    let container = document.getElementById("user-container");
    container.innerHTML = "";
    users.forEach(user => {
        let userElement = document.createElement("div");
        userElement.classList.add("user-card");
        userElement.innerHTML = `<p><strong>${user.name}</strong></p><p>${user.email}</p>`;
        container.appendChild(userElement);
    });
};
let setupPagination = () => {
    let paginationContainer = document.getElementById("pagination");
    paginationContainer.innerHTML = "";
    for (let i = 1; i <= 3; i++) { 
        let button = document.createElement("button");
        button.textContent = `Page ${i}`;
        button.addEventListener("click", () => fetchUsers(i, 6));
        paginationContainer.appendChild(button);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    fetchUsers();
    setupPagination();
});