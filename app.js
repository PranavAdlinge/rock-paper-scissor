let userScore = 0;
let computerScore = 0;

let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");

const userChoice = document.getElementById("action-message");
const computerMessage = document.getElementById("computer-message");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

let computerChoice = document.getElementById("computerChoice");


function getComputerChoice(){
    const choices = ["rock","paper","scissor"];
    const choice = choices[Math.floor(Math.random()*3)];
    computerChoice.src = choice + ".jpg";
    computerMessage.innerHTML = "Computer chose " + choice;
    return choice;
}

function win(){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = "<center>You win</center>";
}

function lose(){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = "<center>You lose</center>";
}

function draw(){
    result_div.innerHTML = "<center>Its a draw</center>";

}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win();
            break;
        case "scissorrock":
        case "rockpaper":
        case "paperscissor":
            lose();
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            draw();
            break;
    }

}


function main(){
rock_div.addEventListener('click', function(){
    game("rock");
    userChoice.innerHTML = "You chose rock";
})

paper_div.addEventListener('click', function(){
    game("paper");
    userChoice.innerHTML = "You chose paper";
})

scissor_div.addEventListener('click', function(){
    game("scissor");
    userChoice.innerHTML = "You chose scissor";
})
}

main();