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
  alert("Signup successful!");
}
//login
function loginUser(email, password) {
    const existingUser = users.find(user => user.email === email && user.password === password);
    if (existingUser) {
      localStorage.setItem("loggedInUser", email);
      alert("Login successful!");
      window.location.href = "products.html";
    } else {
      alert("Invalid credentials.");
    }
  }