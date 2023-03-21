const defaultArray = ["rock", "paper", "scissor"];
let computerScore = 0;
let playerScore = 0;

function randomNumberGeneration() {
  return Math.floor(Math.random() * 3);
}

$(".icon-container").on("click", function () {
  let playerSelection = $(this).attr("id");
  let computerSelection = defaultArray[randomNumberGeneration()];
  $("#resultTitle").removeClass();
  switch (playerSelection) {
    case "rock":
      if (computerSelection == "rock") {
        draw();
      } else if (computerSelection == "paper") {
        lose();
      } else {
        win();
      }
      break;

    case "paper":
      if (computerSelection == "rock") {
        win();
      } else if (computerSelection == "paper") {
        draw();
      } else {
        lose();
      }
      break;

    case "scissor":
      if (computerSelection == "rock") {
        lose();
      } else if (computerSelection == "paper") {
        win();
      } else {
        draw();
      }
      break;
  }
  $("#playerChoice").text(playerSelection);
  $("#computerChoice").text(computerSelection);
  $("#playerScore").text(playerScore);
  $("#computerScore").text(computerScore);
  $("#result-container").css("display", "block");
});

function win() {
  $("#resultTitle").text("YOU WIN");
  $("#resultTitle").addClass("win");
  playerScore++;
}

function lose() {
  $("#resultTitle").text("YOU LOSE");
  $("#resultTitle").addClass("lose");
  computerScore++;
}

function draw() {
  $("#resultTitle").text("Draw");
  $("#resultTitle").addClass("draw");
}
