const form = document.getElementById("form");
const message = document.getElementById("message");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (password.length < 6) {
    message.innerText = "Password must be at least 6 characters";
    message.style.color = "yellow";
    return;
  }

  // Save to localStorage
  localStorage.setItem("user", JSON.stringify({ name, email }));

  message.innerText = "Signup Successful 🎉";
  message.style.color = "lightgreen";
});

// Show/Hide password
function togglePassword() {
  const password = document.getElementById("password");
  password.type = password.type === "password" ? "text" : "password";
}
