window.onload = function() {
    loadTasks();
};
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Task cannot be empty!");
        return;
    }
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    };
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
    loadTasks();
}
function loadTasks(searchQuery = "") {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.filter(task => task.text.toLowerCase().includes(searchQuery.toLowerCase()))
         .forEach(task => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span class="${task.completed ? 'completed' : ''}" onclick="toggleComplete(${task.id})">${task.text}</span>
                <button onclick="removeTask(${task.id})">Delete</button>
            `;
            taskList.appendChild(li);
    });
}
function toggleComplete(taskId) {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
}
function removeTask(taskId) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
}
function searchTasks() {
    const searchQuery = document.getElementById("searchInput").value;
    loadTasks(searchQuery);
}