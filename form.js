const form = document.getElementById("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

   const name =  document.getElementById("fname").value.trim()
   const lname = document.getElementById("lname").value.trim()
   const email = document.getElementById("email").value.trim()
    const password = document.getElementById("password").value.trim()
    const gender = document.getElementById("gender").value

    const users = {
    firstname : name,
    surname : lname,
    email: email,
    password: password,

    };
   
//    localStorage.setItem("password", password)
//    localStorage.setItem("surname", lname)
//    localStorage.setItem("firstname", name)
//    localStorage.setItem("email", email)
//    localStorage.setItem("gender", gender)


const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

const same = storedUsers.some(user => 
    user.email.toLowerCase() === email.toLowerCase() || 
    (user.firstname.toLowerCase() === name.toLowerCase() && user.surname.toLowerCase() === lname.toLowerCase())
  );

  if (same) {
    alert("A user with this email or name is already registered.");
    return;
  }

  
    storedUsers.push(users);


localStorage.setItem("users", JSON.stringify(storedUsers));
   location.href = "login.html"
    // alert("you've been registered")
})

    
