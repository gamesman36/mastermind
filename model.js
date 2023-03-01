const app = document.getElementById("app");

// Colour code arrays and variables
let colours = ["red", "green", "blue", "yellow", "purple", "orange"];
let selectedColours = [];
let secretCode = [];
let fourLast = [];

// Output arrays and variables
let outputArray = [];
let output = "";

// Turn monitoring
let clicks = 0;
let attemptsLeft = 12;

// Keeping track of codemaker's response
let result = {
    blackPegs: 0,
    whitePegs: 0
};