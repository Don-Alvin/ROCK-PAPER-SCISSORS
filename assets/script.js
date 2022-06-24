let playerScore = 0;
let compScore = 0;


function computerPlay(){
    const selection = ["Rock", "Paper", "Scissors"]
    return selection[Math.floor(Math.random() * selection.length)].toUpperCase();
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock"){
       if(computerSelection == "PAPER"){
        compScore++
            return "You Lose! Paper beats Rock!"
       }else if (computerSelection == "SCISSORS"){
        playerScore++
            return "You win! Rock beats scissors!";
       }else if (computerSelection == "ROCK"){
        return "It's a draw";
       }
    }else if (playerSelection == "paper"){
        if(computerSelection == "ROCK"){
            playerScore++;
            return "You win! Paper beats rock!";
        }else if (computerSelection == "SCISSORS"){
            compScore++;
            return "You Lose! Scissors beats Paper!";
        }else if (computerSelection == "PAPER"){
            return "It's a draw!";
        }
    }else if (playerSelection == "scissors"){
        if(computerSelection == "ROCK"){
            compScore++;
            return "You Lose! Paper beats Rock!";   
        }else if (computerSelection == "PAPER"){
            playerScore++;
            return "You win! Scissors beats paper!";
        }else if (computerSelection == "SCISSORS"){
            return "It's a draw!"
        }
    }
}


function game(){
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("What is your selection? ").toLowerCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection))
    }

    if (playerScore > compScore){
        return "You won, you beat the computer!";
    }else if (playerScore < compScore){
        return "You lost to the computer.Try again!";
    }
}

console.log(game());









