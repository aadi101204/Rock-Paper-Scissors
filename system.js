var pcChoice = null;
var choice = null;
var options = ["Rock", "Paper", "Scissors"];
images = [
  '"./Assets/rock.png"',
  '"./Assets/paper.jpg"',
  '"./Assets/scissors.jpg"',
];
var userInput = null;

function computerChoice() {
  pcChoice = Math.floor(Math.random() * options.length);
  choice = options[pcChoice];
  img = document.getElementsByClassName("AIselectImage");
  img.src = images[pcChoice];
  x = document.getElementsByClassName("AIselect");
  x[0].innerHTML = choice;
  generateResult();
}

function option(SelectedOption) {
  userInput = SelectedOption;
  computerChoice();
}

/*function generateResult() {
  y = document.getElementsByClassName("result");
  if (choice == userInput) {
    y[0].innerHTML = "draw";
    return;
  } else if (
    (userInput == "rock" && choice == "scissors") ||
    (userInput == "paper" && choice == "rock") ||
    (userInput == "scissors" && choice == "paper")
  ) {
    y[0].innerHTML = "you Win";
    return;
  } else {
    y[0].innerHTML = "you lose!";
    return;
  }
}
*/