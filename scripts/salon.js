let salon ={
    name: "Jey's Pet Salon",
    hours: "24 hours",
    phone: "+50712542584",
    address:{
        street: "Avenida Balboa y Calle 50 Oeste",
        building: "Balboa Tower Piso PB",
        city: "Panamá City",
        state: "Panamà"
    }
};

function displaySalonInfo() {
    document.getElementById("aboutUs").innerHTML =
        "Welcome to " + salon.name +
        ". We are located at " +
        salon.address.street + ", " +
        salon.address.building + "," +
        salon.address.city + ", " +
        salon.address.state + " " +
        ". Our hours are " + salon.hours +
        ". You can contact us at " + salon.phone + ".";
}

displaySalonInfo();