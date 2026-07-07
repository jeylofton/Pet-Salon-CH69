function update(){
    // Testing the function and button connection
    // alert("connected");

    // 1. Get the title
    let title = document.getElementById("title");

    // 1.1 Update text
    // innerHTML
    // textContent

    title.innerHTML = "<i>Hello, class! </i>";

    let pList = document.getElementsByClassName("text");
    console.log(pList);
    
    // 2.1 Change the p1 color to red , and the p2 to blue
    pList[0].style.color = "red";
    pList[1].style.color = "blue";
}

function addItem(){
    let input = document.getElementById("inputItem").value;
    
    let list =document.getElementById("addList");

    list.innerHTML += `<li>${input} </li> `;
    // alert(input);

}