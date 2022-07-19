function computerPlay (){
    let plays = ["rock", "paper", "scissors"]
    return plays[Math.floor(Math.random()*3)]
}

function playGame(playerSelection, computerSelection){
    const play = document.getElementById('play')
    play.style.visibility = 'visible';
    play.textContent = "The computer played "+ computerSelection+ " and you have played "+playerSelection+"!"
    const result = document.getElementById('result')
    result.style.visibility = 'visible';
    if(playerSelection.localeCompare(computerSelection) == 0){
        result.textContent = "You have tied!"
        return 0
    }
    else if (playerSelection.localeCompare("rock") == 0){
        if(computerSelection.localeCompare("scissors") == 0){
            result.textContent = "You win!";
            return 1
        }
        else if(computerSelection.localeCompare("paper") == 0){
            result.textContent = "You lose!";
            return -1
        }
    }
    else{
        if(playerSelection.localeCompare("scissors") == 0 && computerSelection.localeCompare("rock")==0){
            result.textContent = "You lose!";
            return -1
        }
        else if(playerSelection.length>computerSelection.length){
            result.textContent = "You win!";
            return 1
        }
        else if(playerSelection.length<computerSelection.length){
            result.textContent = "You lose!"
            return -1
        }
    }

}
function rockWasClcicked(){
    playGame('rock',computerPlay());
}
function paperWasClcicked(){
    playGame('paper',computerPlay());
}
function scissorsWasClcicked(){
    playGame('scissors',computerPlay());
}

let rock = document.querySelector(" .rock");
rock.addEventListener('click', rockWasClcicked )

let paper = document.querySelector(" .paper");
paper.addEventListener('click', paperWasClcicked )

let scissors = document.querySelector(" .scissors");
scissors.addEventListener('click', scissorsWasClcicked )
/*function game(){
    let score = 0
    for(let i =0; i<5; i++){
    let input = prompt("Enter rock paper or scissors")
    score += playGame(input.toLowerCase(),computerPlay())
}
if(score == 0){console.log("You have tied!")}
else if(score >0){console.log("You have won!")}
else{console.log("You have lost!")}

}

let playAgain = true

game()*/




