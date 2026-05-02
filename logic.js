const results = document.querySelector("#results");
const scoreDisplay = document.querySelector("#score");
const winnerDisplay = document.querySelector("#winner");

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

function getComputerChoice() {
  let randomNum = Math.random();

  if (randomNum < 1 / 3) {
    return "rock";
  } else if (randomNum < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  if (gameOver) return;

  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    results.textContent = "It's a tie!";
    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    results.textContent = `You win this round! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    results.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}`;
  }

  scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;


  if (humanScore === 5 || computerScore === 5) {
    gameOver = true;

    if (humanScore > computerScore) {
      winnerDisplay.textContent = "You won the game!";
    } else {
      winnerDisplay.textContent = "Computer wins the game!";
    }
  }
}


document.querySelector(".choiceOne").addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

document.querySelector(".choiceTwo").addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

document.querySelector(".choiceThree").addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});