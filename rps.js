/*
pseudo code v0.1 for Rock Paper Scissors:

INIT random computer choice of rock, paper or scissors.
Ask for player's choice of rock, paper or scissors.
Compare computer and player choice.
    If player choice wins, alert "You win! " + choice beats choice.
    If player choice loses, alert "You lose, " + choice beats choice.
    If player choice = computer choice, alert "It's a draw!"

*/

function getComputerChoice() {
    let computerChoice = 0;
    let choiceNumber = Math.floor(Math.random() * 3) + 1;
    if (choiceNumber == 1) {
        computerChoice = "Rock";
    } else if (choiceNumber == 2) {
        computerChoice = "Paper";
    } else if (choiceNumber == 3) {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice.toLowerCase() == "rock" && computerChoice == "Scissors") {
        return `You win! ${playerChoice} beats ${computerChoice}.`;
    } else if (playerChoice.toLowerCase() == "rock" && computerChoice == "Paper") {
        return `You lose. ${computerChoice} beats ${playerChoice}.`;
    } else if (playerChoice.toLowerCase() == "paper" && computerChoice == "Rock") {
        return `You win! ${playerChoice} beats ${computerChoice}.`;
    } else if (playerChoice.toLowerCase() == "paper" && computerChoice == "Scissors") {
        return `You lose. ${computerChoice} beats ${playerChoice}.`;
    } else if (playerChoice.toLowerCase() == "scissors" && computerChoice == "Paper") {
        return `You win! ${playerChoice} beats ${computerChoice}.`;
    } else if (playerChoice.toLowerCase() == "scissors" && computerChoice == "Rock") {
        return `You lose. ${computerChoice} beats ${playerChoice}.`; 
    
    } else {
        return `It's a tie! Both chose ${computerChoice}.`;
    }
}

let playerChoice;
let computerChoice = getComputerChoice();

function game() {
    console.log("Playing 5 rounds: ");
    for (let step = 0; step < 5; step++) {
        playerChoice = window.prompt("Please select Rock/Paper/Scissors: ");
        if (playerChoice.toLowerCase() !== "rock" 
        && playerChoice.toLowerCase() !== "paper" 
        && playerChoice.toLowerCase() !== "scissors") {
            playerChoice = window.prompt("Please select Rock/Paper/Scissors: ", "Invalid input! Try again.");
        } else {
        computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
        }
    }
}

game();
