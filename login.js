const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

   const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

  const matchingUser = storedUsers.find(user =>
      user.email.toLowerCase() === email.toLowerCase() &&
    user.password === password
  );

  if (matchingUser) {
    loginMessage.textContent = `Welcome, ${matchingUser.firstname}!`;
    loginMessage.style.color = "green";
    location.href = "home.html"

  
  } else {
    loginMessage.textContent = "Invalid email or password.";
    loginMessage.style.color = "red";
  }
});