const gameChoiceOptions = ['Rock', 'Paper', 'Scissors'];


function computerPlay(){
    return gameChoiceOptions[Math.floor(Math.random() * gameChoiceOptions.length)]
}

function playGameRound(cpuSelection, playerSelection = 'invalid choice') {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    console.log("You chose: " + playerSelection);
    console.log("Computer chose: " + cpuSelection);

    if (gameChoiceOptions.includes(playerSelection) == false) {
        return "invalid choice";
    } else if (cpuSelection === playerSelection){
        return "draw";
    } else if (cpuSelection === 'Rock'){
        return playerSelection === 'Paper' ? "player wins" : "cpu wins";
    } else if (cpuSelection === 'Paper'){
        return playerSelection === 'Scissors' ? "player wins" : "cpu wins";
    }else if (cpuSelection === 'Scissors'){
        return playerSelection === 'Rock' ? "player wins" : "cpu wins";
    }

}

function game(){
    var computerChoice;
    var playerChoice;
    var gameResult;
    var roundCount = 1;
    var playerScore = 0;
    var computerScore = 0;

    for (let i = 0; i <= 4; i++){
        console.log("Round " + roundCount)
        computerChoice = computerPlay();
        playerChoice = window.prompt("Enter your choice:");

        gameResult = playGameRound(computerChoice, playerChoice);
        console.log(gameResult);
        if (gameResult === 'player wins') playerScore++
        else if (gameResult === 'draw') {
            computerScore++; 
            playerScore++;
        }    
        else computerScore++;

        roundCount++;
    }  
    
    console.log("Final Score: ");
    console.log("You: " + playerScore);
    console.log("Computer: " + computerScore);
    
}




