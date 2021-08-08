playerSelection = document.querySelectorAll("button");
computerScore = document.getElementById("computerScore_span");
playerScore = document.getElementById("playerScore_span");
gameUpdate = document.getElementById("gameStatus");

computerScore = 0;
playerScore = 0;

//making a function for computers move. 
function computerPlay() {

    let computerMath = Math.floor((Math.random()*3) + 1);
    let computerChoice = "";
        if (computerMath == 1) {
            computerChoice = "r";
        } else if (computerMath == 2) {
            computerChoice = "p";
        } else {
            computerChoice = "s";
        }

    return computerChoice;
}

//A function to declare player's move depending on which button he/she pressed. Then calling the function "playRound".
playerSelection.forEach((button) => {

    button.addEventListener("click", () => {
        playRound(button.id);
    });
});

//function if the player wins a round

function win() {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    gameStatus.innerHTML = "You won this round!"
}

function lose() {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    gameStatus.innerHTML = "You lost this round, pick your next move wisely!";
}

function tie() {
    gameStatus.innerHTML = "It's a tie!"
}



//Function for the round played. Using switch to compare players- & computers move and adding points depending on who won.
function playRound(playerSelection) {
    let computerSelection = computerPlay();

    switch(computerSelection + playerSelection) {
        case "rs":
        case "pr":
        case "sp":
            lose();
        break;
        case "rp":
        case "ps":
        case "sr":
            win();
        break;
        case "rr":
        case "pp":
        case "ss":
            tie();
        break;
    }
    game();
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    gameStatus.innerHTML = "Pick an option!";
    document.getElementById("r").disabled = false;
    document.getElementById("p").disabled = false;
    document.getElementById("s").disabled = false;
    
}

//Disable buttons so the player can't make a choice while the game is reloading
function disableButton() {
    document.getElementById("r").disabled = true;
    document.getElementById("p").disabled = true;
    document.getElementById("s").disabled = true;
}

//Deciding who won after 5 playRounds played.
function game() {
    if (playerScore === 5) {
        gameStatus.innerHTML = "Congratulations, you won the game! <br> Wait 10 seconds and the game will restart!";
        disableButton();
        window.setTimeout(resetGame, 10000);
        
    }
    if (computerScore === 5) {
        gameStatus.innerHTML = "You lost the game! <br> Wait 10 seconds and the game will restart!";
        disableButton();
        window.setTimeout(resetGame, 10000);
    }
}

