function saveProduct(){

let products =
JSON.parse(localStorage.getItem("products")) || [];

let name =
document.getElementById("productName").value;

let price =
document.getElementById("productPrice").value;

let image =
document.getElementById("productImage").value;

products.push({
name,
price,
image
});

localStorage.setItem(
"products",
JSON.stringify(products)
);

alert("Product Saved");

}