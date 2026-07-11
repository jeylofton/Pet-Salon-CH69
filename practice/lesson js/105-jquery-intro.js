// JavaScript Approach
/* function sayHello(){
    alert("Hello Class");
}; */

// jQuery = Event Handling
// select the button.action
$("#triggerEventButton").click(function(){
    alert("Hello Cohort: 69");
});
$("#hideButton").click(function(){
    $("p").hide();
});
$("#showButton").click(function(){
    $("p").show();
});
$("#toggleButton").click(function(){
    $("p").hide();
});
$("#changeTextButton").click(function(){
    $("p").text("My new Text");
});
$("#addCssButton").click(function(){
    $("p").css("color", "red");
});
$("#addCssClassButton").click(function(){
    $("p").hide();
});
$("#applyCssClassButton").click(function(){
    $(".apply-btn").css("background-color", "green");
});