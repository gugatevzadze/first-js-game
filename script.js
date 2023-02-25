"use strict";

//variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//functions
const messageDisplay = function (message) {
  document.querySelector(".message").textContent = message;
};
//game logic
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //if theres no input
  if (!guess) {
    messageDisplay("No Number !");

    //winning condition
  } else if (guess === secretNumber) {
    messageDisplay("Correct Number !");
    document.querySelector(".number").textContent = secretNumber;
    //styling the winning condition
    document.querySelector("body").style.backgroundColor = "#73B504";
    //cheking the highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //if the answer is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      messageDisplay(guess > secretNumber ? "Too High !" : "Too Low !");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      messageDisplay("You Lost the Game ! :(");
      document.querySelector(".score").textContent = 0;
    }
  }
  /*
  } else if (guess > secretNumber) {
    if (score > 1) {
      messageDisplay("Too High !");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      messageDisplay("You Lost The Game :(");
      document.querySelector(".score").textContent = 0;
    }
    //if the answer is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      messageDisplay("Too Low !");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      messageDisplay("You Lost The Game :(");
      document.querySelector(".score").textContent = 0;
    }
  }
  */
});

//again button funtionality
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  messageDisplay("Start Guessing !");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#1a2022";
});
