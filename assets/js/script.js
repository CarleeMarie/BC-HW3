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

// Assignment code starts here

// Set up variables
var password = document.getElementById("password");
var availLC = "abcdefghijklmnopqrstuvwxyz";
var availUC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var availSC = "!@#$%^&*()+"; 
var availNum = "0123456789";


//Define the generatePassword function:
function generatePassword() {
  // start of password length code block
  var passwordLength = prompt("How many characters do you want your password to be? Choose a number between 8 and 128.")
    if (passwordLength < 8) {
      alert("Number must be between 8 and 128.");
      //an answer that doesn't meet the criteria needs to be corrected, so we want to go back to the beginning of the function, so we call it
      generatePassword();    

    } else if (passwordLength > 128) {
      alert("Number must be between 8 and 128.");
      generatePassword(); 
    
    // } else { 
      //TODO: what do I put here?? I want it to move to the next variable and remember the password length chosen.

    // }
      
      
    }

    console.log(passwordLength);
  //end of password length code block

  //start of character type code block
  var lowerCase = confirm("Please select character types you want to include in your password: \n Include lowercase letters? Yes or No?");
    if (lowerCase) {
      selected = lowerCase;
      } else (!selected) {
        // ????
        // what do I use instead of console.log?
        
      }
    
  var upperCase = confirm("Do you want to include uppercase letters?");
    if (selected) {
    selected = upperCase; 
    } else {

    }
     
  var specialChar = confirm('Do you want to include special characters (ex: $, %, &, etc.)?');
  if (selected) {
    selected = specialChar; 
  } else {

  }
  
  var number = confirm("Do you want to include numbers?");
  if (selected) {
    selected = number;
  } else {  
   
  }
 
  
  var lowerCase = false, upperCase = false, number = false, special = false;
  while (lowerCase === false && upperCase === false && number === false && specialChar === false) {
    // keeping track of whether something has been selected
    var selected = false;
  
  var concatValues = [lowerCase, upperCase] 

  }
 
  return password;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// call the function to start the process
generatePassword();

// This is code from exercise 3.1.10
// Change the values and operators below to test your algorithm meets all conditions
var x = 60;
var expression1 = (x > 25);
var expression2 = (x > 50);

// Write Your JavaScript Code Here
if (expression1 && expression2) {
    console.log("True ✅ True ✅");
  //add the bang to expression2 to make it false  
} else if (expression1 || !expression2) {
    console.log("True ✅ False ❌");
  //put the bang at the front of expression1 to make it false rather than expression2  
} else if (!expression1 || expression2) {
    console.log("False ❌ True ✅");
  //add the bang in front of both expressions so that they both are false  
} else if (!expression1 && !expression2) {
    console.log("False ❌ False ❌");
} else {
    console.log("One of your numbers may be undefined.")
    //this will let you know if you have a mistake in your conditionals or code. Can delete this conditional when your code works.
}

/*NOTE: To make the code skip to the next else if statement, you need to change *the variable definitions - so change the var x equals statement or other var *value to make each conditional true. */
