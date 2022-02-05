
function computerPlay () {
    let randomPick = Math.floor(Math.random() * 3);
    if (randomPick === 0) return "Rock";
    else if (randomPick === 1) return "Paper";
    else if (randomPick === 2) return "Scissors";
}

function playGame (computerSelection, playerSelection) {
    if (computerSelection === "Rock" && playerSelection === "Scissors") return "You lose! Rock smashes the Scissors";
    else if (computerSelection === "Paper" && playerSelection === "Rock") return "You lose! Paper wraps the Rock";
    else if (computerSelection === "Scissors" && playerSelection === "Paper") return "You lose! Scissors cuts the paper";
    else if (playerSelection === "Rock" && computerSelection === "Scissors") return "You win! Rock smashes the Scissors";
    else if (playerSelection === "Paper" && computerSelection === "Rock") return "You win! Paper wraps the Rock";
    else if (playerSelection === "Scissors" && computerSelection === "Paper") return "You win! Scissors cuts the paper";
    else if (playerSelection === computerSelection )return "It's a tie!";
}

function game (playerSelection) {
    let roundResult = playGame(computerPlay(), playerSelection);
    if (roundResult !== "It's a tie!") {
        if (roundResult.slice(0,9) === "You lose!") computerCounter++;
        else playerCounter++;
    }
    else rounds--;
    const result = document.querySelector(".result");
    result.textContent = roundResult;
    const playerScore = document.querySelector("#player")
    const computerScore = document.querySelector("#computer")
    playerScore.textContent = `Human: ${playerCounter}`;
    computerScore.textContent = `Computer: ${computerCounter}`;
    const finalResult = document.querySelector(".final-result");
    if (playerCounter === 5) finalResult.textContent = "The human is the ultimate winner!";
    else if (computerCounter === 5) finalResult.textContent = "The computer is the ultimate winner!";
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
      game(button.id);
    });
  });


let computerCounter = 0;
let playerCounter = 0;
let rounds = 0;