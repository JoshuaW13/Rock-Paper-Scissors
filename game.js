function computerPlay (){
    let plays = ["rock", "paper", "scissors"]
    return plays[Math.floor(Math.random()*3)]
}

function playGame(playerSelection, computerSelection){
    console.log("The computer played "+ computerSelection+ " and you have played "+playerSelection)
    if(playerSelection.localeCompare(computerSelection) == 0){
        console.log("You have tied!")
        return 0
    }
    else if (playerSelection.localeCompare("rock") == 0){
        if(computerSelection.localeCompare("scissors") == 0){
            console.log("You win!")
            return 1
        }
        else if(computerSelection.localeCompare("paper") == 0){
            console.log("You lose!")
            return -1
        }
    }
    else{
        if(playerSelection.localeCompare("scissors") == 0 && computerSelection.localeCompare("rock")==0){
            console.log("You lose!")
            return -1
        }
        else if(playerSelection.length>computerSelection.length){
            console.log("You win!")
            return 1
        }
        else if(playerSelection.length<computerSelection.length){
            console.log("You lose!")
            return -1
        }
    }

}
function game(){
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

game()




