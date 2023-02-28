window.onscroll = function() {myFunction()};

navbar
var navbar = document.getElementById("navbar");


var sticky = navbar.offsetTop;


function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const submit = document.getElementById("submit");

submit.addEventListener("click", function(e) {
  e.preventDefault();

  if (!fullName.value) {
    alert("Please enter your full name");
    return;
  }
if (!email.value) {
    alert("Please enter your email");
    return;
  }

  if (!password.value) {
    alert("Please enter a password");
    return;
  }

  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match");
    return;
  }

  alert("Sign up successful!");
});

