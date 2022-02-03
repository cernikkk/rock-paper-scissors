function computerPlay () {
    let randomPick = Math.floor(Math.random() * 3);
    if (randomPick === 0) return "Rock";
    else if (randomPick === 1) return "Paper";
    else if (randomPick === 2) return "Scissors";
}

function playerPlay (playerSelection) {
    let trimmedSelection = playerSelection.trim();
    let firstLetter = trimmedSelection.slice(0,1);
    let leftText = trimmedSelection.slice(1);
    return firstLetter.toUpperCase() + leftText.toLowerCase();
}

function playGame (computerSelection, userSelection) {
    let playerSelection = playerPlay (userSelection);
    if (computerSelection === "Rock" && playerSelection === "Scissors") return "You lose! Rock smashes the Scissors";
    else if (computerSelection === "Paper" && playerSelection === "Rock") return "You lose! Paper wraps the Rock";
    else if (computerSelection === "Scissors" && playerSelection === "Paper") return "You lose! Scissors cuts the paper";
    else if (playerSelection === "Rock" && computerSelection === "Scissors") return "You win! Rock smashes the Scissors";
    else if (playerSelection === "Paper" && computerSelection === "Rock") return "You win! Paper wraps the Rock";
    else if (playerSelection === "Scissors" && computerSelection === "Paper") return "You win! Scissors cuts the paper";
    else if (playerSelection === computerSelection )return "It's a tie!";
    else return "Error. Try again";
}

function game (playerSelection) {
    let roundResult = playGame(computerPlay(), playerSelection);
    if (roundResult !== "Error. Try again" || "It's a tie!") {
        if (roundResult.slice(0,9) === "You lose!") computerCounter++;
        else playerCounter++;
    }
    else rounds--;
    console.log(roundResult);
}

let computerCounter = 0;
let playerCounter = 0;
let rounds = 0;

for (rounds = 0; rounds < 5; rounds++) {
    let playerPick = prompt("Rock, Paper or Scissors?");
    game (playerPick);
}
if (playerCounter > computerCounter) console.log("The human is the ultimate winner!");
else console.log("The computer is the ultimate winner!");
