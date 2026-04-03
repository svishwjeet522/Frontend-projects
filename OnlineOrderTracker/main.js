// Fake product data
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Smartphone", price: 25000 },
  { id: 3, name: "Headphones", price: 3000 },
  { id: 4, name: "Keyboard", price: 1500 }
];

let selectedProduct = null;

// DOM elements
const productContainer = document.getElementById("productContainer");
const selectedProductText = document.getElementById("selectedProduct");
const orderBtn = document.getElementById("orderBtn");
const statusList = document.getElementById("statusList");
const message = document.getElementById("message");
const loader = document.getElementById("loader");

// Utility functions
function showLoader() {
  loader.classList.remove("hidden");
}

function hideLoader() {
  loader.classList.add("hidden");
}

function showMessage(text, color = "black") {
  message.textContent = text;
  message.style.color = color;
}

function addStatus(text) {
  const li = document.createElement("li");
  li.textContent = text;
  statusList.appendChild(li);
}

// Render products
function renderProducts() {
  productContainer.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: ₹${product.price}</p>
      <button onclick="selectProduct(${product.id})">Select</button>
    `;

    productContainer.appendChild(card);
  });
}

// Select product
function selectProduct(id) {
  selectedProduct = products.find(product => product.id === id);
  selectedProductText.textContent = `${selectedProduct.name} - ₹${selectedProduct.price}`;
  showMessage("Product selected successfully", "green");
}

// Promise 1: fetch products
function fetchProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (products.length > 0) {
        resolve(products);
      } else {
        reject("No products found");
      }
    }, 1000);
  });
}

// Promise 2: create order
function createOrder(product) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!product) {
        reject("Please select a product first");
        return;
      }

      const order = {
        orderId: Math.floor(Math.random() * 100000),
        productName: product.name,
        amount: product.price
      };

      resolve(order);
    }, 1000);
  });
}

// Promise 3: process payment
function processPayment(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let paymentSuccess = true;

      if (paymentSuccess) {
        resolve({
          ...order,
          paymentStatus: "Paid"
        });
      } else {
        reject("Payment failed");
      }
    }, 1500);
  });
}

// Promise 4: confirm order
function confirmOrder(orderDetails) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ...orderDetails,
        orderStatus: "Confirmed"
      });
    }, 1000);
  });
}

// Initial product loading
function loadProducts() {
  showLoader();
  showMessage("Loading products...", "blue");

  fetchProducts()
    .then(data => {
      renderProducts(data);
      showMessage("Products loaded successfully", "green");
    })
    .catch(error => {
      showMessage(error, "red");
    })
    .finally(() => {
      hideLoader();
    });
}

// Place order flow
orderBtn.addEventListener("click", () => {
  statusList.innerHTML = "";
  showLoader();
  showMessage("Starting order process...", "blue");

  createOrder(selectedProduct)
    .then(order => {
      addStatus(`Order created with ID: ${order.orderId}`);
      return processPayment(order);
    })
    .then(paidOrder => {
      addStatus(`Payment status: ${paidOrder.paymentStatus}`);
      return confirmOrder(paidOrder);
    })
    .then(finalOrder => {
      addStatus(`Order status: ${finalOrder.orderStatus}`);
      addStatus(`Product: ${finalOrder.productName}`);
      addStatus(`Amount: ₹${finalOrder.amount}`);
      showMessage("Order placed successfully", "green");
    })
    .catch(error => {
      showMessage(error, "red");
      addStatus(`Error: ${error}`);
    })
    .finally(() => {
      hideLoader();
    });
});

// Start app
loadProducts();
