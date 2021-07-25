function computerSelection() {

    let computerChoice = Math.floor((Math.random()*3) + 1);

        if (computerChoice == 1) {
            console.log("Rock");
        } else if (computerChoice == 2) {
            console.log("Paper");
        } else {
            console.log("Scissor");
    }
}

function playRound() {
    let playerSelection = prompt("Choose between Rock, Paper & Scissor");

    console.log(playerSelection.toLowerCase);
}

// Trying to make players answers case insensitive.





