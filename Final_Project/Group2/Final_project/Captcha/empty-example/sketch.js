//CAPTCHA - Group 2 - Nanna Nørmark, Margrete Xie, Teis Johannesen & Jonas Nordberg

var completed = 0;
var input0, button0, answer0, answer00, Canvas, sel, ctracker, face, positions, capture, enterMillis, snake, princess, apple, door, fault, CAPTCHA1;
var title = 'Level 1';
var subTitle = 'Type the following letters';
let hapSmiley, mehSmiley, sadSmiley, empathy;


function preload(){ //Preloads all pictures
  CAPTCHA1=loadImage('Images/ddlkj.jpg');
  Leetspeak=loadImage('Images/IAMNOTAROBOT.jpg');
  empathy=loadImage('Images/abuse.jpg');
}

function setup() {
  Canvas = createCanvas(windowWidth-10, windowHeight-10); //Creates the canvas as being 10 pixels smaller than the window in x and y. This removes scrollbars
  Canvas.position(5,5); //repositions the canvas 5 pixels in both x and y direction.
  removeElements(); //Remove .dom elements from the canvas
  background(153); //Creates a background with the greyscale color of 153
  textAlign(CENTER); //Aligns text to reference from center
  textSize(65);
  textFont('Courier');
  fill(0);
  text(title,width/2,height/8);
  textSize(40);
  text(subTitle,width/2,height/4.2)
  if (completed == 0) { //Checks the state of completed to determine the progress and show the according level
    level0(); //CAPTCHA
  } else if (completed == 1) {
    level1(); //Leetspeech
  } else if (completed == 2) {
    level2(); //Object recognition
  } else if (completed == 3) {
    level3(); //Human language
  } else if (completed == 4) {
    level4(); //Empathy
  } else if (completed == 5) {
    level5(); //Facial recognition
  } else {
    completed = 0;
  }
  console.log(completed); //Writes out the progress of the program
}

function windowResized() {
  setup(); //If window is resized: run setup once more to accomodate new screen size
}

function draw() {
  if (completed == 0) { //Checks if its on first level
    if (keyIsDown(ENTER)) { //Checks if ENTER is down.
      inputEvent0()
      enterMillis = millis(); //timestamp
    }
  }
  if (completed == 1) { //checks if its on second level
    if (keyIsDown(ENTER)) { //checks if ENTER is down
      if (enterMillis + 500 < millis()) { //checks if 0.5 a second is past since line 54
      inputEvent1()
      }
    }
  }
 if (completed == 5) {
   face = ctracker.getScore(); //Returns a number between 0 and 1 about how well the facial model suits the user's face, where 0 is a bad fit and 1 is a perfect fit
   positions = ctracker.getCurrentPosition(); //Returns the position of the facial model in an array
   noStroke();
   fill(153);
   rect(0,windowHeight/4,windowWidth,windowHeight);
   if (positions.length) { //Check the availability of web cam tracking
      for (let i=0; i<positions.length; i++) {  //Loops through all major face track points
       push();
       translate(windowWidth/4-capture.width/2,windowHeight/3);
       noStroke();
       fill(255);
       ellipse(positions[i][0], positions[i][1], 4, 4);//Draws an ellipse at each position point of the facial model
       pop();
    }
  }
  console.log(face); //writes out the result of face in console
    if (face > 0.8){ //checks if webcam reasembles a face by 80% or more
      fill(0, 255, 0);
      text('Human confirmed',width/2,height/1.1)
    }
 }
}

function level0() { //CAPTCHA
  imageMode(CENTER);
  image(CAPTCHA1,width/2,height/2.8);
  input0 = createInput();
  button0 = createButton('Submit');
  button0.position(windowWidth/2-button0.width/2,height/1.5);
  button0.mousePressed(inputEvent0);
  input0.position(windowWidth/2-input0.width/2,height/2);
}

function inputEvent0(){ //if submit button on level0 is clicked
  if (input0.value() == 'DDLKJ' || input0.value() == 'ddlkj') { //checks if the right ansewr is given. Both in capital and lowerkey letters
      completed = 1;
      title = 'Level 2';
      subTitle = 'Type the sentence below in English';
      setup();
  } else { //is everything but the right answer entered, do this
    push();
      fill(255,0,0);
      textSize(20);
      textFont('Consolas');
      textStyle(BOLD);
      text('Incorrect answer',width/2,height/2.1);
    pop();
  }
}

function level1() { //Leetspeak
  image(Leetspeak,width/2,height/2.8);
  input1 = createInput();
  button1 = createButton('Submit');
  button1.position(windowWidth/2-button1.width/2,height/1.5);
  button1.mousePressed(inputEvent1);
  input1.position(windowWidth/2-input1.width/2,height/2);
}

function inputEvent1(){ //if submit button on level1 is pressed
  if (input1.value() == 'I AM NOT A ROBOT'||input1.value() == 'i am not a robot') { //Checks if correct input
      completed = 2;
      title = 'Level 3';
      subTitle = 'Which picture shows a fish?';
      setup();
  } else { //if everything but the right answer, do this.
    fill(255,0,0);
    textSize(25);
    text('Incorrect answer',width/2,height/2.1);
  }
}

function level2() { //Object recognition
  button2_1 = createImg('Images/flower.jpg')
  button2_1.size(width/5.5,width/7.5);
  button2_1.position(width/3-50-button2_1.width/2,height/2-button2_1.height/2);
  button2_1.mousePressed(wrongbutton);
  button2_2 = createImg('Images/car.jpg')
  button2_2.size(width/5.5,width/7.5);
  button2_2.position(width/2-button2_2.width/2,height/2-button2_2.height/2);
  button2_2.mousePressed(wrongbutton);
  button2_3 = createImg('Images/fish.jpg')
  button2_3.size(width/5.5,width/7.5);
  button2_3.position(width/1.5+50-button2_3.width/2,height/2-button2_3.height/2);
  button2_3.mousePressed(correctbutton);
}

function correctbutton(){ //triggers when the right button is pressed
  completed = 3;
  title = 'Level 4';
  subTitle = 'Which word makes sense in the sentence';
  setup();
}

function wrongbutton(){ //triggers when the wrong button is pressed
  fill(255,0,0);
  textSize(25);
  text('Incorrect answer',width/2,height/3);
}

function level3() { //Human Language
  princess = createButton('Princess');
    princess.position(width/5,height/1.5);
    princess.mousePressed(rightbutton);
  snake = createButton('Snake');
    snake.position(width/5+width/5,height/1.5);
    snake.mousePressed(wrongbutton); // wrong button is a reference to line 159
  apple = createButton('Apple');
    apple.position(width/5+width/5*2,height/1.5);
    apple.mousePressed(wrongbutton);
  door = createButton('Door');
    door.position(width/5+width/5*3,height/1.5);
    door.mousePressed(wrongbutton);
  textSize(20);
  text('Once upon a time there was prince, who wanted to marry a', width/2,height/2) //writes text
}

function rightbutton() { //if the right button from level3 is pressed
  completed = 4;
  title = 'Level 5';
  subTitle = 'How does this make you feel?';
  setup();
}

function level4() { //Empathy
  imageMode(CENTER);
  image(empathy,width/2, height/2,600/1.5,400/1.5);
  hapSmiley4 = createImg('Images/glad.png')
  hapSmiley4.position(windowWidth/1.5-50,height/1.3-hapSmiley4.height/2);
  hapSmiley4.size(100,100);
  hapSmiley4.mousePressed(wrongEmotion);
  mehSmiley4 = createImg('Images/meh.png')
  mehSmiley4.position(windowWidth/2-50,height/1.3-mehSmiley4.height/2);
  mehSmiley4.size(100,100);
  mehSmiley4.mousePressed(wrongEmotion);
  sadSmiley4 = createImg('Images/sad.png')
  sadSmiley4.position(windowWidth/3-50,height/1.3-sadSmiley4.height/2);
  sadSmiley4.size(100,100);
  sadSmiley4.mousePressed(rightEmotion);
}

function wrongEmotion() {
  fill(255,0,0);
  textSize(25);
  text('Incorrect answer',width/2,height/3.3);
}

function rightEmotion() {
  completed = 5;
  title = 'Level 6';
  subTitle = 'Please look into your webcam';
  setup();
}

function level5() { //Facial recognition
  capture = createCapture(VIDEO); //Launches videocapture from users webcam
  capture.size(384,288);
  capture.position(width/4*3-capture.width/2,windowHeight/3);
  ctracker = new clm.tracker(); //starts a clm-tracker
  ctracker.init(pModel);
  ctracker.start(capture.elt);
}
