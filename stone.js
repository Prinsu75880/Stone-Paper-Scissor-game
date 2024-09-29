let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userSco = document.querySelector("#user-score");
let compSco = document.querySelector("#comp-score")


const genCompChoice = () => {
    let index = ["rock", "paper", "scissor"];
    let indexVal = Math.floor([Math.random() * 3])
    return index[indexVal]
}
 
const drawGame = () => {
   msg.innerText = "Game was draw.";
    msg.style.backgroundColor = "#0f0f0f";
}

const checkWinner = (userChoice) => {

//   gencompchoice

let compChoice = genCompChoice();


// Gamedraw

if(userChoice === compChoice) {
    drawGame();
} else {

    let userWin = true;
    if(userChoice === "rock"){
        //paper, scissor
        userWin = compChoice === "paper"? false: true;
    } else if (userChoice === "paper"){
        //scissor, rock
        userWin = compChoice === "scissor"? false: true;
    } else{
        //paper, rock
        userWin = compChoice === "rock"? false: true;

        
    }
    showWinner(userWin, userChoice, compChoice);

 }
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userSco.innerText = userScore;
       msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
       msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compSco.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
       checkWinner(userChoice);
    });
});
