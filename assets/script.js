let playerScore = 0;
let compScore = 0;


function computerPlay(){
    const selection = ["Rock", "Paper", "Scissors"]
    return selection[Math.floor(Math.random() * selection.length)]//.toUpperCase();
}

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const message = document.querySelector('.message');
const playerCount = document.querySelector('.playerCount');
const compCount = document.querySelector('.compCount')
const p = document.createElement('p');

function checkForWinner(playerScore, compScore){
    if(playerScore === 5){
        const h2 = document.createElement('h2');
        p.remove();
        h2.textContent = `You won ${playerScore} to ${compScore} against the computer`;
        message.appendChild(h2);
    }else if (compScore === 5){
        const h2 = document.createElement('h2');
        p.remove();
        h2.textContent = `You lost ${playerScore} to ${compScore} against the computer`;
        message.appendChild(h2); 
    }
}




function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock"){
       if(computerSelection == "Paper"){
            compScore++;
            //const p = document.createElement('p');
            p.textContent = "You Lose! Paper beats Rock!";
            message.appendChild(p);
       }else if (computerSelection == "Scissors"){
            playerScore++;
            p.remove();
            //const p = document.createElement('p');
            p.textContent = "You win! Rock beats scissors!";
            message.appendChild(p);
       }else if (computerSelection == "Rock"){
        p.remove();
        //const p = document.createElement('p');
        p.textContent = "It's a draw";
        message.appendChild(p);
       }
    }else if (playerSelection == "paper"){
        if(computerSelection == "Rock"){
            playerScore++;
            p.remove();
            //onst p = document.createElement('p');
            p.textContent = "You win! Paper beats rock!";
            message.appendChild(p);
        }else if (computerSelection == "Scissors"){
            compScore++;
            p.remove();
            //const p = document.createElement('p');
            p.textContent = "You Lose! Scissors beats Paper!";
            message.appendChild(p);
        }else if (computerSelection == "Paper"){
            p.remove();
            //const p = document.createElement('p');
            p.textContent = "It's a draw!";
            message.appendChild(p);
        }
    }else if (playerSelection == "scissors"){
        if(computerSelection == "Rock"){
            compScore++;
            p.remove();
            //const p = document.createElement('p');
            p.textContent = "You Lose! Rock beats Scissors!";
            message.appendChild(p); 
        }else if (computerSelection == "Paper"){
            playerScore++;
            p.remove();
            //const p = document.createElement('p');
            p.textContent = "You win! Scissors beats paper!";
            message.appendChild(p);
        }else if (computerSelection == "Scissors"){
            p.remove();
            //const p = document.createElement('p');
            p.textContent = "It's a draw!"
            message.appendChild(p);
        }
    }
}

rockButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = "rock";
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, compScore);
    playerCount.textContent = `${playerScore}`;
    compCount.textContent = `${compScore}`
});

paperButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = "paper";
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, compScore);
    playerCount.textContent = `${playerScore}`;
    compCount.textContent = `${compScore}`
});

scissorsButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, compScore);
    playerCount.textContent = `${playerScore}`;
    compCount.textContent = `${compScore}`
});












