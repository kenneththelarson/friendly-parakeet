// Assignment code here
function generate() {

  // set password length/complexity
  let complexity = document.getElementById("slider").value;

  // possible password values
  let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()-_=+";

  // create for loop to choose password characters
  for (var i = 0; i <= complexity; i++) {
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.lenght - 1)));
  }

  // add password to textbox
  document.getElementById("password").value = password;

}

// set slider default to 60
document.getElementById("length").innerHTML = "Length: 60";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generate();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function to set length to slider position
document.getElementById("slider").oninput = function () {

  if (document.getElementById("slider").value > 8) {
    document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
  }
  else {
    document.getElementById("length").innerHTML = "Length: 8";
  }
}

// function to copy password to clipboard
function copyPassword() {

  document.getElementById("display").select();
  document.execCommand("Copy");
  alert("Password copied to clipboard");
}