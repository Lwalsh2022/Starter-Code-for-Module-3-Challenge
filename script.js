// Assignment JavaScript Code
// Query selectors
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

// variables for all upper and lowercase letters, numbers, and characters)
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericCharacters = "0123456789";
var optionsVariable = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write a function that generates a random password in the "text area" box
function writePassword() {

    // Prevent the screen from refreshing when whe button is clicked
    event.preventDefault();

    // Clear previous password from screen
    password.value === "";
    var randomString = "";

    // Chose password criteria
    var lowercaseCharacters = confirm("Do you want your password to contain lowercase letters?");
    var uppercaseCharacters = confirm("Do you want your password to contain uppercase letters?");
    var numericCharacters = confirm("Do you want your password to contain numbers?");
    var specialCharacters = confirm("Do you want your password to contain special characters?");
    var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");

    // Write another function that checks if it's between 8 and 128 characters
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Your password is not between 8 characters and 128 characters. Please try again.");
        var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
    }

    // Ensure that if someone clicks cancel for all password criteria that it asks them to choose at least one
    else if (lowercaseCharacters === false && uppercaseCharacters === false && numericCharacters === false && specialCharacters === false) {
        alert("You must chose at least one password criteria.");
        var lowercaseCharacters = confirm("Do you want your password to contain lowercase letters?");
        var uppercaseCharacters = confirm("Do you want your password to contain uppercase letters?");
        var numericCharacters = confirm("Do you want your password to contain numbers?");
        var specialCharacters = confirm("Do you want your password to contain special characters?");
    }

    // Use the criteria that are selected to generate the password
    if (lowercaseCharacters) {
        optionsVariable += lowercaseCharacters;
    }

    if (uppercaseCharacters) {
        optionsVariable += uppercaseCharacters;
    }

    if (numericCharacters) {
        optionsVariable += Number;
    }

    if (specialCharacters) {
        optionsVariable += specialCharacters;
    }

    // Generates a random password based on the criteria that have been selected
    for (var i = 0; i < passwordLength; i++) {
        // Continues to select a random character value from the string until it is the desired length
        randomString += optionsVariable.charAt(Math.floor(Math.random() * optionsVariable.length));
    }
    password.value = randomString;

}

// Call the function
// writePassword();