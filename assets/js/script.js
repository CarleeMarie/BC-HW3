/* Criteria
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

/* Steps
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
    //an answer that doesn't meet the criteria needs to be corrected, so we want to go back to the beginning of the function, so we call it
    generatePassword();     
  
  } else if (passwordLength > 128) {
    alert("Number must be between 8 and 128.");
    generatePassword(); 
  }

  //end of password length code block
  //start of character type code block
/*  
  var lowerCase = false, upperCase = false, number = false, special = false;
  while (lowerCase === false && upperCase === false && number === false && special === false) {
    // keeping track of whether something has been selected
    var selected = false;
    lowerCase = confirm("Do you want to include lowercase letters in your password? Yes or No?");
  if (lowerCase) {
    selected = lowerCase;  
  }
  
  upperCase = confirm("Do you want to include uppercase letters in your password? Yes or No?");
  if (!selected) {
    selected = upperCase;  
  }


  }


//if nothing selected - give a prompt that they have to select one
//using selected length, create an empty array - use a method to figure out how to pick the values
//if use string use a split method to randomly select value
//check confirms , pick uppwerCase and push it in to the password
//random.math
//once you have all that are required, you need to run it as many times as needede to get the length. you can either get the required characters and then fill the rest with random of one character K#n7IODOSFJ 

//store the selected characters in an array (see methods, maybe .push like we did with planets and then use the .join method to combine all the elements into single array/string that will then be shown to the user)
    
 */   




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
