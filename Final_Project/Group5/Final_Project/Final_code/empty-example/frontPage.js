function frontPage(){

  //online time count text and boxes
  push();
  strokeWeight(2);
  rect(380,280,180,80);
  fill(0);
  text("Simulation of online-timecount", 385,293);
  pop();

  push();
  strokeWeight(2);
  rect(380,380,180,80);
  fill(0);
  text("Simulation of offline-timecount", 385,393);
  pop();

  push();
  stroke(60);
  fill(20);
  rect(7, 4, 296, 615, 30);
  pop();

  //screen of the iphone
  push();
  fill(240);
  rect(23, 78, 263, 471, 2);
  pop();

  //home button of the iphone
  push();
  fill(40);
  strokeWeight(3);
  stroke(60);
  ellipse(158, 585, 50, 50);
  pop();

  //camera of the iphone
  push();
  strokeWeight(1.5);
  stroke(42, 71, 105);
  fill(70, 80, 129);
  ellipse(103, 40, 10, 10);
  pop();

  //line besides the camera
  push();
  stroke(40);
  strokeWeight(6);
  line(130, 42, 176, 42);
  pop();

  push();
  fill(20);
  textFont(myFont);
  textSize(25);
  text("Offline Time", 107, 142);
  text("Online Time", 107, 477);
  pop();

  /*when frontPage function is shown the buttons from the Other
  pages is hidden and the front page button is visable*/
  buttonSidePage.hide();
  buttonFrontPage.show();
  buttonStartActivity.show();
  buttonStopActivity.show();
  buttonOnlineStopActivity.show();
  buttonOnlineStartActivity.show();
  buttonStartPage.hide();

  //the variables is changed to hide som elements and show the needed ones, here the counter.
  ssp=false;
  counter = true;
  sp = false;


  document.getElementById("myresultone").style.visibility= 'hidden';
  document.getElementById("myresulttwo").style.visibility= 'hidden';
  document.getElementById("sbutton").style.visibility= 'hidden';
}
