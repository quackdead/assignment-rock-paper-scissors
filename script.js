let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
    let i = Math.random();
    if (i <= 0.33){
        return "rock";
    }
    else if (i > 0.33 && i <= 0.66) {
        return "paper";
    }
    else return "scissor";
}
function getHumanChoice() {
    let i = prompt("Enter your choise between 1. rock, 2. paper, 3. scissor =>", getComputerChoice());
    return i;
}
function playGame() {
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === "rock") {
            if (computerChoice === "rock") {
                return "Draw!";
            }
            else if (computerChoice === "paper") {
                return "You Lose! Paper beats rock";
            }
            else if (computerChoice === "scissor") {
                return "You Win! Rock beats Scissor";
            }
        }
        else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                return "You Win! Paper beats Rock";
            }
            else if (computerChoice === "paper") {
                return "Draw!";
            }
            else if (computerChoice === "scissor") {
                return "You Lose! Scissor beats Paper";
            }
        }
        else if (humanChoice === "scissor") {
            if (computerChoice === "rock") {
                return "You Lose! Rock beats Scissor";
            }
            else if (computerChoice === "paper") {
                return "You Win! Scissor beats Paper";
            }
            else if (computerChoice === "scissor") {
                return "Draw!";
            }
        }
    }
    for (let i = 5; i > 0; i--) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        if (humanSelection === "rock") {
            if (computerSelection === "rock");
            else if (computerSelection === "paper") {
                computerScore++;
            }
            else if (computerSelection === "scissor") {
                humanScore++;
            }
        }
        else if (humanSelection === "paper") {
            if (computerSelection === "rock") {
                humanScore++;
            }
            else if (computerSelection === "paper");
            else if (computerSelection === "scissor") {
                computerScore++;
            }
        }
        else if (humanSelection === "scissor") {
            if (computerSelection === "rock") {
                computerScore++;
            }
            else if (computerSelection === "paper") {
                humanScore++;
            }
            else if (computerSelection === "scissor");
        }
        let winner = playRound(humanSelection, computerSelection);
        alert(winner);
    }
    alert(`Your Score: ${humanScore}\nComputer Score: ${computerScore}`);
}
playGame();