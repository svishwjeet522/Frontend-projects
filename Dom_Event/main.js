let btn = document.getElementById("btn");

btn.addEventListener("click", function() {

  // DOM Manipulation
  let heading = document.getElementById("heading");
  let para = document.getElementById("para");

  heading.innerText = "Welcome to JavaScript!";
  heading.style.color = "blue";

  para.innerText = "You clicked the button!";
  para.style.backgroundColor = "yellow";

});
