
function sidePage(){

  //online time count
  push();
  fill(160)
  noStroke();
  rect(378,278,185,85);
  pop();

  //offline time count
  push();
  fill(160)
  noStroke();
  rect(378,378,185,85);
  pop();

  //edge of the iPhone
  push();
  stroke(60);
  fill(20);
  rect(7, 4, 296, 615, 30);
  pop();

  //screen of the iphone
  fill(240);
  rect(23, 78, 263, 471, 2);

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

  /*when sidePage function is shown the buttons from the Other
  pages is hidden and the sidepage button is visable*/
  buttonFrontPage.hide();
  buttonSidePage.show();
  buttonStartActivity.hide();
  buttonStopActivity.hide();
  buttonOnlineStopActivity.hide();
  buttonOnlineStartActivity.hide();

    //the variables is changed to hide som elements and show the needed ones
  ssp=false;
  counter = false;
  sp = true;

  //Inspiration for what to do
  push();
  stroke("#cfd1cf");
  strokeWeight(3);
  fill(255);

  //Upper squares
  rect(40, 380, 65, 65, 10);
  rect(120, 380, 65, 65, 10);
  rect(200, 380, 65, 65, 10);

  //bottom squares
  rect(40, 460, 65, 65, 10);
  rect(120, 460, 65, 65, 10);
  rect(200, 460, 65, 65, 10);
  pop();

  // Text
  push();
  textFont(myFont);
  textAlign(CENTER);
  textSize(22);
  noStroke();
  fill(20,80,20);
  text('Register your friend and activity', 155, 180);
  text('Inspiration for what to do', 155, 350)
  pop();



  document.getElementById("myresultone").style.visibility= 'visible';
  document.getElementById("myresulttwo").style.visibility= 'visible';
  document.getElementById("sbutton").style.visibility= 'visible';
}

  //the class to construct activitybuttons from
  class activityButton {
   constructor (ImgA, xA, yA, width, height) {
     this.xA = xA;//position on x.axis
     this.yA = yA;//position on y.axis
     this.ImgA = ImgA;//picture to be displayed
     this.width = width;//width of picture
     this.height = height;//height of picture
   }

   icons () {
     image(this.ImgA, this.xA, this.yA, this.width, this.height);
   }
  }
