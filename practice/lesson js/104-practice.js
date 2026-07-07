function update(){
    let student = document.getElementById("studentName");
    student.innerHTML = ("Maria Lopez");

    let classList = document.getElementsByClassName("info");
    // console.log(classlist);

    classList[0].innerHTML = ("A");
    classList[1].innerHTML = ("Active");
    classList[0].style.color = "green";
    classList[1].style.color = "blue";
    // alert(connected);
}