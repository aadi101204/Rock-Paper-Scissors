var pcChoice = null;
var choice = null;
var options = ["Rock", "Paper", "Scissors"];
var images = [
  "./Assets/rock.png",
  "./Assets/paper.jpg",
  "./Assets/scissors.jpg",
];
var userInput = null;

function computerChoice() {
  pcChoice = Math.floor(Math.random() * options.length);
  choice = options[pcChoice];
  var image = document.getElementsByClassName("photo")[0];
  image.src = images[pcChoice];
  var x = document.getElementsByClassName("AIselect");
  x[0].innerHTML = choice;
  generateResult();
}

function option(selectedOption) {
  userInput = selectedOption;
  console.log("User selected:", userInput);
  computerChoice();
}

function generateResult() {
  var y = document.getElementsByClassName("Result");
  console.log("Computer selected:", choice);

  if (choice == userInput) {
    y[0].innerHTML = "Draw";
  } else if (userInput == "Rock" && choice == "Scissors") {
    y[0].innerHTML = "You Win!";
  } else if (userInput == "Paper" && choice == "Rock") {
    y[0].innerHTML = "You Win!";
  } else if (userInput == "Scissors" && choice == "Paper") {
    y[0].innerHTML = "You Win!";
  } else {
    y[0].innerHTML = "You Lose!";
  }
  return;
}
