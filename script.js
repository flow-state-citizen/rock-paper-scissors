let humanScore = 0;
let computerScore = 0;

function computerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
};

function humanChoice() {
    let choice = prompt().toLowerCase();
    return choice;
};

function playRound (computerChoice, humanChoice) {
    if (computerChoice === "rock" && humanChoice === "paper") {
      console.log("You won the round!")
      return "human";
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
      console.log("You lost the round!");
      return "computer";
    } else if (computerChoice === "paper" && humanChoice === "rock") {
      console.log("You lost the round!");
      return "computer";
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
      console.log("You won the round!");
      return "human";
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
      console.log("You won the round!");
      return "human";
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
      console.log("The computer won the round!");
      return "computer";
    } else {
      console.log("It was a tie!");
      return "none";
    }
  }

function playGame() {
    for (let round = 0; round < 5; round ++) {
      console.log("Round " + (round + 1));

      let compChoice = computerChoice();
      let humChoice = humanChoice();
      let roundWinner = playRound(compChoice, humChoice);

        if (roundWinner === "computer") {
          computerScore++;
        }
          else if (roundWinner === "human") {
            humanScore++;
          } else if (roundWinner === "none") {
            computerScore + 0;
            humanScore + 0;
          }
        console.log("The current score is:")
        console.log("Human: " + humanScore);
        console.log("Computer: " + computerScore);
    }

    if (computerScore > humanScore) {
      return "Sorry! The computer wins.";
    } 
      else if (computerScore < humanScore) {
        return "You win!";
      }
}

playGame();