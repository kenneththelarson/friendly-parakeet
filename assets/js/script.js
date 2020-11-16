// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var num = "0123456789";
var specialChars = "!@#$%^&*()_+=-></?";


function generatePassword() {
  var password = "";
  var pickedChars = "";

  passLength = prompt("What character length would you like? Enter a number between 8 and 128.");
  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    passLength = prompt("Please enter a number between 8 and 128.");
  }
  
  var lowerChar = window.confirm("Would you like to include 'lowercase' characters?");
  var upperChar = window.confirm("Would you like to include 'UPPERCASE' characters?");
  var numeric = window.confirm("Would you like to include numbers?");
  var specChar = window.confirm("Would you like to include special characters?");

  if (lowerChar === false && upperChar === false && numeric === false && specChar=== false) {
    alert("Selection must include at least one character type.");
    return "Try Again."
  }

  if (lowerChar){
    pickedChars += lowerCase;
  }
  if (upperChar){
    pickedChars += upperCase;
  }
  if (numeric){
    pickedChars += num;
  }
  if (specChar){
    pickedChars += specialChars;
  }

  for (var i = 0; i < passLength; i++) {
    password += pickedChars.charAt(Math.floor(Math.random() * pickedChars.length));
  }

  return password;

}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);