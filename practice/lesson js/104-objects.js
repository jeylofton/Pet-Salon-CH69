let name = "Fernanda";
let lastName = "Murillo";
let age = 34;

let name2 = "Walter";
let lastName2 = "White";
let age2 = 8;


// Literal Objects
let student1 ={
    name:"Fernanda",
    date: "05/31/1992",
    studentNumber: 1234
};

console.log(student1);
console.log(student1.name);

// 1. Access a Value -> .
student1.name
console.log("Hello, my name is", student1.name);

// Interpolation
console.log(`Hello, my name is ${student1.name} and my number is ${student1.studentNumber}`)

let car ={
    brand: "Kia",
    model: "Carens",
    year: 2026,
};

console.log(`I own a ${car.brand} ${car.model} and it's a ${car.year}`);
console.log(`I drive a ${car.year} ${car.brand} ${car.model}`);

// 2. Update a Value -> =
student1.name = "Maria Fernanda";
console.log(student1.name);

student1.studentNumber = 567;
console.log(student1.studentNumber);

// === Object Constructor === //
let person1 = {
    name: "Jey",
    lastName: "Lofton",
    age:44
};

let person2 ={
    name:"Thomas",
    lastName: "Johnson",
    age: 63
};

function Person(valueName, valueLastName, valueAge){
    this.name=valueName;
    this.lastName=valueLastName;
    this.age=valueAge;
};

// Creating an Object
let person3 = new Person("Jey", "Lofton", 44);