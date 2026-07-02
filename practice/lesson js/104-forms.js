function Product(valueName, valuePrice, valueCategory){
    this.productName=valueName;
    this.productPrice=valuePrice;
    this.productCategory=valueCategory;
};

function registerProduct(event){
    // Testing Function and Button Connection
    // console.log("Connected");

    // Prevent refreshing the browser
    event.preventDefault();
    // console.log(event);

    // 1. Get the Value
    let productName = document.getElementById("productName").value;
    let productPrice = document.getElementById("productPrice").value;
    let productCategory = document.getElementById("productCategory").value;

    // 2. Use the Values
    // 2.1 Create the Object
    let newProduct = new Product(productName, productPrice, productCategory);
    console.log(newProduct);

    displayCard(newProduct);
};

function displayCard(newProduct){
       // 2.2 Display the product object in the browser (DOM manipulation)
    const container = document.getElementById("productList")

    // Add the card to the container
    container.innerHTML += `
    <div class="card" style="width: 18rem;">
    <div class="card-header">
    ${newProduct.productName}
    </div>
    <ul class="list-group list-group-flush"><li class="list-group-item">${newProduct.productPrice}</li></ul>
    <ul class="list-group list-group-flush"><li class="list-group-item">${newProduct.productCategory}</li></ul>
    </div>
    `;
};