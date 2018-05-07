/*

Contains all instances of const, let,  or var used in the program

*/

let clickCount = 0;
// Related to the timer
const timeLimit = 300; // 300 seconds, 5 minutes in seconds
let timerInterval;
let timeLeft = timeLimit;
let converted; // form seconds to the format:  minutes:seconds   like 300 = 5:00
var extraDigit; // the zero in front of 1 digit numbers in the timer
var timeUsed; // how many seconds did the player use to escape
var usedMinAndSec; // how many minutes and seconds did the player use to escape
var minuteS; // the "s" in the end of minute(s)
var secondS; // the "s" in the end of second(s)
// Canvas size
const canvasX = 1280;
const canvasY = 720;
// After starting the game, set started to true, to show the game and hide the start button
let started = false;
// After the game is won, set win to true, to show the victory text
let win = false; // true when player escapes
let gameOver = false; // true when player loses
let howToPlayOpen = false; // how to play screen - is it open?
let aboutOpen = false; // screen about the game - is it open?
// Colors for UI
const backgroundColor = 80;
const textBG = 100;
const menuBG = 50;
const textColor = "#680612"; // the general text color in the game
var endSpecialTextColor = "#406eb7"; // color of text when the player escapes
var endTextWin;
var endTextGameOver;

const hovered = 150;
// Variables to check mouse position over objects and buttons
let mouseOverStart = false;
let mouseOverHowtoPlay = false;
let mouseOverContinue = false;
let mouseOverCircuitDoor = false;
let mouseOverRadiatoradiatorDoor = false;
let mouseOverStoragexitDoor = false;
let mouseOverExitDoor = false;
let mouseOverReturn = false;

// different hover variables
var hoverEnable = false;
var hoverTime;
var confirmedHover = false;

// Keypad keys
let mouseOverOneKey = false;
let mouseOverTwoKey = false;
let mouseOverThreeKey = false;
let mouseOverFourKey = false;
let mouseOverFiveKey = false;
let mouseOverSixKey = false;
let mouseOverSevenKey = false;
let mouseOverEightKey = false;
let mouseOverNineKey = false;
let mouseOverZeroKey = false;
let mouseOverOkKey = false;
let mouseOverCancelKey = false;
// Variables for images
let imgHallway;
let imgCircuitRoom;
let imgRadiatorRoom;
let imgStorageRoom;
let imgReturnArrow;
let imgStartScreen;
let imgAbout;
let imgHowToPlay;
let imgChest;
let imgKeypad;
let imgChestKey;
let imgKeycard;
let imgBackground;
// Locations
const locations = { // determines which image to show and what events are possible
  "hallway": "hallway",
  "circuitRoom": "circuitRoom",
  "radiatorRoom": "radiatorRoom",
  "storageRoom": "storageRoom"
};
// text in the bottom of the screen when pointing at a door/ the return button
const labelHallway = "To the hallway";
const labelCircuitRoom = "To the circuit room";
const labelRadiatorRoom = "To the radiator room";
const labelStorageRoom = "To the storage room";
const labelExitDoor = "Exit door";

const startingLocation = locations.hallway;
let currentLocation = startingLocation; // what is the current location?
// Keys
let chestKeyOwned = false;
let exitKeyOwned = false;
let circuitRoomOpened = false;
const circuitRoomCode = "3466"; // T-R-E-E = 3-4-6-6
let showingKeypad = false;
let numberEntered = "";
const keypadNumbersLimit = 14;

/*
Buttons positions

X and Y are the coordinates of the button.
TX and TY are X and Y of the text.
W and H are width and height of the button.
*/
// Start Button (in start screen)
const startW = 210;
const startH = 60;
const startX = 425;
const startY = 530;
const startTX = 465;
const startTY = 570;
// How to play button (in start screen)
const htpW = 210;
const htpH = 60;
const htpX = 725;
const htpY = 530;
const htpTX = 765;
const htpTY = 570;
// How to play out (closing how to play screen)
const htpOX = canvasX-62;
const htpOY = 20;
const htpOW = 40;
const htpOH = 40;
// Continue button (in about screen)
const contnueX = 540;
const contnueY = 630;
const contnueW = 210;
const contnueH = 60;
// # Hallway doors
// Circuit room door (Door on the left)
const circuitDoorX = 390;
const circuitDoorY = 60;
const circuitDoorW = 100;
const circuitDoorH = 500;
// Radiator room door (First on the right)
const radiatorDoorX = 760;
const radiatorDoorY = 130;
const radiatorDoorW = 60;
const radiatorDoorH = 300;
// Storage room door (Second on the right)
const storagexitDoorX = 850;
const storagexitDoorY = 20;
const storagexitDoorW = 120;
const storagexitDoorH = 550;
// Exit door (Door at the end of the hallway)
const exitDoorX = 600;
const exitDoorY = 150;
const exitDoorW = 120;
const exitDoorH = 250;
// Inventory
const inventoryX = 0;
const inventoryY = 600;
const inventoryW = canvasX;
const inventoryH = 220;
// Item slot 1
const itemSlot1X = 20;
const itemSlot1Y = 610;
const itemSlot1W = 100;
const itemSlot1H = 100;
// Item slot 2
const itemSlot2X = 140;
const itemSlot2Y = 610;
const itemSlot2W = 100;
const itemSlot2H = 100;
// Return button
const returnButtonX = canvasX - 120;
const returnButtonY = 610;
const returnButtonW = 100;
const returnButtonH = 100;
// Chest
const chestX = 500;
const chestY = 450;
const chestW = 180;
const chestH = 100;
// Keypad screen
const keypadScreenX = 549;
const keypadScreenY = 180;
const keypadScreenW = 228;
const keypadScreenH = 70;
// Keypad numbers
// 1
const oneKeyX = 569;
const oneKeyY = 271;
const oneKeyW = 50;
const oneKeyH = 50;
// 2
const twoKeyX = 637;
const twoKeyY = 271;
const twoKeyW = 50;
const twoKeyH = 50;
// 3
const threeKeyX = 704;
const threeKeyY = 271;
const threeKeyW = 50;
const threeKeyH = 50;
// 4
const fourKeyX = 569;
const fourKeyY = 340;
const fourKeyW = 50;
const fourKeyH = 50;
// 5
const fiveKeyX = 637;
const fiveKeyY = 340;
const fiveKeyW = 50;
const fiveKeyH = 50;
// 6
const sixKeyX = 704;
const sixKeyY = 340;
const sixKeyW = 50;
const sixKeyH = 50;
// 7
const sevenKeyX = 569;
const sevenKeyY = 405;
const sevenKeyW = 50;
const sevenKeyH = 50;
// 8
const eightKeyX = 637;
const eightKeyY = 405;
const eightKeyW = 50;
const eightKeyH = 50;
// 9
const nineKeyX = 704;
const nineKeyY = 405;
const nineKeyW = 50;
const nineKeyH = 50;
// 0
const zeroKeyX = 637;
const zeroKeyY = 475;
const zeroKeyW = 50;
const zeroKeyH = 50;
// OK
const okKeyX = 569;
const okKeyY = 475;
const okKeyW = 50;
const okKeyH = 50;
// Cancel
const cancelKeyX = 704;
const cancelKeyY = 475;
const cancelKeyW = 50;
const cancelKeyH = 50;
// ChestKey
const chestKeyX = 340;
const chestKeyY = 520;
const chestKeyW = 60;
const chestKeyH = 60;
// Main menu
const mainMenuW = 200;
const mainMenuH = 60;
const mainMenuX = (canvasX/2) - (mainMenuW/2);
const mainMenuY = (canvasY/2) - (mainMenuH/2) + 70;
// Info text
const infoX = canvasX/2;
const infoY = canvasY - 50;
// EasterEgg
const eEggX = 677;
const eEggY = 95;
const eEggW = 16;
const eEggH = 11;
// Music
let basementMusic;
let dripMusic;
