function Student(valueName, valueAge, valueCourse){
    this.name = valueName;
    this.age = valueAge;
    this.course = valueCourse;
};

function registerStudent(event){
event.preventDefault();

let name = document.getElementById("studentName").value;
let age = document.getElementById("studentAge").value;
let course = document.getElementById("studentCourse").value;

let newStudent = new Student(name, age, course)
    
console.log(newStudent);

newInfo(newStudent);

document.getElementById("studentForm").reset();
}

function newInfo(newStudent){
    
const tableList = document.getElementById("tableList");

let row = document.createElement("tr");

row.innerHTML = `
<td> ${newStudent.name}</td>
<td> ${newStudent.age}</td>
<td> ${newStudent.course}</td>
<td> <button class="btn btn-danger delete-btn">Delete</button> </td>
`;

row.querySelector(".delete-btn").addEventListener("click", function(){

    const confirmation = confirm("Are you sure you want to delete this row?");

    if (confirmation){
        row.remove();
    }
});

tableList.appendChild(row);

}