let playerScore = 0;
let computerScore = 0;
let systemMsg = "";
let scoreMsg = "";
let userChoice = "";
let pcChoice = "";
// document.getElementById("rock").addEventListener("click", () => {
//   userChoice = "rock";
//   console.log(userChoice);
// });
// checkedRock = document.getElementById("paper").addEventListener("click", () => {
//   userChoice = "paper";
// });
// checkedRock = document
//   .getElementById("scissors")
//   .addEventListener("click", () => {
//     userChoice = "scissors";
//   });

function getComputerChoice() {
  let chosenValue = "";
  const chosen = Math.floor(Math.random() * 4);
  if (chosen == 1) {
    chosenValue = "rock";
  } else if (chosen == 2) {
    chosenValue = "paper";
  } else {
    chosenValue = "scissors";
  }
  return chosenValue;
}
function rockChosen() {
  userChoice = "rock";
  document.getElementById(
    "user-display"
  ).innerHTML = `User Selects: ${userChoice}`;
  document.getElementById("status").innerHTML = "Click 'play' to continue";
}
function paperChosen() {
  userChoice = "paper";
  document.getElementById(
    "user-display"
  ).innerHTML = `User Selects: ${userChoice}`;
  document.getElementById("status").innerHTML = "Click 'play' to continue";
}
function scissorsChosen() {
  userChoice = "scissors";
  document.getElementById(
    "user-display"
  ).innerHTML = `User Selects: ${userChoice}`;
  document.getElementById("status").innerHTML = "Click 'play' to continue";
}

function play() {
  if (userChoice.length == 0) {
    document.getElementById("status").innerHTML = "Please select your choice";
  } else {
    pcChoice = getComputerChoice();
    if (
      (userChoice == "rock" && pcChoice == "scissors") ||
      (userChoice == "scissors" && pcChoice == "paper") ||
      (userChoice == "paper" && pcChoice == "rock")
    ) {
      systemMsg = "Player Wins!";
      playerScore++;
      scoreMsg = `Score: Player:${playerScore}   Computer:${computerScore}`;
    } else if (
      (userChoice == "rock" && pcChoice == "paper") ||
      (userChoice == "paper" && pcChoice == "scissors") ||
      (userChoice == "scissors" && pcChoice == "rock")
    ) {
      computerScore++;
      systemMsg = "Computer Wins!";
      scoreMsg = `Score: Player:${playerScore}   Computer:${computerScore}`;
    } else {
      systemMsg = "its a tie!";
      scoreMsg = `Score: Player:${playerScore}   Computer:${computerScore}`;
    }
    console.log("USer: " + userChoice);
    console.log("pc: " + pcChoice);
    document.getElementById("status").innerHTML = systemMsg;
    document.getElementById("score").innerHTML = scoreMsg;

    if (playerScore == 5 || computerScore == 5) {
      let winner = "";
      if (playerScore == 5) {
        winner = "Player";
      } else {
        winner = "Computer";
      }

      if (
        confirm(
          `Final Score:
                           Player: ${playerScore} Computer Score:${computerScore}
                                        ${winner} Wins! 

                                        Play again?`
        )
      ) {
        playerScore = 0;
        computerScore = 0;
        systemMsg = "Lets go again !";
        scoreMsg = `Score: Player:${playerScore}   Computer:${computerScore}`;
        document.getElementById("status").innerHTML = systemMsg;
        document.getElementById("score").innerHTML = scoreMsg;
      } else {
        document.getElementById("main-container").style.display = "none";
        document.getElementById("end-game").innerHTML = "GAME ENDED";
      }
    }
  }
}
