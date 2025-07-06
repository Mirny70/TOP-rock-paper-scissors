function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    console.log(choices[randomIndex]);
    return choices[randomIndex];
}

function getPlayerChoice() {
    const playerSelection = prompt("Enter your choice: ");
    console.log(playerSelection.toLowerCase());
    return playerSelection.toLowerCase();
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        console.log("You win! Rock beats Scissors " + "Player: " + playerScore + " Computer: " + computerScore);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        console.log("You win! Paper beats Rock " + "Player: " + playerScore + " Computer: " + computerScore);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        console.log("You win! Scissors beats Paper " + "Player: " + playerScore + " Computer: " + computerScore);
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        console.log("You lose! Paper beats Rock " + "Player: " + playerScore + " Computer: " + computerScore);
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        console.log("You lose! Scissors beats Paper " + "Player: " + playerScore + " Computer: " + computerScore);
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        console.log("You lose! Rock beats Scissors " + "Player: " + playerScore + " Computer: " + computerScore);
    }
}

function game() {
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
}

game();
