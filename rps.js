let computerScore = 0;
let humanScore = 0;

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

function playRound() {
    let playerSelection = prompt("Choose between Rock, Paper & Scissor").toLowerCase();
    let computerSelection = computerPlay();


    switch(computerSelection + playerSelection) {
        case "rscissor":
        case "prock":
        case "spaper":
            console.log("Computer wins!");
            computerScore++;
        break;

        case "rpaper":
        case "pscissor":
        case "srock":
            console.log("You win!");
            humanScore++;
        break;
        
        case "rrock":
        case "ppaper":
        case "sscissor":
            console.log("It/'s a tie!");
        break;
    }

}

function game() {

        for (i=0; i<5; i++) {
            playRound();

            console.log("The score is: ")
            console.log("Computer: " + computerScore);
            console.log("Human: " + humanScore);
        }

    if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else if (computerScore == humanScore) {
        console.log("Nobody won this game, it/'s a tie!")
    } else {
        console.log("Human wins the game!");
    }
}

game();