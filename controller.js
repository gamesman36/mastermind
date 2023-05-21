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

    // Working out how many pegs to award, taking duplicates into account
    const guessCounts = getCounts(guess);
    const secretCodeCounts = getCounts(secretCode);

    result.blackPegs = 0;
    result.whitePegs = 0;

    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === secretCode[i]) {
            result.blackPegs++;
            guessCounts[guess[i]]--;
            secretCodeCounts[secretCode[i]]--;
        }
    }

    for (let colour in guessCounts) {
        result.whitePegs += Math.min(guessCounts[colour], secretCodeCounts[colour])
    }

    result.whitePegs -= result.blackPegs;

    fourLast = guess;
    outputBlackWhiteDots(fourLast);
}

function getCounts(arr)
{
    const counts = {};
    for (let i = 0; i < arr.length; i++) {
        const colour = arr[i];
        counts[colour] = (counts[colour] || 0) + 1;
    }
    return counts;
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