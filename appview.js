appView();
function appView() {
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
    ${outputColours()}
    `;

    app.innerHTML = html;
}

function outputColours() {
    let output = "";
    for (let i = 0; i < selectedColours.length; i++) {
        output += `<span class="dot" id="${selectedColours[i]}"></span>`;
        if (i % 4 == 3) output += "<br />";
    }
    return output;
}