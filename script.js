// Assignment code here

//Array of special characters that user can select
var specialCharacters = '!#$%&/()=?¡.,][*';
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var characters = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseChars = characters.toUpperCase();


generatePassword = function () {
  //Variable that's going to collect all true values of the character type that the user wants 
  var choices = '';

  //Variable that's going to collect each one of the randomized result of the for loop
  var randompassword = '';

  //Series of prompts for password criteria
  //Prompt for the length of the password
  var passLength = Number(window.prompt("Please choose the number of characters the password should have", ""));

  //If user choose a number that less than 8 or greater than 128, then 
  if (passLength < 8 || passLength > 128) {
    window.alert("Password length must be between 8 and 128 characters");
    generatePassword()
  } 

  //Ask for character types 
  //Uppercase character types
  var wantUppercase = window.confirm("Do you want Uppercase characters?")

  if (wantUppercase) {
    choices += uppercaseChars
  }

  //Lowercase character types
  var wantLowercase = window.confirm("Do you want Lowercase characters?")

  if (wantLowercase) {
    choices += characters
  }

  //Numeric character types
  var wantNumeric = window.confirm("Do you want Numeric characters?")

  if (wantNumeric) {
    choices += numbers
  }

  //Special character types
  var wantSpecial = window.confirm("Do you want Special characters?")

  if (wantSpecial) {
    choices += specialCharacters
  }  
  
  console.log(choices);

  //loop to randomized every i of choices var, depending on numeric value of passLength 
  for (var i = 1, n = choices.length; i <= passLength; i++) {
    randompassword += choices.charAt(Math.floor(Math.random() * n));
    
  }

  return randompassword
};

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
