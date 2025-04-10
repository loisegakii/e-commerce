
const loggedInUser = localStorage.getItem("loggedInUser");
if (!loggedInUser) {
  window.location.href = "login.html";
}
fetch('..data/product.json')
  .then(response => response.json())
  .then(data => renderProducts(data));

function renderProducts(products) {
  const container = document.getElementById('product-container');
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  products.forEach(product => {
    const inCart = cart.find(item => item.id === product.id);
    const buttonText = inCart ? "Added" : "Add to Cart";

    const productCard = `
      <div class="product">
        <img src="${product.image}" alt="${product.title}" />
        <h4>${product.title}</h4>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">${buttonText}</button>
      </div>`;
    container.innerHTML += productCard;
  });
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (!cart.find(p => p.id === id)) {
    fetch('data/products.json')
      .then(res => res.json())
      .then(products => {
        const productToAdd = products.find(p => p.id === id);
        cart.push(productToAdd);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Product added to cart!");
        window.location.reload();
      });
  }
}