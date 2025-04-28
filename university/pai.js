let departments=[
    { departmentName: "Computer Science", location: "Building A", students: [21, 22, 20, 23, 22] },
    { departmentName: "Mechanical", location: "Building B", students: [24, 25, 24, 23] },
    { departmentName: "Civil", location: "Building C", students: [22, 22] }
  ];
  console.log("Total students:")
  for(let i=0;i<departments.length;i++){
    let dept=departments[i];
    console.log(dept.departmentName+": "+dept.students.length)
  }
  let maxdept=departments[0];
  for(let i=1;i<departments.length;i++){
    if(departments[i].students.length>maxdept.students.length){
    }
  }
  console.log(`Department with max students: "${maxdept.departmentName}"(${maxdept.students.length}students)`)
  let lessthen30=[];
  for(let i=0;i<departments.length;i++){
    if(departments[i].students.length<30){
        lessthen30.push(departments[i].departmentName);
    }
  }
  console.log("Departments with less than 30 students:"+JSON.stringify(lessthen30))