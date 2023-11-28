// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = parseInt(prompt("How long do you want your password? Please enter a number between 8 - 128."));
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128")
    return getPasswordOptions();
  }
  if (isNaN(passwordLength)) {
    alert('Please enter a NUMBER between 8 and 128')
    return getPasswordOptions();
  }

// Characters in passwords

  var lowercase = confirm("Would you like lowercase letters in your password?")
  var uppercase = confirm("Would you like uppercase letters in your password?")
  var numeric = confirm("Would you like numbers in your password?")
  var special = confirm("Would you like special characters in your password?")

  if (!lowercase && !uppercase && !numeric && !special) {alert('Please choose at least one character type')
  return getPasswordOptions();
}

// Function for getting a random element from an array
function getRandom(arr) {
  return Math.floor(Math.random() * arr.length)
}
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions ()
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);