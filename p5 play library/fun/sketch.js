//Declaring variables for sprites and their attributes

var paddle,ball,wallTop,wallBottom,wallLeft,wallRight;
var bricks;
var max_speed=6;
var wall_thickness=40;
var brick_width=60;
var brick_height=30;
var brick_margin=6;
var row=10;
var column=23;

function setup() {
  createCanvas(1700,956);

//Creating paddle and where the borders of the level are so that the ball deflects when hitting the sides

  paddle=createSprite(width/2,height-50,125,15);
  paddle.immovable=true;

  wallTop=createSprite(width/2,-wall_thickness/2,width+wall_thickness*2,wall_thickness);
  wallTop.immovable=true;

  wallBottom=createSprite(width/2,height+wall_thickness/2,width+wall_thickness*2,wall_thickness);
  wallBottom.immovable=true;

  wallLeft=createSprite(-wall_thickness/2,height/2,wall_thickness,height);
  wallLeft.immovable=true;

  wallRight=createSprite(width+wall_thickness/2,height/2,wall_thickness,height);
  wallRight.immovable=true;

//Defining the bricks and their location in accordance with x and y values

  bricks=new Group();

  var offsetX=width/2-(column-1)*(brick_margin+brick_width)/2;
  var offsetY=100;

//Defining the columns, rows, colour of the bricks,

  for(var r=0;r<row;r++)
    for(var c=0;c<column;c++) {
      var brick=createSprite(offsetX+c*(brick_width+brick_margin),offsetY+r*(brick_height+brick_margin),brick_width,brick_height);
      brick.shapeColor=color(random(210), random(225), random(225));
      bricks.add(brick);
      brick.immovable=true;
    }

//Creating the square-looking ball and defining colour for both the paddle and ball

  ball=createSprite(width/2,height-200,20,20);
  ball.maxSpeed=max_speed;
  paddle.shapeColor=color(255,255,255);
  ball.shapeColor=color(255,0,0);

}

function draw() {
  background(0,0,0);

  paddle.position.x=constrain(mouseX,paddle.width/2,width-paddle.width/2);

//Telling the ball to deflect when hitting the already established parameters

  ball.bounce(wallTop);
  ball.bounce(wallBottom);
  ball.bounce(wallLeft);
  ball.bounce(wallRight);

  //Telling the ball to deflect when it hits the paddle

  if(ball.bounce(paddle))
    {
    var swing=(ball.position.x-paddle.position.x)/3;
    ball.setSpeed(max_speed,ball.getDirection()+swing);
    }

//When the ball hits the bricks, it shall deflect it as well.

  ball.bounce(bricks,brickHit);

//When the game begins, speed shall be defined. The speed will neither increase or decrease

  drawSprites();
}

function mousePressed() {
  if(ball.velocity.x==0&&ball.velocity.y==0)
    ball.setSpeed(max_speed,random(90-10,90+10));
}

//When the ball hits a brick, the bricks needs be removed

function brickHit(ball,brick) {
brick.remove();
}
