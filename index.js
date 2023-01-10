let userScore = 0;
let pcScore = 0;
let systemMsg = "";
let userChoice = "";
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
  const chosen = Math.floor(Math.random() * 4);
  let chosenValue = "";
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
}
function paperChosen() {
  userChoice = "paper";
}
function scissorsChosen() {
  userChoice = "scissors";
}
