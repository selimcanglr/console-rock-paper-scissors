const MOVES = ["rock", "paper", "scissors"];

function computerPlay() {
    const MIN = 0;
    const MAX = MOVES.length - 1;

    let move = MOVES[Math.floor(Math.random() * (MAX - MIN + 1)) + MIN];
    return move; 
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    capitalizedComputerSelection = capitalize(computerSelection);
    capitalizedPlayerSelection = capitalize(playerSelection);

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "Draw!"
        }
        // Computer wins
        else if (computerSelection === "paper") {
            return resultMessage(capitalizedComputerSelection, capitalizedPlayerSelection, false);
        }
        // Player wins
        else {
            return resultMessage(capitalizedPlayerSelection, capitalizedComputerSelection, true);
        }
    }
    else if (playerSelection === "paper") {
        // Player wins
        if (computerSelection === "rock") {
            return resultMessage(capitalizedPlayerSelection, capitalizedComputerSelection, true);
        }
        else if (computerSelection === "paper") {
            return "Draw";
        }
        // Computer wins
        else {
            return resultMessage(capitalizedComputerSelection, capitalizedPlayerSelection, false);
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return resultMessage(capitalizedComputerSelection, capitalizedPlayerSelection, false);
        }
        else if (computerSelection === "paper") {
            return resultMessage(capitalizedPlayerSelection, capitalizedComputerSelection, true);
        }
        else {
            return "Draw!"
        }
    }
    else {
        return "Error: Invalid move by the user."   
    }
}

function resultMessage(winnerMove, loserMove, won) {
    if (won) {
        return "You Win! " + winnerMove + " beats " + loserMove; 
    }
    else {
        return "You Lose! " + winnerMove + " beats " + loserMove; 
    }
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function game() {
    const REPEAT = 5;

    for (let i = 0; i < REPEAT; i++) {
        let playerSelection;

        do {
            playerSelection = prompt("Make your move! Rock, paper or scissors.")
        } while(!playerSelection)

        let computerSelection = computerPlay();

        console.log("Player move: " + playerSelection);
        console.log("Computer move: " + computerSelection); 

        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
