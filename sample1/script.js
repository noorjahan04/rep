let todosData = [];
function fetchTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => {
      todosData = data;
      createPagination();
      displayTodos(1);
    });
}
function displayTodos(page) {
  let container = document.getElementById("todo-container");
  container.innerHTML = "";
  let start = (page - 1) * 10;
  let end = start + 10;
  let currentTodos = todosData.slice(start, end);
  currentTodos.forEach(todo => {
    let div = document.createElement("div");
    div.textContent = todo.title;
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    div.appendChild(checkbox);
    container.appendChild(div);
  });
}
function createPagination() {
  let pagination = document.getElementById("pagination");
  pagination.innerHTML = "";
  for (let i = 1; i <= 20; i++) {
    let btn = document.createElement("button");
    btn.textContent = i;
    btn.onclick = () => displayTodos(i);
    pagination.appendChild(btn);
  }
}