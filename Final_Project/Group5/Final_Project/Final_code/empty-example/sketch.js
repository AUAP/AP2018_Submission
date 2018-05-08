// Made by group 5 - Ester, Nina, Sissel & Camilla

//variable for persona
var persona;

//variables for pages in program:
var buttonFrontPage;
var buttonSidePage;

//time counter variables
var r = 255;
var g=255;
var y=440;
var counterPosition;
var socialtime;
var checker=0;
var counterends;
var kvotient;
var framessincestart=0;
var up=0;
var down=0;
var upSeconds=0;
var downSeconds=0;
var offlineTime;
var onlineTime;

//variables for the texts at the top:
var infoFriends = [];
var xText = 270;
var vText = 270;
var besked=0;
var infoY = "  ";

//variables to make the counter,sidePage, frontPage hide and show when the buttons are pressed
var counter = true;
var sp = false;
var ssp=true;

//variables for submitting an activity
var friendName;
var activity;
var activity2;

//Variables for activitybuttons:
var ImgArray = [];
var activities = [];
var coffee;
var exercise;
var walk;
var theater;
var dinner;
var other;


function preload(){
  //loading fonts and images:
  persona=loadImage("pictures/Personatimebalancer.jpg");
  myFont = loadFont('EuroStyle.ttf');
  imgthrobber=loadImage("pictures/hourglass.png");
  digitalFont = loadFont('digital-dream.ttf');
  coffee = loadImage("pictures/DrinkCoffee.png");
  exercise = loadImage("pictures/Exercise.png");
  walk = loadImage ("pictures/GoForAWalk.png");
  theater = loadImage("pictures/GoToTheTheater.png");
  dinner = loadImage("pictures/HaveDinner.png");
  other = loadImage("pictures/Other.png");
  counterends = loadImage("pictures/counterends.png");
}


function setup() {

  createCanvas(windowWidth, windowHeight);
  background(160);
  frameRate(60);
  socialtime=random(0,200);


  //Start page button & styling:
  buttonStartPage = createButton("Home");
  buttonStartPage.mousePressed(frontPage);
  buttonStartPage.position(122, 480);

  buttonStartPage.style("color","black");
  buttonStartPage.style("border-radius","3px");
  buttonStartPage.style("background","#71a761");
  buttonStartPage.style("border","none");
  buttonStartPage.style("text-shadow","0 -1px 0 rgba(0,0,0,.2)");
  buttonStartPage.style("padding","20px 20px");
  buttonStartPage.style("box-shadow", "0 4px 10px 0 rgba(0,0,0,0.1), 0 4px 10px 0 rgba(0,0,0,0.1)");

  //front page button
  buttonFrontPage = createButton("Register activity");
  buttonFrontPage.mousePressed(sidePage);
  buttonFrontPage.position(94, 487);

  buttonStartActivity= createButton("Start Offlinetime")
  buttonStartActivity.mousePressed(countUp);
  buttonStartActivity.position(385,400);
  buttonStartActivity.style("background","#71a761");

  buttonStopActivity= createButton("Stop Offlinetime")
  buttonStopActivity.mousePressed(countStop);
  buttonStopActivity.position(385,430);
  buttonStopActivity.style("background","#71a761");

  //online time count
  buttonOnlineStartActivity= createButton("Start Onlinetime")
  buttonOnlineStartActivity.mousePressed(countDown);
  buttonOnlineStartActivity.position(385,300);
  buttonOnlineStartActivity.style("background","#71a761");

  buttonOnlineStopActivity= createButton("Stop Onlinetime")
  buttonOnlineStopActivity.mousePressed(countStop);
  buttonOnlineStopActivity.position(385,330);
  buttonOnlineStopActivity.style("background","#71a761");

  //side page button
  buttonSidePage = createButton("Back");
  buttonSidePage.mousePressed(frontPage);
  buttonSidePage.position(40, 125);

  //front page button styling
  buttonFrontPage.style("color","black");
  buttonFrontPage.style("border-radius","3px");
  buttonFrontPage.style("background","#71a761");
  buttonFrontPage.style("border","none");
  buttonFrontPage.style("text-shadow","0 -1px 0 rgba(0,0,0,.2)");
  buttonFrontPage.style("padding","20px 20px");
  buttonFrontPage.style("box-shadow", "0 4px 10px 0 rgba(0,0,0,0.1), 0 4px 10px 0 rgba(0,0,0,0.1)");

  //side page button styling
  buttonSidePage.style("color","black");
  buttonSidePage.style("border-radius","3px");
  buttonSidePage.style("background","#71a761");
  buttonSidePage.style("border","none");
  buttonSidePage.style("text-shadow","0 -1px 0 rgba(0,0,0,.2)");
  buttonSidePage.style("padding","5px 8px");
  buttonSidePage.style("box-shadow", "0 4px 10px 0 rgba(0,0,0,0.1), 0 4x 10px 0 rgba(0,0,0,0.1)");

  //start page function is called in setup:
  startPage();

  //Defining what is in the array for the top text:
  infoFriends = ["Simon is now going for a walk with a friend.", "Sofie is now drinking coffee with a friend.", "Sissel is now at the museum with a friend.", "Jacob is now attending a concert with a friend."];
  buttonActivities = ["drinking coffee", "exercising", "going for a walk", "being cultural", "sharing a meal", "spending time"];

  //Activitybuttons
  ImgArray = [coffee, exercise, walk, theater, dinner, other];

  for (var i = 0; i < 5; i++) {
    var x = 45 + 80 * i;
    var y = 385;
    var a = 0 + 1 * i;
    if (a > 2) { //this moves the fourth and fifth pictures of the array to another row
      y = 465;
      x = -195 + 80 * i;
    }
    activities[i] = new activityButton(ImgArray[a], x, y, 55, 55 );
  }
}


function draw(){

  //timeCounter functions gets drawn when variable counter is true,
  // which it will be when the frontpage is called as well as when the sidePage button is pressed
  if(counter == true){
    timeCounter();
  }

  //if the checker is one the function to countUp time is called
  if(checker==1){
    // up=up+1; //If you want a faster simulation of time change up to this
    up=1;//And comment out this
    countUp();
  }

   //if the checker is null the function to stop counting time is called
  if(checker==0){
    up=0;
    down=0;
    countStop();
  }

  //if the checker is two the function to countdown time is called
  if(checker==2){
    // down=down+1; //if you want a Faster simulation of time change the down variable to this
    down=1;//And comment out this variable
    countDown();
  }

  //if the starting page is shown, the throbber function is called.
  if(ssp==true){
    if(frameCount%25==0){
      push();
      noStroke();
      fill(240);
      rect(25,80,250,300);
      throbber(10);
      pop();
    }
    push();
    fill(20);
    textFont(digitalFont);
    textSize(25);
    text("Time Balancer", 55, 402);
    pop();
   }

  //if the side page is true/shown the activitiesbuttons will be shown
  if(sp == true){
    for (var i = 0; i < activities.length; i++) {
      activities[i].icons();
    }
    image(other, 210, 487, 45, 10); //the image of the three dots is a different size and is put in seperately

  }

  //green box at the top, to draw over text, to make it look like the text rolls across the screen:
  push();
  noStroke();
  strokeWeight(3);
  fill('#71a761');
  rect(24.3, 78, 261.5, 40);
  pop();

  //The function that calls the top text:
  topInfo();

 //The line of text that gives the user information about their own activities:
  push();
  vText = vText - 1;
  push();
  fill(20);
  text(infoY, vText, 110);
  pop();

  //When the text position reaches a point outside the screen, the x position will be reset to the start value:
  if(vText <-190){
    vText=270
  }
  // the box with the same color
  push();
  noStroke();
  fill(160);
  rect(0, 80, 7, 100);
  rect(304, 80, 500,100);
  pop();


  /*to enable that the activitybuttons can be mousepressed
  and hereby chosen as an activity that can be submitted,
  when an activity is chosen it is shown as a placeholder in the
  inputfield to function as an suggestion*/
  if(mouseIsPressed){
    if(mouseX>41 && mouseX<104 && mouseY>383 && mouseY<447){
    activity2 = buttonActivities[0];
    document.getElementById("myresulttwo").placeholder = activity2;
  }else if(mouseX>121 && mouseX<185 && mouseY>383 && mouseY<447){
    activity2 = buttonActivities[1];
    document.getElementById("myresulttwo").placeholder = activity2;
  }else if(mouseX>201 && mouseX<265 && mouseY>383 && mouseY<447){
    activity2 = buttonActivities[2];
    document.getElementById("myresulttwo").placeholder = activity2;
  }else if(mouseX>41 && mouseX<104 && mouseY>462 && mouseY<525){
    activity2 = buttonActivities[3];
    document.getElementById("myresulttwo").placeholder = activity2;
  }else if(mouseX>121 && mouseX<185 && mouseY>462 && mouseY<525){
    activity2 = buttonActivities[4];
    document.getElementById("myresulttwo").placeholder = activity2;
  }else if(mouseX>201 && mouseX<265 && mouseY>462 && mouseY<525){
    activity2 = buttonActivities[5];
    document.getElementById("myresulttwo").placeholder = activity2;
    }
  }

  image(persona,650,50,persona.width/4,persona.height/4);
}


function topInfo(){

    //the speed of the text that makes it move over the iphonescreen
    xText = xText - 1;

    push();
    fill(20);
    text(infoFriends[besked], xText, 92);
    pop();

     if(xText <-250){
       besked = besked+1;
      xText=270
    }

    /*if the last message of the array infoFriends has been displayed,
    the first one will show again, array number 0*/
    if(besked==infoFriends.length){
      besked=0;
    }

}

function yourActivity(){
  /*this function lets you choose an activity with a friend and
  displays what you are doing at the top*/

  friendName = myresultone.value;//name of friend you are going to meet
  activity = myresulttwo.value; //Type in activity you are going to do

  infoY = "you are " + activity + activity2 +" with "+friendName;
  /*the info in the top regarding what you are doing, activity2 is
  only displayed in the string if you chose between one of the activity
  buttons in the bottom of the screen*/

  //here the placeholders for the two input boxes are chosen
  document.getElementById("myresultone").placeholder = "who is your friend?";
  document.getElementById("myresulttwo").placeholder = "what are you doing?";

}


function timeCounter(){

  var dailyOfflineTime=1; /*the time the user spends daily on being social offline
  this time is defined when the user initializes his/her profile at program launch*/
  var dailyOnlineTime=5; //the time the user spends daily on being social online

  kvotient=dailyOfflineTime/dailyOnlineTime;/*This kvotient determines how fast time
  will be subtracted from the counter, and is depending on the users habbits off using
  the social medias before beginning to use the program*/

  //drawing of the counter
  push();
  fill(0,0,0,50)
  rect(127, 150, 55, 300, 20);
  pop();

  push();
  fill(250)
  rect(124.5, 149.5, 55, 300, 20);
  pop();

  image(counterends,110.5,145,counterends.width/2,counterends.height/2);

  //mapping of gradient color
  r=map(socialtime,0,280,255,0);
  g=map(socialtime,0,280,0,255);

  /*if socialtime is between the boundaries the counter animation
  will start. Here the position of the rectangle on the y-axis counterPosition is
  determined, and the height of the rectangle is equal to the socialtime*/
  if(socialtime>=0 && socialtime<400){
    if(y<=440 && y>=0){
      counterPosition=y-socialtime;
    }

    push();
    noStroke();
    fill(r,g,0,250);
    rect(125,counterPosition,55,socialtime,20)
    pop();
  }

  //The last of the drawing of the counter
  push();
  strokeWeight(2);
  stroke(33, 89, 32)
  noFill();
  rect(125, 150, 55, 300, 20);
  line(125,300,180,300);
  pop();

  push();
  stroke(59, 124, 57)
  for( i=0; i<280; i++){
    line(132,164+i,173,164+i);
    i=i+4
  }
  pop();

  push();
  noFill();
  rect(125, 150, 55, 300, 20);
  pop();

}

function countUp(){

  upSeconds=up/60;/*upSeconds is calculated by how many frames is executed
  while the countUp function is called, and divided by 60 to let the time
  run on seconds*/

  offlineTime=upSeconds;

  checker=1;//to checker is equal to either 0,1 or 2, when equal to 1, the counter counts up

  if(socialtime>=0 && socialtime<279.9){
    socialtime=socialtime+offlineTime;
  }
}

function countStop(){
  /*countStop stops the processes of counting by changing
  the variables that controls these functions*/
  downSeconds=0;
  upSeconds=0;
  checker=0;
  socialtime=socialtime;
}

function countDown(){
  downSeconds=down/60;/*downSeconds is calculated by how many frames is executed
  while the countDown function is called, and divided by 60 to let the time
  run on seconds*/

  onlineTime=downSeconds*kvotient;/*the onlinetime is calculated by how many
  frames/seconds the user is online or on social media, and is multiplicated
  with the kvotient that describes the users previos habbits regarding social
  time online and offline*/

  checker=2;//to checker is equal to either 0,1 or 2, when equal to 2, the counter counts down

  if(socialtime>0.1 &&socialtime<=280){
    socialtime=socialtime-onlineTime;
  }

}

function throbber(num){
  /*the throbber is used on the startingpage, as a preview of the
  consequences of the program, and if you spend to much time online
  because the consequence is that all your social media platforms
  will be filled with throbbers*/

  push();
  translate(159, 230);

  var circle = 360/num*(frameCount%num);

  rotate(radians(circle));
  rect(0,0,20,20);
  imageMode(CENTER);
  image(imgthrobber,0,0);
  pop();
}
