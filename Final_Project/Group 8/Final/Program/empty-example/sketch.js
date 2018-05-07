let posts = [];
let posts1 = [];
let notifi = [];
let notifi1 = [];
let notiText = ['is looking at your post.', 'liked your post after 20 seconds.',
'liked your post after 32 seconds.','liked your post after 11 seconds.',
'liked your post after 64 seconds.','liked your post after 4 seconds.',
'liked your post after 2 seconds.','liked your post after 14 seconds.',
'has scrolled past your post.','has scrolled past your post.','has scrolled past your post.',
'has scrolled past your post.','has scrolled past your post.','has scrolled past your post.',
'has scrolled past your post.','has scrolled past your post.','has scrolled past your post.',
'has scrolled past your post.','has scrolled past your post.','has scrolled past your post.',
'has scrolled past your post.','has scrolled past your post.','has scrolled past your post.',
'has scrolled past your post.','has scrolled past your post.','has scrolled past your post.',
'has scrolled past your post.','has scrolled past your post.','has scrolled past your post.',
'has scrolled past your post.','has scrolled past your post.','has scrolled past your post.',
'is writing a reply.', 'is visiting your profile.'];
let tekster = ['Spilled coffee all over myself fml', 'Chillin in the sun and feeling blessed rn'
,'Cant belive what Trump just did #notmypresident','Going to the movies l8r cant wait!',
'Omw to the park','Loking forward to summer vacay','Any suggestions for where to go on holiday?',
'Whos going to Northside?','My phone is in rep, pm me here instead','Watch out for the speed check on E45!'];
let noti;
let img;
var topbar;
var sidebarleft;
var sidebarRight;
var staTus;
var ads;
var button;
var input;
var feeling;
var y = 30;
var p = 30;
var j = 200;
var button1;
var button2;
var button3;
var button4;
var button5;
var z = '0';

//var fc = millis();


function preload(){
  sidebarleft = loadImage('sidebarleft.png');
  sidebarRight = loadImage('sidebarright.png');
  topbar = loadImage('topbar5.png');
  staTus = loadImage('status.png');
  ads = loadImage('ads.png');
  img = loadImage('post.png');
  noti = loadImage('notification.png');
}

function setup() {

  frameRate(60);

  createCanvas(windowWidth, 4000);

  input = createInput('What is on your mind?');
  input.position(width/3-85, 100);
  input.size(420,50);


  button = createButton('Post');
  button.position(width/4-15,169);
  button.style('border','none');
  button.style('width','140px');
  button.style('border-radius', '14px');
  button.style('height','28px');
  button.style('background-color', '#FAF6F8');
  button.style('font-weight', 'bold');
  button.style('font-size', '12px');
  button.style('cursor', 'pointer');
  button.mousePressed(startProces);


  button1 = createButton('');
  button1.position(width/4-15, 343+y);
  button1.size(170, 35);
  button1.style('opacity', '0.4');
  button1.style('background-color','rgb(255,255,255)');
  button1.mousePressed(like);

  button2 = createButton('');
  button2.position(width/4-15, 343+y+j);
  button2.size(170, 35);
  button2.style('opacity', '0.4');
  button2.style('background-color','rgb(255,255,255)');
  button2.mousePressed(like1);

  button3 = createButton('');
  button3.position(width/4-15, 343+y+2*j);
  button3.size(170, 35);
  button3.style('opacity', '0.4');
  button3.style('background-color','rgb(255,255,255)');
  button3.mousePressed(like2);

  button4 = createButton('');
  button4.position(width/4-15, 343+y+3*j);
  button4.size(170, 35);
  button4.style('opacity', '0.4');
  button4.style('background-color','rgb(255,255,255)');
  button4.mousePressed(like3);

  button5 = createButton('');
  button5.position(width/4-15, 343+y+4*j);
  button5.size(170, 35);
  button5.style('opacity', '0.4');
  button5.style('background-color','rgb(255,255,255)');
  button5.mousePressed(like4);
  feeling = new post(width/2, y);


  h = floor(random(5));

}

function startProces(){
  createPost();
  changeBack();
}

function changeBack(){
  button1.style('background-color', 'rgb(255,255,255)');
}

function changeBg(){
  button1.style('background-color', 'rgb(0,0,255)');
}

function changeBg1(){
  button2.style('background-color', 'rgb(0,0,255)');
}

function changeBg2(){
  button3.style('background-color', 'rgb(0,0,255)');
}

function changeBg3(){
  button4.style('background-color', 'rgb(0,0,255)');
}

function changeBg4(){
  button5.style('background-color', 'rgb(0,0,255)');
}

function like(){
  changeBg();
  createLike();
}
function like1(){
  changeBg1();
  createLike();
}
function like2(){
  changeBg2();
  createLike();
}
function like3(){
  changeBg3();
  createLike();
}
function like4(){
  changeBg4();
  createLike();
}

function draw() {
  background(234,235,239);

  noStroke();
  fill(65, 103, 178);
  rect(0,0,windowWidth, 43);

//Images that make up the layout of the page
  image(topbar, 0,0);
  image(sidebarleft, 0, 60, 275, 600);
  image(sidebarRight, windowWidth-230, 60, 200, 750);
  image(staTus, windowWidth/4-25, 60, 500, 150);
  image(ads, width-480, 59, 250, 750);

  print(frameCount);

//For-loops regarding notification

  for (let i = 0; i < 5; i++){
    notifi[i] = new notification (0, p);
    p = p - 110;
  }

  for (let i = 0; i < 2; i++){
    notifi1[i] = new notification1 (0, p);
  }

//For-loops regarding posts

  for (let i = 0; i < 5; i++){
    posts[i] = new post (0, y);
    y=y+200;
  }
  for (let i = 0; i < 10; i++) {
    posts[i].push();
    posts[i].show1();
  }
}



function createLike(){
  for (let i = 0; i < 1; i++){
    notifi1[i].show();
    }
}

function createPost(){
  feeling.push();
  feeling.show2();
  y=y+200;

//Notifications being shown
for (let i = 0; i < 100  ; i++){
setTimeout(createNotification, random(100000));
setTimeout(secondNotification, 5000);
setTimeout(thirdNotification, 8000);
setTimeout(fourthNotification, 10000);
setTimeout(fifthNotification, 12000);
  }
}

function secondNotification(){
  setTimeout(createNotification1, random(100000));
}
function thirdNotification(){
  setTimeout(createNotification2, random(100000));
}
function fourthNotification(){
  setTimeout(createNotification3, random(100000));
}
function fifthNotification(){
  setTimeout(createNotification4, random(100000));
}

function createNotification(){
for (let i = 0; i < 1; i++){
  notifi[i].show();
  }
}

function createNotification1(){
for (let i = 0; i < 2; i++){
  notifi[i].show();
  }
}
function createNotification2(){
for (let i = 0; i < 3; i++){
  notifi[i].show();
  }
}
function createNotification3(){
for (let i = 0; i < 4; i++){
  notifi[i].show();
  }
}
function createNotification4(){
for (let i = 0; i < 5; i++){
  notifi[i].show();
  }
}

//Class for the creation of posts
class post{
  constructor (x, y){
    this.x = x;
    this.y = y;
  }

  push (){
    this.x = width/3;
    this.y = this.y+200;
  }

  show1 (){
    image(img, windowWidth/4-25, this.y, 490, 180);
    fill (50,50,50);
    textSize (20);
    text (random (tekster), width/4-10, this.y+90);
    textSize (18);
    fill (65, 87, 144);
    text ('Friend', width/4+32, this.y+28);
    text (floor (random (1, 10)), width/4+90, this.y+28);
}
  show2 (){
    image(img, windowWidth/4-25, this.y, 490, 180);
    fill (50,50,50);
    textSize (20);
    text (input.value(), width/4-10, this.y+90);
    textSize (18);
    fill (65, 87, 144);
    text ('You', width/4+32, this.y+28);

  }
}


// Class for the creation of notification
class notification{
  constructor(x, p){
    this.x = x;
    this.y = p;
  }

  push1(){
    this.x = width/2;
    this.y = this.y;
  }

  show(){
    image(noti, width/6-205, this.y+450, 275, 100);
    text ('Friend'+ ' '+ floor(random(500)) + ' ' + random(notiText), width/6-150, this.y+475, 200);

  }
}

class notification1{
  constructor(x, p){
    this.x = x;
    this.y = p;
  }

  push1(){
    this.x = width/2;
    this.y = this.y;
  }

  show(){
    image(noti, width/6-205, this.y+1000, 275, 100);
    text ('You'+' liked a post after looking at it for ' + floor(millis()/1000) + ' seconds.', width/6-150, this.y+1020, 200);
  }
}
