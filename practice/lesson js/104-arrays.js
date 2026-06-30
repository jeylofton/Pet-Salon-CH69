// 1. create an array - two examples
let names = ["Edwin", " Jey", " Austin"];
let age = [20, 30, 25];

console.log(names);
console.log(age);

// 2. Accsessing an element -> index/position
names[0] // Edwin

console.log(names[2]);
console.log(age[1]);

// 3. Modify an Element value -> =
names [1] = " Chante";
console.log(names);

age [0] = 21;
console.log(age);

// 4. How many elements we have in array? -> length
names.length

console.log(names.length);

console.log(`Here are my names: ${names} and ages: ${age}`);

console.log(`Hi, my name is ${names [0]} and I'm ${age[0]}`);
console.log(`Hi, my name is ${names [1]} and I'm ${age[1]}`);
console.log(`Hi, my name is ${names [2]} and I'm ${age[2]}`);

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

console.log(age[0]);
console.log(age[1]);
console.log(age[2]);

// 5. Travel the array -> For loop
for(let i=0; i<=names.length; i++){
    console.log(names[i]);
}


// 6. Array of Objects
let student1 = {
    name: "Fernanda",
    age: 34
};

let student2 = {
    name: "Edwin",
    age: 21
};

let student3 = {
    name: "Danica",
    age: 30
};

let studentsList = [student1, student2, student3];

// Accession the object the studentList array
console.log(studentsList[0].name);