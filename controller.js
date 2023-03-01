// Random four-colour code
generateSecretCode();
function generateSecretCode(){
    const code = [];
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * colours.length);
        code.push(colours[randomIndex]);
    }
    secretCode = code;
}

// Keeping track of user behaviour
function addColour(colour) {
    clicks++;
    selectedColours.push(colour); // Tracking clicks
    lastSelected = colour;
    outputArray.push(`<span class="dot" id=${colour}></span>`); // Store the HTML for coloured dots
    output += outputArray[outputArray.length-1];
    view();
    if(clicks % 4 == 0) { // Code to obtain the last four clicks
        attemptsLeft--;
        const guess = selectedColours.slice(Math.max(selectedColours.length - 4, 0));
        checkGuess(guess, secretCode);
    }
} 

function checkGuess(guess, secretCode) {

    // See whether game is won, whether any attempts are left
    checkGameStatus(guess, secretCode);

    result.blackPegs = 0;
    result.whitePegs = 0;

    const secretCodeCopy = [...secretCode];

    // User gets a black peg for every correct colour in the correct position.
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === secretCode[i]) {
            result.blackPegs++;
            secretCodeCopy[i] = null;
        }
    }

    // User gets a white peg for every correct colour in an incorrect position.
    for (let i = 0; i < guess.length; i++) {
        const index = secretCodeCopy.indexOf(guess[i]);
        if (index !== -1) {
            result.whitePegs++;
            secretCodeCopy[index] = null;
        }
    }

    fourLast = guess;
    outputBlackWhiteDots(fourLast);
}

function checkGameStatus(guess, secretCode){
    if (JSON.stringify(guess) === JSON.stringify(secretCode)) {
        alert("You guessed the code!");
        location.reload();
    }

    else if (attemptsLeft == 0) {
        alert(`Game over! The code was ${secretCode}.`);
        location.reload();
    }
}