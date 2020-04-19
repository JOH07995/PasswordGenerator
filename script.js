// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var writePW = passwordText.innerHTML;
var choices;
var password;

var passwordAttributes = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numeric: "0123456789",
  symbols: " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
  ul: uppercase + lowercase,
  un: uppercase + numeric,
  us: uppercase + symbols,
  ln: lowercase + numeric,
  ls: lowercase + symbols,
  ns: numeric + symbols,
  uln: uppercase + lowercase + numeric,
  uls: uppercase + lowercase + symbols,
  uns: uppercase + numeric + symbols,
  lns: lowercase + numeric + symbols,
  ulns: uppercase + lowercase + numeric + symbols
};


// Write password to the #password input
function writePassword() {
  generatePassword();
  writePW = password;
}


function generatePassword() {

  var pwLength = parseInt(prompt("How many characters would you like the password?\n\n Pick a number between 8 and 128.\n"));
  var upperInc = confirm("Include Uppercase Characters?");
  var lowerInc = confirm("Include Lowercase Characters?");
  var numberInc = confirm("Include Numeric Characters?");
  var symbolInc = confirm("Include Special Characters?");

  // user enters a number between 8 and 128
  if (pwLength >= 8 && pwLength <= 128) {
    // at least one option is confirmed/true
    if (upperInc || lowerInc || numberInc || symbolInc) {
      writePW = "";
      choices = "";

      // Yay, you picked all 4 options
      if (upperInc && lowerInc && numberInc && symbolInc) {
        choices = passwordAttributes.ulns;
      }
      // Else if for 3 options
      else if (upperInc && lowerInc && numberInc) {
        choices = passwordAttributes.uln;
      }
      else if (upperInc && lowerInc && symbolInc) {
        choices = passwordAttributes.uls;
      }
      else if (upperInc && numberInc && symbolInc) {
        choices = passwordAttributes.uns;
      }
      else if (lowerInc && numberInc && symbolInc) {
        choices = passwordAttributes.lns;
      }
      // Else if for 2 options 
      else if (upperInc && lowerInc) {
        choices = passwordAttributes.ul;

      } else if (upperInc && numberInc) {
        choices = passwordAttributes.un;

      } else if (upperInc && symbolInc) {
        choices = passwordAttributes.us;

      } else if (lowerInc && numberInc) {
        choices = passwordAttributes.ln;

      } else if (lowerInc && symbolInc) {
        choices = passwordAttributes.ls;

      } else if (numberInc && symbolInc) {
        choices = passwordAttributes.ns;
      }
      // Else if for 1 option
      else if (upperInc) {
        choices = passwordAttributes.uppercase;
      }
      else if (lowerInc) {
        choices = passwordAttributes.lowercase;
      }
      else if (numberInc) {
        choices = passwordAttributes.numeric;
      }
      else if (symbolInc) {
        choices = passwordAttributes.symbols;
      }
      // Just in case
      else {
        alert("I don't know what I'm doing...")
      };

      for (var i = 0; i < pwLength; i++) {
        password += choices.charAt(Math.floor(Math.random() * choices.length) + 1);
      }
      return password;

      // user did not pick any of the four, so they get 💩
    } else {
      writePW = "💩";
      alert("Please select at least one Character type to include.")
    }
    // user did not enter in a number or one not in range
  } else {
    alert("Please pick a number between 8 and 128.")
  };
};






  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword());