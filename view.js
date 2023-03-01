view();
function view() { // Main interface to respond to user's clicks
    let html = /*html*/`
    <h1>Mastermind</h1>
    <p>
        <button id="red" onclick="addColour(this.id)">Red</button>
        <button id="green" onclick="addColour(this.id)">Green</button>
        <button id="blue" onclick="addColour(this.id)">Blue</button>
        <button id="yellow" onclick="addColour(this.id)">Yellow</button>
        <button id="purple" onclick="addColour(this.id)">Purple</button>
        <button id="orange" onclick="addColour(this.id)">Orange</button>
    </p>
    <p><b>Attempts left: ${attemptsLeft}</b></p>
    <p>${output}</p>
    `;

    app.innerHTML = html;
}

function outputBlackWhiteDots(fourLast) { // Handle this separately
    output += " ";

    for (let i = 0; i < result.blackPegs; i++) {
        output += `<span class="dot" id="black"></span>`;
    }

    for (let i = 0; i < result.whitePegs; i++) {
        output += `<span class="dot" id="white"></span>`;
    }

    output += "<br />";
    view();
}