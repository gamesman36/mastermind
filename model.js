const app = document.getElementById("app");
const pegs = document.getElementById("pegs");

let colours = ["red", "green", "blue", "yellow", "purple", "orange"];
let selectedColours = [];
let secretCode = [];
let clicks = 0;
let attemptsLeft = 12;

let result = {
    blackPegs: 0,
    whitePegs: 0
};