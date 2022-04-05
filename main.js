// 0 = Rock
// 1 = Paper
// 2 = Scissors

var Wins = 0;
var Losses = 0;
var Ties = 0;

const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');

//The updating of the scoreboard
function RPSPrint() {
    h2.textContent = "Wins: " + Wins + " Loses: " + Losses + " Ties: " + Ties;
}

//The game creating the computers choice and then comparing
function RPSCompare() {
    var randomVar = Math.floor(Math.random() * 3);

        //Comparison between the two
        if (playerNum === randomVar) {
            Ties = Ties + 1;
            RPSPrint()
            h3.textContent = "It's a tie";
        } else if (playerNum === 1 && randomVar === 2) {
            Wins = Wins + 1;
            RPSPrint()
            h3.textContent = "You win!";
        } else if (playerNum === 2 && randomVar === 0) {
            Wins = Wins + 1;
            RPSPrint()
            h3.textContent = "You win!";
        } else if (playerNum === 0 && randomVar === 1) {
            Wins = Wins + 1;
            RPSPrint()
            h3.textContent = "You win!";
        } else {
            Losses = Losses + 1;
            RPSPrint()
            h3.textContent = "You lose :(";
        }
}

//For each button pressed
const rockButton = document.querySelector("#rockButton");

rockButton.addEventListener("click", function() {
  playerNum = 0;
  RPSCompare()
})

const paperButton = document.querySelector("#paperButton");

paperButton.addEventListener("click", function() {
  playerNum = 1;
  RPSCompare()
})

const scissorsButton = document.querySelector("#scissorsButton");

scissorsButton.addEventListener("click", function() {
  playerNum = 2;
  RPSCompare()
})