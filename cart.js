function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart-container");
  let total = 0;
  container.innerHTML = '';

  cartItems.forEach((item, index) => {
    total += item.price;
    container.innerHTML += `
      <div class="cart-item">
        <h4>${item.title}</h4>
        <p>$${item.price}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      </div>`;
  });

  document.getElementById("total-price").innerText = "Total: $" + total.toFixed(2);
}

function removeFromCart(index) {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  loadCart();
}

window.onload = loadCart;