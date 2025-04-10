// auth.js
const users = JSON.parse(localStorage.getItem("users")) || [];

function signupUser(email, password) {
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    alert("User already exists!");
    return;
  }
  users.push({ email, password });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Signup successful! Redirecting to login page...");
  window.location.href = "login.html"; // Redirect to login page
}
//login
function loginUser(email, password) {
  const existingUser = users.find(user => user.email === email && user.password === password);
  if (existingUser) {
    localStorage.setItem("loggedInUser", email);
    alert("Login successful!");
    window.location.href = "product.html"; // this will redirect to the products page
    alert("Invalid credentials.");
  }
}