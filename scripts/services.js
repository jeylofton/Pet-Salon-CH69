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

    let newService = {
        name: serviceName,
        description: serviceDescription,
        price: servicePrice
    };

    // save to local storage
    localStorage.setItem("serviceInfo", JSON.stringify(newService));

    alert("Service registered: " + serviceName);
    this.reset();
}

});

$("#changeModeButton").on("click", function(){
    $("body").toggleClass("dark-mode");

    const isDark = $("body").hasClass("dark-mode");

    if(isDark){
        $("#changeModeButton").text("☀️ Change Mode");
    }else{
        $("#changeModeButton").text("🌙 Change Mode");
    }
});
