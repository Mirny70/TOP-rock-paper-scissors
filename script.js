function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    console.log(choices[randomIndex]);
    return choices[randomIndex];
}

function addText (text) {
    const p = document.createElement('p');
    p.textContent = text;
    document.getElementById('results').appendChild(p);
}

/*function getPlayerChoice() {
    const playerSelection = prompt("Enter your choice: ");
    console.log(playerSelection.toLowerCase());
    return playerSelection.toLowerCase();
}*/

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        addText("It's a tie!");
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        addText("You win! Rock beats Scissors " + "Player: " + playerScore + " Computer: " + computerScore);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        addText("You win! Paper beats Rock " + "Player: " + playerScore + " Computer: " + computerScore);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        addText("You win! Scissors beats Paper " + "Player: " + playerScore + " Computer: " + computerScore);
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        addText("You lose! Paper beats Rock " + "Player: " + playerScore + " Computer: " + computerScore);
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        addText("You lose! Scissors beats Paper " + "Player: " + playerScore + " Computer: " + computerScore);
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        addText("You lose! Rock beats Scissors " + "Player: " + playerScore + " Computer: " + computerScore);
    }
}

const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");

btnRock.addEventListener("click", () => playRound("rock", getComputerChoice()));
btnPaper.addEventListener("click", () => playRound("paper", getComputerChoice()));
btnScissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));

/*function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
    console.log("Player: " + playerScore + " Computer: " + computerScore);
    if (playerScore > computerScore) {
        console.log("You win this game!");
    } else if (playerScore < computerScore) {
        console.log("You lose this game!");
    } else {
        console.log("It's a tie this game!");
    }
    return;
}*/

//game();
