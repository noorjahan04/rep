let API_URL = "https://68202c7c72e59f922ef7eb7b.mockapi.io/products";
let editingTaskId = null;
function fetchTasks() {
    fetch(API_URL)
        .then(response => response.json())
        .then(tasks => {
            const taskList = document.getElementById("task-list");
            taskList.innerHTML = "";
            tasks.forEach(task => {
                taskList.innerHTML += `
                    <div class="task">
                        <span>${task.title} (${task.status})</span>
                        <button onclick="openEditModal('${task.id}', '${task.title}', '${task.status}')">Edit</button>
                        <button onclick="deleteTask('${task.id}')">Delete</button>
                    </div>
                `;
            });
        })
        .catch(error => console.error("Error fetching tasks:", error));
}
function openEditModal(taskId, title, status) {
    editingTaskId = taskId;
    document.getElementById("edit-title").value = title;
    document.getElementById("edit-status").value = status;
    document.getElementById("edit-modal").style.display = "block";
}
document.getElementById("save-btn").addEventListener("click", () => {
    const newTitle = document.getElementById("edit-title").value;
    const newStatus = document.getElementById("edit-status").value;
    fetch(`${API_URL}/${editingTaskId}`, {
        method: "PUT", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTitle, status: newStatus })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(() => {
        fetchTasks();
        document.getElementById("edit-modal").style.display = "none";
    })
    .catch(error => console.error("Error updating task:", error));
});
function deleteTask(taskId) {
    if (confirm("Are you sure you want to delete this task?")) {
        fetch(`${API_URL}/${taskId}`, {
            method: "DELETE",
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(() => {
            fetchTasks();
        })
        .catch(error => console.error("Error deleting task:", error));
    }
}
document.querySelector(".close-btn").addEventListener("click", () => {
    document.getElementById("edit-modal").style.display = "none";
});
fetchTasks();