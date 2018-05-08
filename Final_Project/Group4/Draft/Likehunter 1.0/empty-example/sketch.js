let skrifter;
let hearts = [];
let blogger2;
let likes = 0;
let follow = 0;


function preload() {
  skrifter = loadFont('CarsonD.otf');
  blogger2 = loadImage('blogger2.png');
  baggrund = loadImage('background2.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  heart = loadImage('like.png');
  bar2 = loadImage('bar2.png');
  hearts.push(new Heart());
  grammer1 = new grammer();
}

function draw() {
  images();
  arrows();
  tekst();
  grammer1.show();
  grammer1.move();

//hearts
  if (frameCount % 70 == 0) {
    hearts.push(new Heart());
  }



//the Heart from the array "hearts" moves and shows
for (let heart of hearts) {
      heart.move();
      heart.show();
      heart.touched();
}
}
//end of draw

function tekst(){
  //scoreboard
    strokeWeight(7);
    stroke('rgba(239, 73, 84, 1)');
    noFill();
    rect(27, 60, 140, 30, 5);
    noStroke();
    fill('rgba(239, 73, 84, 1)');
    rect(130, 60, 40, 30);
    triangle(50, 90, 70, 90, 60, 103);
    strokeWeight(2);
    stroke('rgba(255, 255, 255, 1)');
    fill('rgba(255, 255, 255, 0.60)');

  //text
    noStroke();
    textSize(55);
    textFont(skrifter);
    fill('rgba(0, 0, 0, 0.70)');
    text('GET MORE LIKES TO WIN', windowWidth/2 - 180, 125);
    fill('rgba(255, 255, 255, 1)');
    text('GET MORE LIKES TO WIN', windowWidth/2 - 183, 123);

  //score
    fill(255);
    textSize(20);
    text(likes, 62, 82);
    text(follow, 132, 82);

}

//the class of the image "blogger"
class grammer {
  constructor() {
    this.x = windowWidth/2 - 75;
    this.y = windowHeight/2 + 120;
    this.gw = 150;
    this.gh = 150;
}

//position and size of the image "blogger"
  show(){
    image(blogger2, this.x, this.y, this.gw, this.gh);
}

//the blogger moves when the left or right arrow is held down
  move(){
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 10;
      fill('rgb(76, 95, 215)');
      rect(windowWidth/2 - 80, windowHeight/2 + 280, 75, 2); //left arrow-rectangle
      triangle(windowWidth/2 - 90, windowHeight/2 + 281, windowWidth/2 - 80, windowHeight/2 + 275, windowWidth/2 - 80, windowHeight/2 + 287); //left arrow-triangle
}
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 10;
      fill('rgb(76, 95, 215)');
      rect(windowWidth/2 + 5, windowHeight/2 + 280, 75, 2); //right arrow-rectangle
      triangle(windowWidth/2 + 85, windowHeight/2 + 281, windowWidth/2 + 75, windowHeight/2 + 275, windowWidth/2 + 75, windowHeight/2 + 287); //right arrow-triangle
}
    if (this.x > width) {
      this.x = 0;
}
    if (this.x < 0) {
      this.x = width;
  }
}
}

class Heart {
  constructor() {
    this.positionX = random(width);
    this.positionY = 0;
    this.xSpeed = 0;
    this.ySpeed = 3;
    this.w = 100;
    this.h = 100;
    this.vis = true;
}
  show() {
    if(this.vis){
    image(heart, this.positionX, this.positionY, this.w, this.h);
}
}
  move() {

    this.positionY = this.positionY + this.ySpeed;

}
  touched() {
  let d = dist(this.positionX-50,this.positionY-50,grammer1.x,grammer1.y);
if (d<120) {
this.vis=false
likes++;
follow=floor(likes/11)
}
}

}

function arrows() {
  fill(0);
  rect(windowWidth/2 - 80, windowHeight/2 + 280, 75, 2); //left arrow-rectangle
  rect(windowWidth/2 + 5, windowHeight/2 + 280, 75, 2); //right arrow-rectangle
  triangle(windowWidth/2 - 90, windowHeight/2 + 281, windowWidth/2 - 80, windowHeight/2 + 275, windowWidth/2 - 80, windowHeight/2 + 287); //left arrow-triangle
  triangle(windowWidth/2 + 85, windowHeight/2 + 281, windowWidth/2 + 75, windowHeight/2 + 275, windowWidth/2 + 75, windowHeight/2 + 287); //right arrow-triangle
}

function images() {
  image(baggrund, 0, 0, windowWidth, windowHeight);
  image(bar2, 30, 60, 100, 30);
}
