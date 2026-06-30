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