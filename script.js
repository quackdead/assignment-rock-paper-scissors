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

const result = document.querySelector(".result");
const body = document.querySelector(".numbers");
const scores = document.querySelector(".scores");
const winner = document.querySelector(".winner");

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            result.textContent = "Draw!";
        }
        else if (computerChoice === "paper") {
            computerScore++;
            result.textContent = "You Lose! Paper beats rock";
        }
        else if (computerChoice === "scissor") {
            humanScore++;
            result.textContent = "You Win! Rock beats Scissor";
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++;
            result.textContent = "You Win! Paper beats Rock";
        }
        else if (computerChoice === "paper") {
            result.textContent = "Draw!";
        }
        else if (computerChoice === "scissor") {
            computerScore++;
            result.textContent = "You Lose! Scissor beats Paper";
        }
    }
    else if (humanChoice === "scissor") {
        if (computerChoice === "rock") {
            computerScore++;
            result.textContent = "You Lose! Rock beats Scissor";
        }
        else if (computerChoice === "paper") {
            humanScore++;
            result.textContent = "You Win! Scissor beats Paper";
        }
        else if (computerChoice === "scissor") {
            result.textContent = "Draw!";
        }
    }
    scores.textContent = `Your score ${humanScore}, Computer score ${computerScore}`;
    if (humanScore === 5) {
        result.remove();
        scores.remove();
        if (humanScore > computerScore) {
            winner.textContent = `You win! final score: you ${humanScore}, computer ${computerScore}`;
        }
        else if (computerScore > humanScore) {
            winner.textContent = `You lose! final score: you ${humanScore}, computer ${computerScore}`;
        }
        else winner.textContent = `Draw! final score: you ${humanScore}, computer ${computerScore}`;
        body.appendChild(winner);
        humanScore = 0;
        computerScore = 0;
    }
    else {
        if (body.contains(winner)) {
            winner.remove();
        }
        body.appendChild(scores);
        body.appendChild(result);
    }
}

const rock_button = document.querySelector(".rock-button");
const paper_button = document.querySelector(".paper-button");
const scissor_button = document.querySelector(".scissor-button");

rock_button.addEventListener("click", function() {
    playRound("rock", getComputerChoice())
});
paper_button.addEventListener("click", function() {
    playRound("paper", getComputerChoice())
});
scissor_button.addEventListener("click", function() {
    playRound("scissor", getComputerChoice())
});