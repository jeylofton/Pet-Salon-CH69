let salon ={
    name: "Balboa Doggie Care Center",
    hours: "24 hours",
    phone: "+50712542584",
    address:{
        street: "Calle 45 este",
        building: "Balboa Tower Piso PB",
        city: "Panamá City",
        state: "Panamà"
    }
};

function displaySalonInfo() {
    document.getElementById("salonName").innerHTML = salon.name;

    document.getElementById("salonAddress").innerHTML =
        salon.address.street + "<br>" +
        salon.address.building + "<br>" +
        salon.address.city + ", " + salon.address.state;

    document.getElementById("salonHours").innerHTML = salon.hours;

    document.getElementById("salonPhone").innerHTML = salon.phone;
}

displaySalonInfo();
