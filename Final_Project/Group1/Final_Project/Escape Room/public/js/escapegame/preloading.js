/*

Contains all preloaded images, sounds, and music, as well as some controls for these.

*/


function preload() {
/** Preload images */
  imgHallway = loadImage("public/images/hallway_final2.png");
  imgCircuitRoom = loadImage("public/images/circuit_room_final2.png");
  imgRadiatorRoom = loadImage("public/images/radiator_room_final2.png");
  imgStorageRoom = loadImage("public/images/storage_room_final2.png");
  imgReturnArrow = loadImage("public/images/returnArrow.png");
  imgChest = loadImage("public/images/chest.png");
  imgChestKey = loadImage("public/images/chestKey.png");
  imgKeypad = loadImage("public/images/keypad.png");
  imgKeycard = loadImage("public/images/keycard.png");
  imgBackground = loadImage("public/images/placeholderBackground.png");
  imgAbout = loadImage("public/images/about.png");
  imgHowToPlay = loadImage("public/images/howTo.png");
  imgStartScreen = loadImage("public/images/startscreen.png");
  imgWin = loadImage("public/images/win.png");
  imgGameOver = loadImage("public/images/gameOver.jpg");

  soundFormats("mp3", "wav");
  /** Preload music */
  basementMusic = loadSound("public/music/basement.mp3");
  dripMusic = loadSound("public/music/drip.mp3");
  // Sound effects
  openDoor = loadSound("public/music/openDoor.wav");
  closeDoor = loadSound("public/music/closeDoor.wav");
  lockedDoor = loadSound("public/music/lockedDoor.wav");
  soundKeypad = loadSound("public/music/keypad.wav");
  soundKeypadWrong = loadSound("public/music/keypadWrong.mp3");
  openChest = loadSound("public/music/openChest.wav");
  pickKey =  loadSound("public/music/pickKey.wav");

}
//preload ends
