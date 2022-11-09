/*
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/

/*Steps
* 1. click button
* 2. PROMPTS -> CONFIRM- presented with series of prompts for passwoprd criteria
*  - PROMPT password length [8-128] chars
*  - confirm length
* -  PROMPT character types to include in the password
* -  confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
* -  input should be validated and at least one character type should be selected- not NULL
* 3. WHEN all prompts are answered THEN a password is generated that matches the selected criteria
* 4. THEN the password is either displayed in an alert or written to the page
*/
// Assignment code here
//need to define the generatePassword function:
function generatePassword() {
  var passwordLength = prompt("How many characters do you want your password to be? Choose a number between 8 and 128.")
    console.log(passwordLength);
  
  if (passwordLength < 8) {
    alert("Number must be between 8 and 128.");
    //want to go back to the beginning of the function, so we call it
  generatePassword();     
  }
  else if (passwordLength > 128) {
    alert("Number must be between 8 and 128.");
  }

  var passwordCharacters = prompt("Which character types do you want to include? You can enter: lowercase, uppercase, numbers and special characters. Separate each type of character you list with a comma.")
  console.log(passwordCharacters);





  return "spaghetti";
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
