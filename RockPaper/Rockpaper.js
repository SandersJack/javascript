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
    let pscore;
    let result;
    let pS  = playerSelection.toUpperCase();
    let cS  = computerSelection.toUpperCase();

    if (pS == "ROCK" || pS == "SCISSORS" || pS == "PAPER") {
        if (cS == "ROCK" || cS == "SCISSORS" || cS == "PAPER") {
            if (pS == cS) {
                result = "Its a Draw, Player had: " + pS + " and Computer had: " + cS;    
                pscore = -99;
            } 
            if (((pS == "ROCK") && (cS == "SCISSORS")) || ((pS == "SCISSORS") && (cS == "PAPER")) || ((pS == "PAPER") && (cS == "ROCK"))){
                pscore = 1;
                result = "You Win!! Player had: " + pS + " and Computer had: " + cS;
            } 
            if (((cS == "ROCK") && (pS == "SCISSORS")) || ((cS == "SCISSORS") && (pS == "PAPER")) || ((cS == "PAPER") && (pS == "ROCK"))){
                result = "You Lost!! Player had: " + pS + " and Computer had: " + cS;
                pscore = 0;
            }
        } else {
            result = "Computer input: " + cS + " is not an accepted input";
        }
    } else {
        result = "Player input: " + pS + " is not an accepted input";
    }


    console.log(pscore)

    return [result, pscore];
}

const buttons = document.querySelectorAll('button');
const rdiv = document.querySelector('#result')
const dscore = document.querySelector('#score')

let ptscore = 0;
let ctscore = 0;
let core = 0;

buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      
      let play = playRound(button.id,computerPlay()); 
      rdiv.textContent = play[0];
      core = play[1]
      
      if (core == 1) {
          ptscore++;
      } else if (core == 0) {
          ctscore++;
      }
      console.log(core)

      dscore.textContent = "The Score is: " + ptscore + "-" + ctscore;

    });
  });
