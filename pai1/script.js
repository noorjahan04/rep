 const DB_URL="https://sample-7930e-default-rtdb.asia-southeast1.firebasedatabase.app/students.json"
 let table=document.querySelector("#studentsTable tbody");
 let form=document.getElementById("studentForm")
 let name=document.getElementById("name")
 let age=document.getElementById("age")
 let grade=document.getElementById("grade")
 let section=document.getElementById("section")
 let score=document.getElementById("score")
 let studentId=document.getElementById("studentId")
 async function fetchStudents(){
    let res=await fetch(`${DB_URL}.json`)
    let data=await res.json();
    table.innerHTML="";
    for(let id in data){
        let s=data[id];
        table.innerHTML+=`
        <tr>
        <td>${s.name}</td>
        <td>${s.age}</td>
        <td>${s.grade}</td>
        <td>${s.section}</td>
        <td>${s.score}</td>
        <td>
        <button onclick="deleteStudent('${id}')">Delete</button>
        </td>
        <tr>`;
    }
 }
 fetchStudents();
 form.onsubmit=async function(e){
    e.preventDefault();
    let studentData={
        name:name.value,
        age:Number(age.value),
        grade:grade.value,
        section:section.value,
        score:Number(score.value)
    };
 }

   


