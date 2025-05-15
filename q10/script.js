// Reference elements
let taskInput = document.getElementById('taskInput');
let addTaskButton = document.getElementById('addTask');
let sortTasksButton = document.getElementById('sortTasks');
let taskList = document.getElementById('taskList');
let filterAllButton = document.getElementById('filterAll');
let filterCompletedButton = document.getElementById('filterCompleted');
let filterIncompleteButton = document.getElementById('filterIncomplete');
let totalCount = document.getElementById('totalCount');
let completedCount = document.getElementById('completedCount');
let incompleteCount = document.getElementById('incompleteCount');
// Task array to store tasks
let tasks = [];
// Function to render tasks dynamically
function renderTasks(filteredTasks = tasks) {
    taskList.innerHTML = ''; // Clear list
    filteredTasks.forEach(task => {
        let taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <input type="checkbox" ${task.completed ? "checked" : ""} data-id="${task.id}">
            ${task.text}
            <button data-id="${task.id}">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
    updateCounts();
}
// Function to update task counters
function updateCounts() {
    totalCount.textContent = tasks.length;
    completedCount.textContent = tasks.filter(task => task.completed).length;
    incompleteCount.textContent = tasks.filter(task => !task.completed).length;
}
// Add a new task
addTaskButton.addEventListener('click', () => {
    let taskText = taskInput.value.trim();
    if (taskText === '') return alert('Please enter a task.');
    tasks.push({ id: Date.now(), text: taskText, completed: false });
    taskInput.value = '';
    renderTasks();
});
// Use event delegation for delete & checkbox actions
taskList.addEventListener('click', (event) => {
    let id = event.target.dataset.id;
    if (!id) return;
    if (event.target.tagName === 'BUTTON') {
        tasks = tasks.filter(task => task.id != id);
    } else if (event.target.type === 'checkbox') {
        let task = tasks.find(task => task.id == id);
        task.completed = event.target.checked;
    }
    renderTasks();
});
// Filtering logic using array methods (map, filter)
filterAllButton.addEventListener('click', () => renderTasks());
filterCompletedButton.addEventListener('click', () => renderTasks(tasks.filter(task => task.completed)));
filterIncompleteButton.addEventListener('click', () => renderTasks(tasks.filter(task => !task.completed)));
// Sort tasks alphabetically
sortTasksButton.addEventListener('click', () => {
    tasks.sort((a, b) => a.text.localeCompare(b.text));
    renderTasks();
});