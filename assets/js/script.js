var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = lowerCase.toUpperCase();
var numbers = "0123456789";
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[^_`{|}~";



// Function to execute user input criteria
function generatePassword() {
  var generatedPassword = "";
  var passwordLength = prompt("Enter the password length between 8 and 128");
  if(passwordLength >= 8 && passwordLength <= 128) {
    var confirmLowerCase = confirm("Do you want to include lowercase in the password?");
    var confirmUpperCase = confirm("Do you want to include uppercase in the password?");
    var confirmNumber = confirm("Do you want to include number in the password?");
    var confirmSpecialCharacter = confirm("Do you want to include special character in the password?");

    // if the user confirms the password length
    for(var i=0; i < passwordLength; i++){
      //console.log("passwordLength: "+i+":"+passwordLength)
      //console.log("generatedPassword length: "+generatedPassword.length)
      if(confirmLowerCase && generatedPassword.length < passwordLength) {
        var randomIndex = Math.floor(Math.random() * lowerCase.length);
        //console.log(randomIndex);
        generatedPassword = generatedPassword + lowerCase[randomIndex];

      }

      if(confirmUpperCase && generatedPassword.length < passwordLength) {
        var randomIndex = Math.floor(Math.random() * upperCase.length);
        //console.log(randomIndex);
        generatedPassword = generatedPassword + upperCase[randomIndex];
      }

      if(confirmNumber && generatedPassword.length < passwordLength) {
        var randomIndex = Math.floor(Math.random() * numbers.length);
        //console.log(randomIndex);
        generatedPassword = generatedPassword + numbers[randomIndex];
      }
      //console.log("passwordLength "+passwordLength);
      //console.log("generatedPassword "+generatedPassword);

      if(confirmSpecialCharacter && generatedPassword.length < passwordLength) {
        //console.log(specialCharacters);
        var randomIndex = Math.floor(Math.random() * specialCharacters.length);
        //console.log(randomIndex);
        generatedPassword = generatedPassword + specialCharacters[randomIndex];
      }
    }
  }else {
          alert("Invalid entry, Password length must be between 8 and 128");
          return generatedPassword;
    }
    
   /* if(generatedPassword != "") {
      return "Your generated password is: " + generatedPassword;
    }else {
      return generatedPassword;
    }*/
    return  "Your generated password is: " + generatedPassword;
    //console.log(generatedPassword);
}

// Display the generated password in the password input field
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
