// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase ="ABCEDFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialChars = "~`! @#$%^&*()_-+={[}]|\:;'<,>.?/";

var allCharacters = "";

var characterLength = function(charLength) {
  charLength = window.prompt("How many characters would you like?");

  if(charLength < 8 || charLength > 128) {
    window.alert("Please enter a number between 8 and 128.")
    characters();
    
  } else {
   characterPrompts();
      }
  }

var characterPrompts = function() {
    
    var lowerCaseConfirm = window.confirm("Would  you like to include lower case letters?");

    var upperCaseConfirm = window.confirm("Would  you like to include upper case letters?");
  
    var numbersConfirm = window.confirm("Would  you like to include numbers?");
  
    var specialCharConfirm = window.confirm("Would  you like to include sepcial characters?");
  
  
    if (lowerCaseConfirm == true) {
      allCharacters = allCharacters + lowerCase;
    } else {
      allCharacters;
    }
  
    if (upperCaseConfirm == true) {
      allCharacters = allCharacters + upperCase;
    } else {
      allCharacters;
    }
  
    if (numbersConfirm == true) {
      allCharacters = allCharacters + numbers;
    } else {
      allCharacters;
    }

    if (specialCharConfirm == true) {
      allCharacters = allCharacters + lowerCase;
    } else {
      allCharacters;
    }
  }

var generatePassword = function() {
    for(var i = 0; i < charLength; i++) {
      var value = Math.floor(Math.random() + allCharacters.length);
      allCharacters[value];
      var password = password +  allCharacters[Math.random()]
      console.log(password);
    }
}

characterLength();
generatePassword();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);