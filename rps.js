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
        break;

        case "rpaper":
        case "pscissor":
        case "srock":
            console.log("You win!");
        break;
        
        case "rrock":
        case "ppaper":
        case "sscissor":
            console.log("It/'s a tie!");
        break;
    }
}
