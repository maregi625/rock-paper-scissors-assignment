
const computerIcon = document.getElementById("computericon");
const playerIcon = document.getElementById("playericon");
const resultDisplay = document.getElementById("resultDisplay");


const playerScore= document.getElementById("playerScore");
const computerScore= document.getElementById("computerScore");

let playerScoreValue = 0;
let computerScoreValue = 0;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("rockbtn").addEventListener("click", () => game("Rock"));
document.getElementById("paperbtn").addEventListener("click", () => game("Paper"));
document.getElementById("scissorsbtn").addEventListener("click", () => game("Scissors"));
});


const choices = ["Rock", "Paper", "Scissors"];
const icons = {
  Rock: "✊",
  Paper: "✋",
  Scissors: "✌"
};


function game(playerChoice) {

  const computerChoice = choices[Math.floor(Math.random() * 3)];


  let result="";

  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  }else{
    switch(playerChoice){
      case "Rock":
        if(computerChoice === "Scissors"){
          result = "Player wins!";
          playerScoreValue++;
          playerScore.innerText = playerScoreValue;
        }
        else{
          result = "Computer wins!";
          computerScoreValue++;
          computerScore.innerText = computerScoreValue;
        }
        break;

      case "Paper":
        if(computerChoice === "Rock"){
          result = "Player wins!";
          playerScoreValue++;
          playerScore.innerText = playerScoreValue;

        }
        else{
          result = "Computer wins!";
          computerScoreValue++;
          computerScore.innerText = computerScoreValue;

        }
        break;

      case "Scissors":
        if(computerChoice === "Paper"){
          result = "Player wins!";
          playerScoreValue++;
          playerScore.innerText = playerScoreValue;
        }
        else{
          result = "Computer wins!";
          computerScoreValue++;
          computerScore.innerText = computerScoreValue;
        }
        break;
    }
  }

  resultDisplay.textContent = result;
  playerIcon.textContent = icons[playerChoice];
  computerIcon.textContent = icons[computerChoice];

}
