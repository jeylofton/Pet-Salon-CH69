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


}