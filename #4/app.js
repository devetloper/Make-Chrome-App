const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");


function handleLoginSubmit(event){
  event.preventDefault();
  console.log(loginInput.value);
  
}

function handleLinkClick(event){
  event.preventDefault();
  console.dir(event)
}

loginButton.addEventListener("click", handleLoginSubmit)