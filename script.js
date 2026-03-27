// function login() {
//   let user = document.getElementById("username").value;
//   let pass = document.getElementById("password").value;
//   if(user === "admin" && pass === "1234") {
//     let msg = document.getElementById("message");
//     msg.style.color = "green";
//     msg.textContent = "Login Successful ✅";
//   } else {
//     let msg = document.getElementById("message");
//     msg.style.color = "red";
//     msg.textContent = "Invalid Username or Password ❌";
//   }
// }
let btn = document.getElementById("loginBtn");

btn.addEventListener("click", function() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let msg = document.getElementById("message");

  if(user === "admin" && pass === "1234") {
    msg.style.color = "green";
    msg.textContent = "Login Successful ✅";
  } else {
    msg.style.color = "red";
    msg.textContent = "Invalid Username ❌";
  }
});