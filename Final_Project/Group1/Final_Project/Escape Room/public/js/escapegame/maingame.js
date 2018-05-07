/*

Contains the function mainGame()

*/

/** Main game logic. Looped in draw() function while playing */
function mainGame() {
  fill(999); // White
  locationManager();
  inventory();
  bottomHoverText();
}
//mainGame ends

function locationManager() {
  // Show matching image based on currentLocation
  if (currentLocation === locations.hallway) {
    image(imgHallway, 0, 0, canvasX, canvasY);
    mouseOverCircuitDoor = isMouseOver(circuitDoorX,circuitDoorY,circuitDoorW,circuitDoorH);
    mouseOverRadiatoradiatorDoor = isMouseOver(radiatorDoorX,radiatorDoorY,radiatorDoorW,radiatorDoorH);
    mouseOverStoragexitDoor = isMouseOver(storagexitDoorX,storagexitDoorY,storagexitDoorW,storagexitDoorH);
    mouseOverExitDoor = isMouseOver(exitDoorX,exitDoorY,exitDoorW,exitDoorH);

    if (showingKeypad) {
      push();
        fill(menuBG);
        rect(keypadScreenX,keypadScreenY,keypadScreenW,keypadScreenH);
        image(imgKeypad, 550, 250, imgKeypad.width, imgKeypad.height);
        if(numberEntered == "WRONG CODE") {
          fill(textColor);
        } else {fill(999);
          }
          text(numberEntered, keypadScreenX + 20, keypadScreenY + 50);
      pop();
    }
  }else if (currentLocation === locations.circuitRoom) {
    image(imgCircuitRoom, 0, 0, canvasX, canvasY);
    if (!chestKeyOwned) {
      image(imgChestKey, 330, 520, imgChestKey.width/5.5, imgChestKey.height/5.5);
      // fill(999);
      // rect(chestKeyX,chestKeyY,chestKeyW,chestKeyH);
    }
  }else if (currentLocation === locations.storageRoom) {
    image(imgStorageRoom, 0, 0, canvasX, canvasY);

  if (!exitKeyOwned) {
    image(imgChest, 480, 420, imgChest.width/2, imgChest.height/2);
  }
  // rect(chestX,chestY,chestW,chestH);
  }else if (currentLocation === locations.radiatorRoom) {
    image(imgRadiatorRoom, 0, 0, canvasX, canvasY);
  }
}
// locationManager ends

function inventory() {
  // Inventory
  fill(backgroundColor,200);
  rect(inventoryX,inventoryY,inventoryW,inventoryH);
  fill(menuBG,150);
  // Item slots
  rect(itemSlot1X,itemSlot1Y,itemSlot1W,itemSlot1H);
  if (chestKeyOwned) {
    image(imgChestKey, itemSlot1X + 10, itemSlot1Y + 10, imgChestKey.width/5, imgChestKey.height/5);
  }
  rect(itemSlot2X,itemSlot2Y,itemSlot2W,itemSlot2H);
  if (exitKeyOwned) {
    image(imgKeycard, itemSlot2X + 10, itemSlot2Y + 10, imgKeycard.width/3, imgKeycard.height/3);
  }
  if (isMouseOver(returnButtonX,returnButtonY,returnButtonW,returnButtonH)) {
    mouseOverReturn = true;
    fill(hovered,150);
  }else {
    mouseOverReturn = false;
  }
  rect(returnButtonX,returnButtonY,returnButtonW,returnButtonH);
  image(imgReturnArrow, returnButtonX, returnButtonY, imgReturnArrow.width/5.5, imgReturnArrow.height/5.5);
}
// inventory ends

function bottomHoverText() {
  push();
    fill(textColor);
    textSize(30);
    textAlign(CENTER);
    strokeWeight(3);
    stroke(10);
    if (mouseOverReturn && currentLocation != locations.hallway) {
      text(labelHallway, infoX, infoY);

    }
    if (!showingKeypad && currentLocation === locations.hallway) {
      if (mouseOverExitDoor) {
        text(labelExitDoor, infoX, infoY);
      }
      if (mouseOverStoragexitDoor) {
        text(labelStorageRoom, infoX, infoY);
      }
      if (mouseOverRadiatoradiatorDoor) {
        text(labelRadiatorRoom, infoX, infoY);
      }
      if (mouseOverCircuitDoor) {
        text(labelCircuitRoom, infoX, infoY);
      }
    }
  pop();
}
// bottomHoverText ends
