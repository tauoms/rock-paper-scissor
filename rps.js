/*
pseudo code v0.1 for Rock Paper Scissors:

INIT random computer choice of rock, paper or scissor.
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

let computerChoice = getComputerChoice();
let playerChoice = "scissors";
let roundResult = singleRound(playerChoice, computerChoice);


function singleRound(playerChoice, computerChoice) {
    let roundResult;
    if (playerChoice.toLowerCase() == "rock" && computerChoice == "Scissors") {
        roundResult = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else if (playerChoice.toLowerCase() == "rock" && computerChoice == "Paper") {
        roundResult = `You lose. ${computerChoice} beats ${playerChoice}.`;
    } else if (playerChoice.toLowerCase() == "paper" && computerChoice == "Rock") {
        roundResult = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else if (playerChoice.toLowerCase() == "paper" && computerChoice == "Scissors") {
        roundResult = `You lose. ${computerChoice} beats ${playerChoice}.`;
    } else if (playerChoice.toLowerCase() == "scissors" && computerChoice == "Paper") {
        roundResult = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else if (playerChoice.toLowerCase() == "scissors" && computerChoice == "Rock") {
        roundResult = `You lose. ${computerChoice} beats ${playerChoice}.`; 
    
    } else {
        roundResult = `It's a tie! Both chose ${computerChoice}.`;
    }
    return roundResult;
}

console.log("Player: " + playerChoice)
console.log("Computer: " + computerChoice)
console.log(roundResult)