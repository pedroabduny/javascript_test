//get player
function playerHand() {
  let playerChoice = prompt(
    "Select 0 for rock, 1 for paper and 2 for scissors"
  );
  return playerChoice;
}

//get cpu
function cpuHand() {
  const hands = ["rock", "paper", "scissors"];
  let cpuChoice = Math.floor(Math.random() * hands.length);
  return cpuChoice;
}

//game rounds
function gameRounds(playerSelection, cpuSelection) {
  if (playerSelection == cpuSelection) {
    return 0;
  } else if (playerSelection == 0 && cpuSelection == 1) {
    return 1;
  } else if (playerSelection == 1 && cpuSelection == 2) {
    return 1;
  } else if (playerSelection == 2 && cpuSelection == 0) {
    return 1;
  } else if (playerSelection == 1 && cpuSelection == 0) {
    return 2;
  } else if (playerSelection == 2 && cpuSelection == 1) {
    return 2;
  } else if (playerSelection == 2 && cpuSelection == 0) {
    return 2;
  }
}

function game() {
  let playerScore = 0;
  let cpuScore = 0;

  for (i = 0; i < 3; i++) {
    let result = gameRounds(playerHand(), cpuHand());
    if (result == 0) {
      console.log("The cpu chose: " + cpuHand() + ", Draw!");
    } else if (result == 1) {
      cpuScore++;
      console.log(
        `You lost this round! Player score: ${playerScore} | CPU score: ${cpuScore}`
      );
    } else if (result == 2) {
      playerScore++;
      console.log(
        `You won this round! Player score: ${playerScore} | CPU score: ${cpuScore}`
      );
    } else if (result == undefined) {
        i == 0;
      console.log("Invalid answer");
    }
  }

  console.log(
    "Final results -- Player: " + playerScore + "" + " CPU: " + cpuScore
  );
  if (playerScore > cpuScore) {
    console.log("You win the game!");
  } else if (playerScore < cpuScore) {
    console.log("You lost the game!");
  } else {
    console.log("Draw game!");
  }
}

game();
