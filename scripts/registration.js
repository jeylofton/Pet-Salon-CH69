let pet1 = {
    name: "Walter",
    age: 8,
    gender: "Male",
    service: "Grooming",
    breed: "Golden Retriever"
};

let pet2 = {
    name: "Tato",
    age: 3,
    gender: "Male",
    service: "Bath",
    breed: "French Bulldog"
};

let pet3 = {
    name: "Rocky",
    age: 5,
    gender: "Male",
    service: "Nail Trim",
    breed: "German Shepherd"
};

let petsList = [pet1, pet2, pet3];

function registeredPets() {
    let petNames = document.getElementById("petNames");
    for (let i = 0; i < petsList.length; i++) {
        petNames.innerHTML += "<li>" + petsList[i].name + "</li>";
    }
}

registeredPets();

function Pet(valueName, valueAge, valueBreed, valueGender, valueService){
    this.petName2=valueName;
    this.petAge=valueAge;
    this.petBreed=valueBreed;
    this.petGender=valueGender;
    this.petService=valueService;
};

function registerPet(event){
    // Testing Function and Button Connection
    // console.log("Connected");

    // Prevent refreshing the browser
    event.preventDefault();
    // console.log(event);

    // 1. Get the Value
    let petName2 = document.getElementById("petName2").value;
    let petAge = document.getElementById("petAge").value;
    let petBreed = document.getElementById("petBreed").value;
    let petGender = document.getElementById("petGender").value;
    let petService = document.getElementById("petService").value;

    // 2. Use the Values
    // 2.1 Create the Object
    let newPet = new Pet(petName2, petAge, petBreed, petGender, petService);
    console.log(newPet);

    displayCard(newPet);

    document.getElementById("petForm").reset();
};

function displayCard(newPet){
    
const tableList = document.getElementById("tableList");

let row = document.createElement("tr");

row.innerHTML = `
<td> ${newPet.petName2}</td>
<td> ${newPet.petAge}</td>
<td> ${newPet.petGender}</td>
<td> ${newPet.petService} </td>
<td> ${newPet.petBreed}</td>
<td> <button class="btn btn-danger">Delete</button> </td>
`;

tableList.appendChild(row);


}