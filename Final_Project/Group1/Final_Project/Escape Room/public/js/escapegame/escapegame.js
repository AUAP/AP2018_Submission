//ESCAPE ROOM
//By Alexander Svanholm, Anne Gregersen & Frederik Ditlev

/*

Contains the functions setup(), enterNumber(), isMouseOver(), showMouseCoords(), and draw()

*/

/** Sets up canvas */
function setup() {
  let canvas = createCanvas(canvasX, canvasY);
  canvas.parent("sketch-holder");
  background(backgroundColor);
  frameRate(60);

  // Dripping sound loops
  dripMusic.loop();
  // Dripping sound volume
  dripMusic.amp(0.04,0.04);
  
}
//setup ends


/** Enters number in keypad */
function enterNumber(newNumber) {
  if (numberEntered.length >= keypadNumbersLimit) {
    return;
  }
  numberEntered += newNumber.toString();
}
//enterNumber ends

/** Checks if the mouse is over given coordinates */
function isMouseOver(x,y,w,h){
  if (mouseX > x && mouseX < x+w && mouseY > y && mouseY < y+h) {
    return true;
  }else{
    return false;
  };
}
//isMouseOver ends

/** Draw loop */
function draw() {
  endTextWin = "You got away in: " + usedMinAndSec + "\n" + " with a total of: " + clickCount + " clicks used!";
  endTextGameOver = "Game over";

  if(!started && !win && !gameOver && !howToPlayOpen && !aboutOpen){
    startScreen(); // located in screens.js
  }else if (howToPlayOpen) {
    showHowToPlay(); // located in screens.js
  }else if (aboutOpen == true) {
    showAbout(); // located in screens.js
  }else if (win) {
    endScreen(endTextWin); // located in screens.js
  }else if (gameOver) {
    endScreen(endTextGameOver); // located in screens.js
  }else {
    mainGame(); // located in maingame.js
    showTimer(); // located in timer.js
    timeUse(); // located in timer.js
    isItHovering(); // loacated in hovertext.js
    hoverTimer(); // located in hovertext.js
    hoverText(); // located in hoverText.js


  };

  if(started && !win && !gameOver) {
    textAlign(LEFT);
    fill(textBG,100);
    rect(30,8,200,50);
    fill(textColor);
    text(clickCount + " Clicks made",40,40);
  }

  // Remove the debugger?
  // showMouseCoords(); // links to line 86

}
//draw ends

/** Debug function to log mouse position */
function showMouseCoords() {
  console.log("MouseX: ", mouseX, " MouseY: ", mouseY);
}
//showMouseCoords ends
