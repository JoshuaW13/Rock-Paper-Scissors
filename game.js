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

function changePic(){
    let classes = this.classList;
    if(classes.contains('rock')){
        this.src = "images/Rockgif.gif";        
    }
    if(classes.contains('paper')){
        this.src = "images/papaergif.gif"; 
    }
    if(classes.contains('scissors')){
        this.src = "images/scissorsgif.gif";
    }
}

function changePicBack(){
    let classes = this.classList;
    if(classes.contains('rock')){
        this.src = "images/rockStill.png";        
    }
    if(classes.contains('paper')){
        this.src = "images/paperstill.png"; 
    }
    if(classes.contains('scissors')){
        this.src = "images/scissorsstill.png";
    }
}

function determinePlay(e){
    let classes = this.classList
    if(classes.contains('rock')){rockWasClcicked()}
    if(classes.contains('paper')){paperWasClcicked()}
    if(classes.contains('scissors')){scissorsWasClcicked()}
    let message = document.getElementById('playAgain');
    message.style.visibility = 'visible'
    let weapons = document.querySelectorAll('.buttonContainer');
    weapons.forEach(weapon => weapon.removeEventListener('click', determinePlay))
    arms.forEach(arm=>arm.removeEventListener('mouseover',changePic));
    arms.forEach(arm=>arm.removeEventListener('mouseout',changePicBack));
    arms.forEach(function(arm){
        let classes = arm.classList;
        if(classes.contains('rock')){
            arm.src = "images/rockStill.png";        
        }
        if(classes.contains('paper')){
            arm.src = "images/paperstill.png"; 
        }
        if(classes.contains('scissors')){
            arm.src = "images/scissorsstill.png";
        }

    });
}

let weapons = document.querySelectorAll('.buttonContainer');

let arms = document.querySelectorAll('.weapon');

arms.forEach(arm => arm.addEventListener('mouseover',changePic));

arms.forEach(arm => arm.addEventListener('mouseout',changePicBack));

weapons.forEach(weapon => weapon.addEventListener('click',determinePlay, {once: true})
);


/*let rock = document.querySelector(" .rock");
rock.addEventListener('click', rockWasClcicked, {once: true} )

let paper = document.querySelector(" .paper");
paper.addEventListener('click', paperWasClcicked, {once: true})

let scissors = document.querySelector(" .scissors");
scissors.addEventListener('click', scissorsWasClcicked, {once: true} )
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




