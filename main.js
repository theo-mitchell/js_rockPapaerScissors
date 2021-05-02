const gameChoiceOptions = ['Rock', 'Paper', 'Scissors'];
const playerChoicesBtns = document.querySelectorAll('.playerChoice');
playerChoicesBtns.forEach(btn => btn.addEventListener('click',playGameRound));
const scoreBoard = document.querySelector('#gameResults');

var gameResult;
var roundCount = 1;
// var playerScore = 0;
// var computerScore = 0;

function playGameRound() {
    var cpuSelection = gameChoiceOptions[Math.floor(Math.random() * gameChoiceOptions.length)];
    playerSelection = this.value;

    if (gameChoiceOptions.includes(playerSelection) == false) {
        gameResult = "invalid choice";
    } else if (cpuSelection === playerSelection){
        gameResult = "Draw";
    } else if (cpuSelection === 'Rock'){
        gameResult = playerSelection === 'Paper' ? "You win" : "Computer wins";
    } else if (cpuSelection === 'Paper'){
        gameResult =  playerSelection === 'Scissors' ? "You win" : "Computer wins";
    }else if (cpuSelection === 'Scissors'){
        gameResult = playerSelection === 'Rock' ? "You win" : "Computer wins";
    }

    console.log("Round " + roundCount)
    console.log("You chose: " + playerSelection);
    console.log("Computer chose: " + cpuSelection);
    console.log(gameResult);

    /*
        * Snippet below can be used to orchestrate actions based on round count
        * Since it is trivial, I am going to skip it for this project.
    */
    // if (gameResult === 'You Win') playerScore++
    // else if (gameResult === 'Draw') {
    //     computerScore++; 
    //     playerScore++;
    // }    
    // else computerScore++;

    roundCount++;
    var html = `
    <h3>Round: ${roundCount}</h3>
    <h3>You Chose: ${playerSelection}</h3>
    <h3>Computer Chose: ${cpuSelection}</h3>
    <h3>${gameResult}!</h3>
    `;

    scoreBoard.innerHTML = html; 
}



