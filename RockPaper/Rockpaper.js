function computerPlay() {
    let result;
    let rand = Math.floor(Math.random() * 3);

    if (rand == 0) {
        result = "Rock";
    } else if (rand == 1) {
        result = "Paper";
    } else if (rand == 2) {
        result = "Scissors";
    }
    return result;
}

function playRound(playerSelection, computerSelection) {
    let result;
    let pS = playerSelection.toUpperCase();
    let cS = computerSelection.toUpperCase();

    if (pS == "ROCK" || pS == "SCISSORS" || pS == "PAPER") {
        if (cS == "ROCK" || cS == "SCISSORS" || cS == "PAPER") {
            if (pS == cS) {
                result = "Its a Draw, Player had: " + pS + " and Computer had: " + cS;
            } else if (((pS == "ROCK") && (cS == "SCISSORS")) || ((pS == "SCISSORS") && (cS == "PAPER")) || ((pS == "PAPER") && (cS == "ROCK"))){
                result = "You Win!! Player had: " + pS + " and Computer had: " + cS;
            } else {
                result = "You Lost!! Player had: " + pS + " and Computer had: " + cS;
            }
        } else {
            result = "Computer input: " + cS + " is not an accepted input"
        }
    } else {
        result = "Player input: " + pS + " is not an accepted input"
    }



    return result
}

function game() {
    let comp , player;
    for (let i = 0; i < 5; i++) {
        comp = computerPlay();
        player = prompt("What is your input?", "ROCK, PAPER or SCISSORS")
        console.log(playRound(player, comp));
     }
}

game();
