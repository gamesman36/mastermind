const app = document.getElementById("app");
const colors = ["red", "green", "blue", "yellow", "purple", "orange"];

let secretCode = "";
let playerGuess = "";
let clickedBtns = "";
let clicks = 0;
let coloursLeft = 4;
let guess = [];
let pegString = "";
let attemptsLeft = 12;

let result = {
    blackPegs: 0,
    whitePegs: 0
};