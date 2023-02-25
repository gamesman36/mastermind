view();
function view(){
    html = /*html*/`
    <h1>Mastermind</h1>
    <p>
        <button id="red" onclick="clickBtn(this.id)">Red</button>
        <button id="green" onclick="clickBtn(this.id)">Green</button>
        <button id="blue" onclick="clickBtn(this.id)">Blue</button>
        <button id="yellow" onclick="clickBtn(this.id)">Yellow</button>
        <button id="purple" onclick="clickBtn(this.id)">Purple</button>
        <button id="orange" onclick="clickBtn(this.id)">Orange</button>
    </p>
    Please guess ${coloursLeft} colour(s)!<br />
    You have ${attemptsLeft} tries left.<br />
    ${clickedBtns}
    `;

    app.innerHTML = html;
}