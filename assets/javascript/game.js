var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var directionsText = document.getElementById("directions");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var userGuessText = document.getElementById("userGuess");
var guessesLeftText = document.getElementById("guessesLeft");
var allGuessesText = document.getElementById("allGuesses");
var allGuesses = [];

var computerGuess = options[Math.floor(Math.random() * options.length)];

function repeat(){
    guessesLeft = 9;
    allGuesses = [];
    computerGuess = options[Math.floor(Math.random() * options.length)];
}

document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    console.log(userGuess);
    console.log(computerGuess);

if (options.indexOf(userGuess) > -1) {
    if (allGuesses.indexOf(userGuess) === -1) {
        if (userGuess === computerGuess) {
            wins++;
            repeat();
        } else if (guessesLeft > 1) {
            guessesLeft--;
            allGuesses.push(userGuess);
        } else {
            losses++;
            repeat();
        }
    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesLeftText.textContent = guessesLeft;
    allGuessesText.textContent = allGuesses;
    } else {
        alert("Choose an unused letter to continue playing!")
    }
} else {
    alert("Choose a letter to play!");
    }

}
              
         

    

