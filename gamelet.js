/*

Gamelet: a starting point for writing games
Author: Chris Minnick
Version: 1.0

Instructions:
Inlcude gamelet.js in an HTML document containing
an element with an id of 'ball'.
The script will detect when the left or right
arrow key is pressed and will move the ball element
accordingly.

*/
const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let xPosition = 0;
let yPosition = 0;

/*
handleKJeyPress
responds to certain key presses by updating position.
*/
function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    xPosition = xPosition - 20;
  }
  if (e.code === "ArrowRight") {
    xPosition = xPosition + 20;
  }
  if (e.code === "ArrowUp") {
    yPosition = yPosition - 20;
  }
  if (e.code === "ArrowDown") {
    yPosition = yPosition + 20;
  }
  if (xPosition < 0) {
    xPosition = 0;
  }
  if (yPosition < 0) {
    yPosition = 0;
  }
  refresh();
}

/*
refresh
changes the position of the ball
*/
function refresh() {
  ball.style.left = xPosition + "px";
  ball.style.top = yPosition + "px";
}
