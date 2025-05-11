let apiUrl = 'https://68202c7c72e59f922ef7eb7b.mockapi.io/products';
async function fetchUsers() {
    try {
        let response = await fetch(apiUrl);
        let users = await response.json();
        let userList = document.getElementById('user-list');
        userList.innerHTML = '';
        users.forEach(user => {
            let userItem = document.createElement('li');
            userItem.textContent = `${user.name} (${user.email})`;
            userList.appendChild(userItem);
        });
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}
async function addUser(event) {
    event.preventDefault();
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    if (!name || !email) {
        alert('Please enter both Name and Email!');
        return;
    }
    try {
        let existingUsersResponse = await fetch(apiUrl);
        let existingUsers = await existingUsersResponse.json();
        if (existingUsers.some(user => user.email === email)) {
            alert('Email already exists! Try a different one.');
            return;
        }
        let newUser = { name, email };
        await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        });
        alert('User added successfully!');
        fetchUsers();  
    } catch (error) {
        console.error('Error adding user:', error);
    }
}
document.getElementById('user-form').addEventListener('submit', addUser);
fetchUsers();