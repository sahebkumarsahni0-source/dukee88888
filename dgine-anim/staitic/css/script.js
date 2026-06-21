// Happy Clients Counter

let count = 0;
let target = 5000;

const clients = document.getElementById("clients");

if(clients){

const timer = setInterval(() => {

count += 25;

clients.innerHTML = count + "+";

if(count >= target){

clients.innerHTML = "5000+";

clearInterval(timer);

}

},10);

}

// Product Button Animation

const buttons = document.querySelectorAll(".product-card button");

buttons.forEach(btn => {

btn.addEventListener("click", () => {

btn.innerHTML = "Added ✓";

btn.style.background = "#22c55e";

setTimeout(() => {

btn.innerHTML = "Add To Cart";

btn.style.background = "#00e5ff";

},2000);

});

});

// Navbar Shadow On Scroll

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.boxShadow =
"0 5px 20px rgba(0,229,255,.25)";

}else{

navbar.style.boxShadow = "none";

}

});

// Reveal Animation

const revealElements =
document.querySelectorAll(
".product-card,.counter-box,.review,.ceo-card"
);

window.addEventListener("scroll", reveal);

function reveal(){

revealElements.forEach(el => {

const top = el.getBoundingClientRect().top;

const visible = 150;

if(top < window.innerHeight - visible){

el.style.opacity = "1";

el.style.transform = "translateY(0px)";

}

});

}

reveal();
function addToCart(name,price){

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

cart.push({
name:name,
price:price
});

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

alert(name + " Added To Cart");

}
let search =
document.getElementById("searchInput");

if(search){

search.addEventListener("keyup",()=>{

let value =
search.value.toLowerCase();

let products =
document.querySelectorAll(".product-card");

products.forEach(product=>{

let text =
product.innerText.toLowerCase();

if(text.includes(value)){

product.style.display="block";

}else{

product.style.display="none";

}

});

});

}
const themeBtn =
document.getElementById("themeBtn");

if(themeBtn){

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle(
"light-mode"
);

});

}
const menuBtn =
document.querySelector(".menu-btn");

const nav =
document.querySelector("nav");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("active");

});

}
function addWishlist(product){

let wishlist =
JSON.parse(
localStorage.getItem("wishlist")
) || [];

wishlist.push(product);

localStorage.setItem(
"wishlist",
JSON.stringify(wishlist)
);

alert(product + " Added To Wishlist");

}
import {
getFirestore,
collection,
addDoc
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const db =
getFirestore();

addDoc(
collection(db,"products"),
{
name:"Premium T-Shirt",
price:999
}
);
window.addEventListener("load",()=>{

document.getElementById(
"loader"
).style.display="none";

});