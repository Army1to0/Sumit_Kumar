let x = document.getElementById("Login");
let y = document.getElementById("Register");
let z = document.getElementById("btn");

function register() {
  x.style.left = "-450px";
  y.style.left = "25px";
  z.style.left = "110px";
}
function login() {
  x.style.left = "25px";
  y.style.left = "450px";
  z.style.left = "0px";
}
x.onclick = function () {
  x.classList.toggle("star")
};
