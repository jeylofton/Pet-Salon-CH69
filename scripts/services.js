$("#servicesForm").on("submit", function(event){
event.preventDefault();
   // alert("Form Connnected");

let serviceName = $("#serviceName").val().trim();
let serviceDescription = $("#serviceDescription").val().trim();
let servicePrice = $("#servicePrice").val().trim();

if (serviceName == "") {
    $("#serviceName").css("border", "2px solid red");
} else {
    $("#serviceName").css("border", "");
}

if (serviceDescription == "") {
    $("#serviceDescription").css("border", "2px solid red");
} else {
    $("#serviceDescription").css("border", "");
}

if (servicePrice == "") {
    $("#servicePrice").css("border", "2px solid red");
} else {
    $("#servicePrice").css("border", "");
}

// only save when every field is filled in
if (serviceName != "" && serviceDescription != "" && servicePrice != "") {

    // save to local storage
    localStorage.setItem("serviceName", serviceName);
    localStorage.setItem("serviceDescription", serviceDescription);
    localStorage.setItem("servicePrice", servicePrice);

    alert("Service registered: " + serviceName);
    this.reset();
}

});
