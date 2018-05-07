/*

Contains all controls for when the mouse is clicked

*/

/** Handle mouse clicks */
function mouseClicked() {
  if (confirmedHover == true){
    hoverTime = 0; // the hoverTimer in "hovertext.js" resets
  }
  if (aboutOpen == true && mouseOverContinue){ // is the mouse over the "continue" button in the "about screen"?
    started = true;
    timerBegins(); // located in timer.js
    // Dripping sound is lowered
    dripMusic.amp(0.02,0.02);
    // Basement music loops
    basementMusic.loop();
    // Basement music volume
    basementMusic.amp(0.1,0.1);
    aboutOpen = false;
    return;
  }
  console.log(mouseX,mouseY); // used to log coordinates of the mouse
  if (!started && mouseOverStart) {
    if(!aboutOpen){
      aboutOpen = true;
      return;
    }
  }
  if (!started && !howToPlayOpen && !aboutOpen && mouseOverHowtoPlay) {
    howToPlayOpen = true;
    return;
  }
  if (howToPlayOpen) {
    // Close how to play
    if (isMouseOver(htpOX,htpOY,htpOW,htpOH)) {
      howToPlayOpen = false;
    }
  }
  if (!started) {
    return;
  }
  if (win || gameOver) {
    if ( isMouseOver(mainMenuX+5,mainMenuY+68,mainMenuW,mainMenuH) ) {
      console.log("To main menu");
      win = false;
      gameOver = false;
      chestKeyOwned = false;
      exitKeyOwned = false;
      circuitRoomOpened = false;
      showingKeypad = false;
      clickCount = 0;
      numberEntered = "";
      clearInterval(timerInterval);
      timeLeft = timeLimit;
      currentLocation = startingLocation;
      started = false;

      // Dripping sound loops
      dripMusic.loop();
      // Dripping sound volume
      dripMusic.amp(0.04,0.04);
    }
    return;
  }
  clickCount += 1;
  // Handle clicks on objects for each room after game starts
  if (currentLocation === locations.hallway) {
    if (showingKeypad) {
      if (numberEntered == "WRONG CODE") {
        numberEntered = "";
      }
      // Keypad handling
      mouseOverOneKey = isMouseOver(oneKeyX,oneKeyY,oneKeyW,oneKeyH);
      mouseOverTwoKey = isMouseOver(twoKeyX,twoKeyY,twoKeyW,twoKeyH);
      mouseOverThreeKey = isMouseOver(threeKeyX,threeKeyY,threeKeyW,threeKeyH);
      mouseOverFourKey = isMouseOver(fourKeyX,fourKeyY,fourKeyW,fourKeyH);
      mouseOverFiveKey = isMouseOver(fiveKeyX,fiveKeyY,fiveKeyW,fiveKeyH);
      mouseOverSixKey = isMouseOver(sixKeyX,sixKeyY,sixKeyW,sixKeyH);
      mouseOverSevenKey = isMouseOver(sevenKeyX,sevenKeyY,sevenKeyW,sevenKeyH);
      mouseOverEightKey = isMouseOver(eightKeyX,eightKeyY,eightKeyW,eightKeyH);
      mouseOverNineKey = isMouseOver(nineKeyX,nineKeyY,nineKeyW,nineKeyH);
      mouseOverZeroKey = isMouseOver(zeroKeyX,zeroKeyY,zeroKeyW,zeroKeyH);
      mouseOverOkKey = isMouseOver(okKeyX,okKeyY,okKeyW,okKeyH);
      mouseOverCancelKey = isMouseOver(cancelKeyX,cancelKeyY,cancelKeyW,cancelKeyH);
      if (mouseOverOneKey) {
        enterNumber(1);
      }else if (mouseOverTwoKey) {
        enterNumber(2);
      }else if (mouseOverThreeKey) {
        enterNumber(3);
      }else if (mouseOverFourKey) {
        enterNumber(4);
      }else if (mouseOverFiveKey) {
        enterNumber(5);
      }else if (mouseOverSixKey) {
        enterNumber(6);
      }else if (mouseOverSevenKey) {
        enterNumber(7);
      }else if (mouseOverEightKey) {
        enterNumber(8);
      }else if (mouseOverNineKey) {
        enterNumber(9);
      }else if (mouseOverZeroKey) {
        enterNumber(0);
      }else if (mouseOverOkKey) {
        if (numberEntered === circuitRoomCode) {
          circuitRoomOpened = true;
          numberEntered = "";
          showingKeypad = false;
          currentLocation = locations.circuitRoom;
          soundKeypad.play();
          soundKeypad.setVolume(0.2);

        }else {
          numberEntered = "WRONG CODE";
          showingKeypad = true;
          soundKeypadWrong.play();
          soundKeypadWrong.setVolume(0.2);
        }
      }else if (mouseOverCancelKey) {
        numberEntered = "";
        showingKeypad = false;
      }
      if (isMouseOver(546,178,242,372)) // The keypad surface
      {
        // Nothing extra happens
      }else // If you click outside keypad it will close
       {numberEntered = "";
        showingKeypad = false;
      }
      return;
    }

    if (mouseOverCircuitDoor) {
      if (!circuitRoomOpened) {
        // Show keypad
        showingKeypad = true;
        return;
      }
      currentLocation = locations.circuitRoom;
      openDoor.play();
      openDoor.setVolume(0.2);
    }else if (mouseOverRadiatoradiatorDoor) {
      currentLocation = locations.radiatorRoom;
      openDoor.play();
      openDoor.setVolume(0.2);
    }else if (mouseOverStoragexitDoor) {
      currentLocation = locations.storageRoom;
      openDoor.play();
      openDoor.setVolume(0.2);
    }else if (mouseOverExitDoor) {
      if (exitKeyOwned) {
        win = true;
      }
      else {lockedDoor.play();
      lockedDoor.setVolume(0.1);}
    }
    if ( isMouseOver(eEggX,eEggY,eEggW,eEggH) ) {
      console.log("Easter Egg!"); // This log is a placeholder for an Easter egg
    }
  }else if (currentLocation === locations.circuitRoom) {
    if ( isMouseOver(chestKeyX,chestKeyY,chestKeyW,chestKeyH) ) {
      if (!chestKeyOwned) {
        pickKey.play();
        pickKey.setVolume(0.2);
      }
      chestKeyOwned = true;
    }
  }else if (currentLocation === locations.storageRoom) {
    if ( isMouseOver(chestX,chestY,chestW,chestH) && chestKeyOwned ) {
      if (!exitKeyOwned) {
        openChest.play();
        openChest.setVolume(0.2);
      }
      exitKeyOwned = true;
    }
  }else if (currentLocation === locations.radiatorRoom) {

  }
  if (mouseOverReturn && currentLocation != locations.hallway ) {
    currentLocation = locations.hallway;
    closeDoor.play();
    closeDoor.setVolume(0.2);
  }
  console.log(clickCount); // used to log the click count
}
//mouseClicked ends
