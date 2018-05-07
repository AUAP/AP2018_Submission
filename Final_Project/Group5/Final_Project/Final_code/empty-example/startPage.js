function startPage(){

  //online time count
  push();
  fill(160)
  noStroke();
  rect(378,278,185,85);
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



  //when sidePage function is shown the fron page button is hidden and the side page button is visable
  buttonFrontPage.hide();
  buttonSidePage.hide();
  buttonStartActivity.hide();
  buttonStopActivity.hide();
  buttonOnlineStopActivity.hide();
  buttonOnlineStartActivity.hide();
  document.getElementById("myresultone").style.visibility= 'hidden';
  document.getElementById("myresulttwo").style.visibility= 'hidden';
  document.getElementById("sbutton").style.visibility= 'hidden';


  ssp=true;
  counter = false;

}
