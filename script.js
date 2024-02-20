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

// get input values for password generation
var passLength = document.querySelector('#length');
var lowercaseCharType = document.querySelector('#lowercase');
var uppercaseCharType = document.querySelector('#uppercase');
var numericCharType = document.querySelector('#numeric');
var specialCharType = document.querySelector('#special');

// Function to prompt user for password options
function getPasswordOptions() {
  // validation for password length
  if (!passLength.value){
    alert('Please enter a password length')
  } else {
    if (passLength.value < 8 || passLength.value > 128){
      alert('Please enter a password length within the specified number of characters')
    } else {
      var len = passLength.value;

 // validation for password char type
 if (!lowercaseCharType.checked && !uppercaseCharType.checked && !numericCharType.checked && !specialCharType.checked){
  alert('Please choose at least one character type to be included in the password')
} else {
  var checkedBoxes = [];
  if (lowercaseCharType.checked) {
    checkedBoxes.push('lowercase');
  }
  if (uppercaseCharType.checked) {
    checkedBoxes.push('uppercase');
  }
  if (numericCharType.checked) {
    checkedBoxes.push('numeric');
  }
  if (specialCharType.checked) {
    checkedBoxes.push('special');
  }
  generatePassword(len, checkedBoxes);
}
}
}
}

// Function for getting a random element from an array
function getRandom(arr) {
return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword(length, options) {
var password = '';
// Track the number of characters added
var addedCharacters = 0;

// Loop through the length of the password
for (var i = 0; i < options.length; i++) {
var type = options[i];

// Determine the array for the current type
var currentArray;
if (type === 'numeric') {
currentArray = numericCharacters;
} else if (type === 'lowercase') {
currentArray = lowerCasedCharacters;
} else if (type === 'uppercase') {
currentArray = upperCasedCharacters;
} else if (type === 'special') {
currentArray = specialCharacters;
}

// Add a random character from the current array
password += getRandom(currentArray);

// Increment the added characters count
addedCharacters++;

}

// Fill the remaining characters to match the desired length
while (addedCharacters < length) {
  // Get a random character from any of the selected arrays
  var randomType = options[Math.floor(Math.random() * options.length)];
  var randomArray;
  if (randomType === 'numeric') {
    randomArray = numericCharacters;
  } else if (randomType === 'lowercase') {
    randomArray = lowerCasedCharacters;
  } else if (randomType === 'uppercase') {
    randomArray = upperCasedCharacters;
  } else if (randomType === 'special') {
    randomArray = specialCharacters;
  }
  
  // Add a random character from the random array
  password += getRandom(randomArray);
  
  // Increment the added characters count
  addedCharacters++;
}

writePassword(password);
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword(password) {
// var password = generatePassword();
var passwordText = document.querySelector('#password');

passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', getPasswordOptions);