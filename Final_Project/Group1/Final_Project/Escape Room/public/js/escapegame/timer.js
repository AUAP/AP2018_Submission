/*

Contains the code for the timer.

*/

function timerBegins() {
  timerInterval = setInterval(() => { timeLeft -= 1; }, 1000); // timeLeft goes down by 1 each second
}
//timerBegins ends

/** Shows timer when the game starts */
function showTimer() {
  fill(textBG,100);
  rect(canvasX-250,8,200,50);
  fill(textColor);// adding a zero in front of the seconds for numbers with 1 digit
  if (timeLeft % 60 < 10) {
    extraDigit = 0
  } else {extraDigit = "" }

  converted = floor(timeLeft/60) + ":" + extraDigit + (timeLeft % 60);
  text("Time left: " + converted,1050,40); // the timer in upper right corner is created
  if (timeLeft <= 0) { // player loses when the time runs out
    gameOver = true;
  }
}
// showTimer ends

/** how much time did the player use to escape (if they did)*/
function timeUse() {
  timeUsed = timeLimit - timeLeft;
  if (floor(timeUsed/60) == 1) {
    minuteS = "";
  } else {minuteS = "s";
    }
  if (timeUsed % 60 == 1) {
    secondS = "";
  } else {secondS = "s";
    }
  usedMinAndSec = floor(timeUsed/60) + " minute" + minuteS + " and " + (timeUsed % 60) + " second" + secondS;
}
//timeUse ends
