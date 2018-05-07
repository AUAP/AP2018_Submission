/*

Contains the function hoverText()

*/

// Hovering text
function hoverText() {
  push();
    // Text code
    textAlign(CENTER);
    textStyle(BOLD);
    fill(textColor);
    textSize(22);
    strokeWeight(3);
    stroke(10);
    // Calling functions
    if (confirmedHover == true && hoverEnable == true) {
        hallwayHover();
        storageHover();
        radiatorHover();
        circuitHover();
    }
  pop();
}
// hoverText ends

/*confirms if the mouse is hovering over an interactive element that triggers
  hovering text when clicked.*/
function isItHovering() {
  if (currentLocation === locations.hallway){
    if (isMouseOver(exitDoorX,exitDoorY,exitDoorW,exitDoorH)
      || isMouseOver(hwRadiatorX,hwRadiatorY,hwRadiatorW,hwRadiatorH)
      || isMouseOver(hwWindowX,hwWindowY,hwWindowW,hwWindowH)
      || isMouseOver(hwBloodX,hwBloodY,hwBloodW,hwBloodH)
      || isMouseOver(hwLight1X,hwLight1Y,hwLight1W,hwLight1H)
      || isMouseOver(hwLight2X,hwLight2Y,hwLight2W,hwLight2H))
    {confirmedHover = true;
    } else {confirmedHover = false;}
  }
  if (currentLocation === locations.storageRoom){
    if (isMouseOver(chestX,chestY,chestW,chestH)
      || isMouseOver(sPL1X,sPL1Y,sPL1W,sPL1H)
      || isMouseOver(sPL2X,sPL2Y,sPL2W,sPL2H)
      || isMouseOver(sPL3X,sPL3Y,sPL3W,sPL3H)
      || isMouseOver(sJunkX,sJunkY,sJunkW,sJunkH)
      || isMouseOver(sTextX,sTextY,sTextW,sTextH)
      || isMouseOver(sLedgeX,sLedgeY,sLedgeW,sLedgeH))
      {confirmedHover = true;
    } else {confirmedHover = false;}
  }
  if (currentLocation === locations.radiatorRoom){
    if (isMouseOver(rLightX,rLightY,rLightW,rLightH)
      || isMouseOver(rTextX,rTextY,rTextW,rTextH)
      || isMouseOver(rRadiatorX,rRadiatorY,rRadiatorW,rRadiatorH)
      || isMouseOver(rPipeX,rPipeY,rPipeW,rPipeH))
    {confirmedHover = true;
    } else {confirmedHover = false;}
  }
  if (currentLocation === locations.circuitRoom){
    if (isMouseOver(cCircuitsX,cCircuitsY,cCircuitsW,cCircuitsH)
      || isMouseOver(cStainX,cStainY,cStainW,cStainH)
      || isMouseOver(cLedgeX,cLedgeY,cLedgeW,cLedgeH))
    {confirmedHover = true;
    } else {confirmedHover = false;}
  }
}
//isItHovering ends

/* controls how long and when to show hoverText.
in "mouseclicks.js", hoverTime is set to 0 when the user clicks an interactive
element related to hovertext */
function hoverTimer() {
  if (confirmedHover == true) {
    if(hoverTime >=0 && hoverTime < 241){ // hoverEnable is true if hoverTime is between 0 and 240
      hoverEnable = true;
      hoverTime += 1; // hoverTime goes up
    }
    if(hoverTime > 240){ // the timer stops after 4 seconds
      hoverEnable = false
    }
  }
    if (confirmedHover == false){ // the timer stops if the player moves the mouse off the element
      hoverEnable = false;
      hoverTime = 240
    }
}
//hoverTimer ends

// Hallway texts
// Radiator
const hwRadiatorX = 540;
const hwRadiatorY = 320;
const hwRadiatorW = 40;
const hwRadiatorH = 100;
// Window
const hwWindowX = 535;
const hwWindowY = 0;
const hwWindowW = 40;
const hwWindowH = 50;
// Blood stain
const hwBloodX = 610;
const hwBloodY = 500;
const hwBloodW = 200;
const hwBloodH = 100;
// Light1
const hwLight1X = 550;
const hwLight1Y = 80;
const hwLight1W = 25;
const hwLight1H = 40;
// Light2
const hwLight2X = 460;
const hwLight2Y = 0;
const hwLight2W = 60;
const hwLight2H = 50;

// Code for hoverText in the hallway
function hallwayHover() {
  if (!exitKeyOwned && !showingKeypad && currentLocation === locations.hallway && isMouseOver(exitDoorX,exitDoorY,exitDoorW,exitDoorH)) {
      text("The exit door\nIt won't open", mouseX, mouseY-40);
  }
  if (!showingKeypad && currentLocation === locations.hallway){
      if (isMouseOver(hwRadiatorX,hwRadiatorY,hwRadiatorW,hwRadiatorH) ) {
        text("An old, broken radiator\nIt's cold to the touch", mouseX, mouseY-40);
      }
      if (isMouseOver(hwWindowX,hwWindowY,hwWindowW,hwWindowH) ) {
        text("That window is too high\nfor me to reach", mouseX, mouseY+40);
      }
      if (isMouseOver(hwBloodX,hwBloodY,hwBloodW,hwBloodH) ) {
        text("Looks like a blood stain\nSeems it's been there a while", mouseX, mouseY-40);
      }
      if (isMouseOver(hwLight1X,hwLight1Y,hwLight1W,hwLight1H) ) {
        text("At least the lights are on", mouseX, mouseY-10);
      }
      if (isMouseOver(hwLight2X,hwLight2Y,hwLight2W,hwLight2H) ) {
        text("At least the lights are on", mouseX, mouseY+40);
      }
  }
}
// hallwayHover ends

// Storage room texts
// Padlock 1, 2, and 3
const sPL1X = 866;
const sPL1Y = 454;
const sPL1W = 25;
const sPL1H = 50;

const sPL2X = 749;
const sPL2Y = 367;
const sPL2W = 15;
const sPL2H = 30;

const sPL3X = 681;
const sPL3Y = 314;
const sPL3W = 10;
const sPL3H = 20;
// Random junk
const sJunkX = 923;
const sJunkY = 319;
const sJunkW = 350;
const sJunkH = 280;
// Graffiti text
const sTextX = 455;
const sTextY = 104;
const sTextW = 220;
const sTextH = 330;
// Ledge text
const sLedgeX = 320;
const sLedgeY = 5;
const sLedgeW = 120;
const sLedgeH = 120;

// Code for hoverText in the storage room
function storageHover() {
    if (!chestKeyOwned && currentLocation === locations.storageRoom && isMouseOver(chestX,chestY,chestW,chestH) ) {
        text("The chest has a large\npadlock on it", mouseX, mouseY-40);
    }
    if (currentLocation === locations.storageRoom) {
        if (isMouseOver(sPL1X,sPL1Y,sPL1W,sPL1H) ) {
          text("These locks are all\ncompletely busted", mouseX, mouseY-40);
        }
        if (isMouseOver(sPL2X,sPL2Y,sPL2W,sPL2H) ) {
          text("These locks are all\ncompletely busted", mouseX, mouseY-40);
        }
        if (isMouseOver(sPL3X,sPL3Y,sPL3W,sPL3H) ) {
          text("These locks are all\ncompletely busted", mouseX, mouseY-40);
        }
        if (isMouseOver(sJunkX,sJunkY,sJunkW,sJunkH) ) {
          text("A bunch of junk\nNot very useful", mouseX, mouseY-40);
        }
        if (isMouseOver(sTextX,sTextY,sTextW,sTextH) ) {
          text("Someone wrote weird letters\nand numbers on the wall", mouseX, mouseY-40);
        }
        if (isMouseOver(sLedgeX,sLedgeY,sLedgeW,sLedgeH) ) {
          text("I can't get a good enough grip\nto climb that", mouseX, mouseY-40);
        }
    }
}
// storageHover ends

// Radiator room texts
// Light text
const rLightX = 845;
const rLightY = 123;
const rLightW = 70;
const rLightH = 100;
// Graffiti text
const rTextX = 143;
const rTextY = 111;
const rTextW = 650;
const rTextH = 222;
// Radiator text
const rRadiatorX = 812;
const rRadiatorY = 396;
const rRadiatorW = 200;
const rRadiatorH = 200;
// Pipe text
const rPipeX = 123;
const rPipeY = 386;
const rPipeW = 680;
const rPipeH = 15;

// Code for hoverText in the radiator room
function radiatorHover() {
    if (currentLocation === locations.radiatorRoom) {
        if (isMouseOver(rLightX,rLightY,rLightW,rLightH) ) {
          text("There are a bunch\nof dead bugs in there", mouseX, mouseY-40);
        }
        if (isMouseOver(rTextX,rTextY,rTextW,rTextH) ) {
          text("The paint seems fresh\nThis was done recently", mouseX, mouseY-40);
        }
        if (isMouseOver(rRadiatorX,rRadiatorY,rRadiatorW,rRadiatorH) ) {
          text("No wonder it's hot in here\nIt's so hot, it burned my hand", mouseX, mouseY-40);
        }
        if (isMouseOver(rPipeX,rPipeY,rPipeW,rPipeH) ) {
          text("If that pipe was any hotter\nit would be steaming", mouseX, mouseY-40);
        }
    }
}
// radiatorHover ends

// Circuit room texts
// Circuits
const cCircuitsX = 342;
const cCircuitsY = 217;
const cCircuitsW = 800;
const cCircuitsH = 300;
// Stain
const cStainX = 0;
const cStainY = 167;
const cStainW = 330;
const cStainH = 300;
// Ledge
const cLedgeX = 271;
const cLedgeY = 0;
const cLedgeW = 600;
const cLedgeH = 170;

// Code for hoverText in the circuit room
function circuitHover() {
    if (currentLocation === locations.circuitRoom) {
        if (isMouseOver(cCircuitsX,cCircuitsY,cCircuitsW,cCircuitsH) ) {
          text("A bunch of circuit breakers\nIf I mess with them, the power might go out", mouseX, mouseY-40);
        }
        if (isMouseOver(cStainX,cStainY,cStainW,cStainH) ) {
          text("Maybe it's just\nold paint", mouseX, mouseY-40);
        }
        if (isMouseOver(cLedgeX,cLedgeY,cLedgeW,cLedgeH) ) {
          text("I can't reach that\nIt's too high", mouseX, mouseY-40);
        }
    }
}
// circuitHover ends
