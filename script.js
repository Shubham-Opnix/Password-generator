const password = document.getElementById("password");
const length = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const message = document.getElementById("message");


const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";


length.addEventListener("input", function() {

    lengthValue.textContent = length.value;

});


generateBtn.addEventListener("click", function() {

    let characters = "";

    if (uppercase.checked) {
        characters += uppercaseChars;
    }

    if (lowercase.checked) {
        characters += lowercaseChars;
    }

    if (numbers.checked) {
        characters += numberChars;
    }

    if (symbols.checked) {
        characters += symbolChars;
    }


    if (characters.length === 0) {

        alert("Please select at least one option.");

        return;
    }


    let generatedPassword = "";


    for (let i = 0; i < length.value; i++) {

        const randomIndex =
            Math.floor(Math.random() * characters.length);

        generatedPassword += characters[randomIndex];

    }


    password.value = generatedPassword;

    message.textContent = "Password generated!";

});


copyBtn.addEventListener("click", function() {

    if (password.value === "") {

        message.textContent = "Generate a password first.";

        return;
    }


    navigator.clipboard.writeText(password.value);

    message.textContent = "Password copied!";

});