/*

Contains the functions startScreen(), endScreen(), and showHowToPlay()

*/


/** Shows button to start the game */
function startScreen(){
  image(imgStartScreen, 0, 0, canvasX, canvasY);
  mouseOverStart = isMouseOver(startX,startY,startW,startH);
  mouseOverHowtoPlay = isMouseOver(htpX,htpY,htpW,htpH);
  fill(textBG,150);
  if (mouseOverStart) {
    fill(hovered,200);
  }
  rect(startX,startY,startW,startH);
  fill(textColor);
  strokeWeight(1);
  stroke(0);
  textSize(26);
  text("Start Game", startTX, startTY);
  // How to play
  fill(textBG,150);
  if (mouseOverHowtoPlay) {
    fill(hovered,200);
  }
  rect(htpX,htpY,htpW,htpH);
  fill(textColor);
  textSize(26);
  text("How to play", htpTX, htpTY);
}
//starScreen ends

/** How to play screen */
function showHowToPlay() {
  fill(menuBG);
  rect(0,0,canvasX,canvasY);
  image(imgHowToPlay, 0, 0, canvasX, canvasY);
  fill(textColor);

  const howToPlayText = "Hello, Winnie. Is it me you're looking for?";
  //text(howToPlayText, 350, canvasY/2);


  // Exit from how to play
  fill(textBG,170);
  if (isMouseOver(htpOX,htpOY,htpOW,htpOH)) {
    fill(hovered,220);
  }
  rect(htpOX,htpOY,htpOW,htpOH);
  fill(textColor);
  text("X", canvasX-50, 50);
}
//showHowToPlay ends

function showAbout() {
  image(imgAbout, 0, 0, canvasX, canvasY);
  push();
    fill(textBG,150);
    mouseOverContinue = isMouseOver(contnueX,contnueY,contnueW,contnueH)
    if (mouseOverContinue){
      fill(hovered,200);
    }
    rect(contnueX,contnueY,contnueW,contnueH);
    fill(textColor);
    strokeWeight(2);
    stroke(0);
    textSize(30);
    text("Continue", 580, 670);
  pop();
}
//showAbout ends

/** Shows endScreenText */
function endScreen(endScreenText){
  fill(menuBG);
  rect(0,0,1280,720);
  if(win) {
    image(imgWin, 0, 0, canvasX, canvasY);
} else if (gameOver) {
    image(imgGameOver, 0, 0, canvasX, canvasY);
  }
  // Text
  fill(textBG);

  fill(textColor);
  textSize(26);
  if (endScreenText === "Game over") {
    push();
      fill(50,150)
      rect(0,0,canvasX,canvasY);
      fill(textBG,150);
      rect(545,290,200,80);
    pop();
    push();
      textStyle(BOLD);
      textAlign(CENTER);
      strokeWeight(2)
      stroke(0);
      textSize(30)
      text(endScreenText, canvasX/2, 340);
    pop();

  }else {
    push();
      fill(textBG,150);
      rect(365,240,554,110);
    pop();
    push();
      textStyle(BOLD);
      textAlign(CENTER);
      strokeWeight(2)
      stroke(0);
      fill(endSpecialTextColor);
      text(endScreenText, 640, 290);
    pop();

  }
  // Main menu button
  push();
    fill(textBG,150);
    if (isMouseOver(mainMenuX+5,mainMenuY+68,mainMenuW,mainMenuH)) {
      fill(hovered,200);
    }
    rect(mainMenuX+5,mainMenuY+68,mainMenuW,mainMenuH);
    strokeWeight(2);
    stroke(0);
    if(gameOver){
      fill(textColor);
    } else if (win) {
      fill(endSpecialTextColor);
    } else {fill(textColor);
      }
    textSize(34);
    text("Main menu", 563, 508);
  pop();
  // Music stops
  dripMusic.stop();
  basementMusic.stop();
}
//endScreen ends
