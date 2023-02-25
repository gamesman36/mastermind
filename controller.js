function reset() {
    coloursLeft = 4;
    guess.length = 0;
    result.blackPegs = 0;
    result.whitePegs = 0;
    view();
}

generateSecretCode();
function generateSecretCode() {
    const code = [];
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * colors.length);
        code.push(colors[randomIndex]);
    }
    secretCode = code;
}

function clickBtn(colour) {
    coloursLeft--;
    clicks++;
    guess.push(colour);

    if (guess.length == 4) {
        attemptsLeft--;
        checkGuess(guess, secretCode);
        pegString = `${result.blackPegs} black ${result.whitePegs} white`;
        clickedBtns += `${colour} <b>(${pegString})</b><br />`;
        reset();
        return;
    }

    if (clicks % 4 == 1) {
        clickedBtns += "<br />";
    }

    clickedBtns += `${colour} `;
    view();
}

function checkGuess(guess, secretCode) {

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