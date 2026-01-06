function getComputerChoice() {
    let randomNum = Math.random();
    if (randomNum < 1/3) {
        return 'rock';
    } else if (randomNum < 2/3) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    let choice = prompt("Guess Between rock, paper or scissors", " ");
    return choice.trim(); 
}




const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice == computerChoice) {
            console.log('It is a tie');
            return;
        }

        if (
            (humanChoice == 'rock' && computerChoice == 'paper') ||
            (humanChoice == 'paper' && computerChoice == 'scissors') ||
            (humanChoice == 'scissors' && computerChoice == 'rock')
        ) {
            console.log(`You lose! ${humanChoice} deos not beat ${computerChoice}`);
            computerScore++;
        } else {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
    }
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    
    console.log(`Final score Human: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
    console.log("You won the game!");
    } else if (computerScore > humanScore) {
    console.log("You lost the game!");
    } else {
        console.log("Game is a tie!")
    }
}

playGame();