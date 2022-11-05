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

/* Steps:
Step 1: a pop up box appeara that has a button to generate a password.

Step 2: the button is pressed and another pop up box appears.

Step 3: the new pop up box asks how long I want the password to be - between 8 and 128

Step 4: then a pop up appears with a list of criteria to choose from: lowercase, uppercase, numeric and/or special characters

Step 5: after selecting criteria, the input should be validated "You chose to have a password with , x , y , z. A confirm/go button is also no this pop up. At least one type of character must be selected. If not, an error prompt will appear.

Step 6: password is generated using selected criteria

Step 7: Password is diplayed in an alert or written to the page.
*/


// Assignment code here


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
