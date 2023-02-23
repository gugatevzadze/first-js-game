"use strict";

//variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//functions

//game logic
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //if theres no input
  if (!guess) {
    document.querySelector(".message").textContent = "No Number !";

    //winning condition
  } else if (guess == secretNumber) {
    document.querySelector(".message").textContent = "Correct Number !";
    document.querySelector(".number").textContent = secretNumber;
    //styling the winning condition
    document.querySelector("body").style.backgroundColor = "#73B504";
    //cheking the highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //if the answer is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High !";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost The Game :(";
      document.querySelector(".score").textContent = 0;
    }
    //if the answer is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low !";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost The Game :(";
      document.querySelector(".score").textContent = 0;
    }
  }
});

//again button funtionality
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start Guessing !";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#1a2022";
});
