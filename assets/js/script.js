var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = lowerCase.toUpperCase();
var numbers = "0123456789";
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[^_`{|}~";

// Function to execute user input criteria
function generatePassword() {

  var generatedPassword = "";
  var passwordLength = prompt("Enter the password length between 8 and 128");

  // Check whether the password length meets the given criteria or not
  if(passwordLength >= 8 && passwordLength <= 128) {

    var confirmLowerCase = confirm("Do you want to include lowercase in the password?");
    var confirmUpperCase = confirm("Do you want to include uppercase in the password?");
    var confirmNumber = confirm("Do you want to include number in the password?");
    var confirmSpecialCharacter = confirm("Do you want to include special character in the password?");

    // if the user confirms the password length, then check each criteria using for loop
    for(var i=0; i < passwordLength; i++){

      // Check whether the user confirms lowercase letter or not
      if(confirmLowerCase && generatedPassword.length < passwordLength) {
        var randomIndex = Math.floor(Math.random() * lowerCase.length);
        generatedPassword = generatedPassword + lowerCase[randomIndex];
      }

      // Check whether the user confirms uppercase letter or not
      if(confirmUpperCase && generatedPassword.length < passwordLength) {
        var randomIndex = Math.floor(Math.random() * upperCase.length);
        generatedPassword = generatedPassword + upperCase[randomIndex];
      }

      // Check whether the user confirms number or not
      if(confirmNumber && generatedPassword.length < passwordLength) {
        var randomIndex = Math.floor(Math.random() * numbers.length);
        generatedPassword = generatedPassword + numbers[randomIndex];
      }

      // Check whether the user confirms special character or not
      if(confirmSpecialCharacter && generatedPassword.length < passwordLength) {
        var randomIndex = Math.floor(Math.random() * specialCharacters.length);
        generatedPassword = generatedPassword + specialCharacters[randomIndex];
      }
    }
  }else {
          alert("Invalid entry, Password length must be between 8 and 128");
          return generatedPassword;
    }
  
    // Returns the output of the function
    return  "Your generated password is: " + generatedPassword;
}

// Display the generated password 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
