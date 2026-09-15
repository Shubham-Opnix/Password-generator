// ========================================
// OPNIX PASSWORD GENERATOR
// ========================================


// ---------- HTML Elements ----------

const password =
    document.getElementById("password");

const length =
    document.getElementById("length");

const lengthValue =
    document.getElementById("lengthValue");


const uppercase =
    document.getElementById("uppercase");

const lowercase =
    document.getElementById("lowercase");

const numbers =
    document.getElementById("numbers");

const symbols =
    document.getElementById("symbols");


const generateBtn =
    document.getElementById("generateBtn");

const copyBtn =
    document.getElementById("copyBtn");

const message =
    document.getElementById("message");


// ---------- Strength Elements ----------

const strengthPassword =
    document.getElementById("strengthPassword");

const strengthEmoji =
    document.getElementById("strengthEmoji");

const strengthText =
    document.getElementById("strengthText");

const strengthFill =
    document.getElementById("strengthFill");


// ========================================
// CHARACTER SETS
// ========================================

const uppercaseChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowercaseChars =
    "abcdefghijklmnopqrstuvwxyz";

const numberChars =
    "0123456789";

const symbolChars =
    "!@#$%^&*()_+-=[]{}|;:,.<>?";


// ========================================
// PASSWORD LENGTH
// ========================================

length.addEventListener("input", function () {

    lengthValue.textContent =
        length.value;

});


// ========================================
// GENERATE PASSWORD
// ========================================

generateBtn.addEventListener("click", function () {

    let characters = "";


    // Uppercase
    if (uppercase.checked) {

        characters += uppercaseChars;

    }


    // Lowercase
    if (lowercase.checked) {

        characters += lowercaseChars;

    }


    // Numbers
    if (numbers.checked) {

        characters += numberChars;

    }


    // Symbols
    if (symbols.checked) {

        characters += symbolChars;

    }


    // Nothing selected
    if (characters.length === 0) {

        alert(
            "Please select at least one option."
        );

        return;

    }


    let generatedPassword = "";


    // Generate password
    for (
        let i = 0;
        i < Number(length.value);
        i++
    ) {

        const randomValues =
            new Uint32Array(1);

        crypto.getRandomValues(randomValues);


        const randomIndex =
            randomValues[0] % characters.length;


        generatedPassword +=
            characters[randomIndex];

    }


    // Display password
    password.value =
        generatedPassword;


    message.textContent =
        "Password generated!";

});


// ========================================
// COPY PASSWORD
// ========================================

copyBtn.addEventListener("click", function () {

    if (password.value === "") {

        message.textContent =
            "Generate a password first.";

        return;

    }


    navigator.clipboard.writeText(
        password.value
    );


    // Change button text
    copyBtn.textContent =
        "Copied ✓";


    message.textContent =
        "Password copied!";


    // Change back after 1.5 seconds
    setTimeout(function () {

        copyBtn.textContent =
            "Copy";

    }, 1500);

});


// ========================================
// PASSWORD STRENGTH CHECKER
// ========================================

strengthPassword.addEventListener(
    "input",
    function () {

        const userPassword =
            strengthPassword.value;


        // Empty password
        if (userPassword.length === 0) {

            strengthEmoji.textContent =
                "⚪";

            strengthText.textContent =
                "Enter a password";

            strengthFill.style.width =
                "0%";

            return;

        }


        // Check password properties

        const hasLowercase =
            /[a-z]/.test(userPassword);

        const hasUppercase =
            /[A-Z]/.test(userPassword);

        const hasNumber =
            /[0-9]/.test(userPassword);

        const hasSymbol =
            /[^A-Za-z0-9]/.test(userPassword);


        // Calculate score
        let score = 0;


        if (userPassword.length >= 8) {
            score++;
        }


        if (userPassword.length >= 12) {
            score++;
        }


        if (hasLowercase) {
            score++;
        }


        if (hasUppercase) {
            score++;
        }


        if (hasNumber) {
            score++;
        }


        if (hasSymbol) {
            score++;
        }


        // =================================
        // WEAK
        // =================================

        if (score <= 2) {

            strengthEmoji.textContent =
                "🔴";

            strengthText.textContent =
                "Weak";

            strengthFill.style.width =
                "33%";

        }


        // =================================
        // MEDIUM
        // =================================

        else if (score <= 4) {

            strengthEmoji.textContent =
                "🟡";

            strengthText.textContent =
                "Medium";

            strengthFill.style.width =
                "66%";

        }


        // =================================
        // STRONG
        // =================================

        else {

            strengthEmoji.textContent =
                "🟢";

            strengthText.textContent =
                "Strong";

            strengthFill.style.width =
                "100%";

        }

    }
);
