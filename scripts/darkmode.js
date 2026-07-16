// Shared Change Mode button - used on every page

// remember the mode the user picked on the last page
if(localStorage.getItem("mode") == "dark"){
    $("body").addClass("dark-mode");
}

showModeText();

$("#changeModeButton").on("click", function(){
    $("body").toggleClass("dark-mode");

    const isDark = $("body").hasClass("dark-mode");

    // save the choice so every page opens the same way
    if(isDark){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }

    showModeText();
});

// keep the button label matching the mode
function showModeText(){
    if($("body").hasClass("dark-mode")){
        $("#changeModeButton").text("☀️ Change Mode");
    }else{
        $("#changeModeButton").text("🌙 Change Mode");
    }
}
