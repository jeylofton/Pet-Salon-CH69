$("#servicesForm").on("submit", function(event){
event.preventDefault();
   // alert("Form Connnected");

let serviceName = $("#serviceName").val().trim();
let serviceDescription = $("#serviceDescription").val().trim();
let servicePrice = $("#servicePrice").val().trim();

if (serviceName == "" || serviceDescription == "" || servicePrice == "") {
    $(serviceName == "" || serviceDescription == "" || servicePrice == "")
    .css("border", "2px solid red");
} else {
    $(serviceName == "" || serviceDescription == "" || servicePrice == "")
    .css("border", "");
}

});
