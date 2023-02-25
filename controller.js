generateSecretCode();
function generateSecretCode(){
    const code = [];
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * colours.length);
        code.push(colours[randomIndex]);
    }
    secretCode = code;
}

function addColour(colour) {
    clicks++;
    selectedColours.push(colour);
    appView();
    if(clicks % 4 == 0) {
        attemptsLeft--;
        appView();
        const guess = selectedColours.slice(Math.max(selectedColours.length - 4, 0));
        checkGuess(guess, secretCode);
        pegsView();
    } 
}

function checkGuess(guess, secretCode) {

    result.blackPegs = 0;
    result.whitePegs = 0;

    if (JSON.stringify(guess) === JSON.stringify(secretCode)) {
        alert("You guessed the code!");
        location.reload();
    }

    else if (attemptsLeft == 0) {
        alert(`Game over! The code was ${secretCode}.`);
        location.reload();
    }

    const secretCodeCopy = [...secretCode];

    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === secretCode[i]) {
            result.blackPegs++;
            secretCodeCopy[i] = null;
        }
    }

    for (let i = 0; i < guess.length; i++) {
        const index = secretCodeCopy.indexOf(guess[i]);
        if (index !== -1) {
            result.whitePegs++;
            secretCodeCopy[index] = null;
        }
    }
}