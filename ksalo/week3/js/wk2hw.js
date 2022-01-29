//window prompt with integers 
function math() {
let user = prompt("Let's play the sum game. Please enter your name. ");
let a = parseInt(prompt("Enter first number"));
let b = parseInt(prompt("Enter second number"));
if (user != null) {
document.getElementById("ints").innerHTML = "Hi, " + user + "!" + " The sum of " + a + " + " + b + " is " + (a + b);
}
}

