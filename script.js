document.addEventListener("click", function (e) {
  const computerChoices = ["rock", "paper", "scissor"];
  //choosing random index from the array as computer choice
  let randomIndex = Math.floor(Math.random() * 3);
  //random choice as computer choice
  let computerSelection = computerChoices[randomIndex];
  //get clicked button on the web
  let button = e.target.innerText.toLowerCase();

  playRound(button, computerSelection);
});

function playRound(playerSelection, computerSelection) {
  let roundWinner;
  if (playerSelection === "rock" && computerSelection === "scissor") {
    roundWinner = "user";
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    roundWinner = "user";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    roundWinner = "user";
  } else if (playerSelection === computerSelection) {
    roundWinner = "draw";
  } else {
    roundWinner = "computer";
  }
  displayRoundWinner(playerSelection, computerSelection, roundWinner);
}

function displayRoundWinner(playerSelection, computerSelection, roundWinner) {
  // updating computer choice in the DOM
  let computerOutput = document.getElementById("computerOuput");
  computerOutput.textContent = "Computer Choice: ";
  computerOutput.appendChild(
    document.createTextNode(" " + computerSelection.toUpperCase())
  );

  //updating user choice in the DOM
  let userOutput = document.getElementById("userOutput");
  userOutput.textContent = "User Choice: ";
  userOutput.appendChild(
    document.createTextNode(" " + playerSelection.toUpperCase())
  );

  //displaying winner
  let winner = document.getElementById("winner");
  winner.textContent = " ";
  if (roundWinner === "draw") {
    winner.appendChild(
      document.createTextNode(`${roundWinner.toUpperCase()}!`)
    );
  } else {
    winner.appendChild(
      document.createTextNode(`${roundWinner.toUpperCase()} WINS!`)
    );
  }
}
