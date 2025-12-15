const products = [
  { id: 1, name: "Laptop", price: 50000, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
  { id: 2, name: "Mobile", price: 20000, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
  { id: 3, name: "Headphones", price: 3000, img: "https://images.unsplash.com/photo-1585386959984-a41552231692" },
  { id: 4, name: "Smart Watch", price: 7000, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30" }
];

let cart = [];

const productDiv = document.getElementById("products");
const cartItems = document.getElementById("cart-items");
const total = document.getElementById("total");
const cartCount = document.getElementById("cart-count");

function displayProducts(list) {
  productDiv.innerHTML = "";
  list.forEach(p => {
    productDiv.innerHTML += `
      <div class="product">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

displayProducts(products);

function filterProducts() {
  const value = document.getElementById("search").value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(value));
  displayProducts(filtered);
}

function addToCart(id) {
  cart.push(products.find(p => p.id === id));
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let sum = 0;
  cart.forEach(i => {
    sum += i.price;
    cartItems.innerHTML += `<li>${i.name} - ₹${i.price}</li>`;
  });
  total.innerText = sum;
  cartCount.innerText = cart.length;
}

function checkout() {
  if (cart.length === 0) {
    alert("Cart empty");
  } else {
    alert("Payment Successful!");
    cart = [];
    updateCart();
  }
}

/* AUTH (LOCAL STORAGE) */
function register() {
  localStorage.setItem("user", document.getElementById("regEmail").value);
  alert("Registered Successfully");
}

function login() {
  const user = localStorage.getItem("user");
  if (user === document.getElementById("loginEmail").value) {
    alert("Login Successful");
    window.location.href = "index.html";
  } else {
    alert("Invalid credentials");
  }
}
