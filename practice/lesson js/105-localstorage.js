$("#storeEmail").click(function(){
    // alert("Click");

    let newEmail = $("#newEmail").val();

    // alert(newEmail);

    // save local storage

    localStorage.setItem("emailkey",newEmail);
});

