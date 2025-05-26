const DB_URL = "https://sample-7930e-default-rtdb.asia-southeast1.firebasedatabase.app/students";
let table = document.querySelector("#studentsTable tbody");
async function fetchStudents() {
    let res = await fetch(`${DB_URL}.json`);
    let data = await res.json();
    table.innerHTML = "";
    for (let id in data) {
        let s = data[id];
        table.innerHTML += `
        <tr>
            <td>${s.name}</td>
            <td>${s.age}</td>
            <td>${s.grade}</td>
            <td>${s.section}</td>
            <td>${s.score}</td>
            <td>
                <button class="delete-btn" onclick="deleteStudent('${id}')">Delete</button>
            </td>
        </tr>`;
    }
}
async function deleteStudent(id) {
    let res = await fetch(`${DB_URL}/${id}.json`, {
        method: "DELETE"
    });
    if (res.ok) {
        fetchStudents(); 
    } else {
        console.error("Failed to delete student");
    }
}
fetchStudents();