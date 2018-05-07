var video;
var button1;
var snapshots = [];
var x = 50; //x coordinate (of first picture)
var y = 270; //y coordinate (of first picture)
var w = 213; //width of picture
var h = 120; //height of picture
var likes = ['1','3','5','9','10','11','25','42','67','90'];
var likecount;
var img;

function preload() {
  img = loadImage('like.png');
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  likecount = likes;

  video = createCapture(VIDEO);
  video.size(320,240);
  video.position(windowWidth/2-160,0);

  button1 = createButton('Post');
   button1.mousePressed(takepicture);
   button1.position(windowWidth/2+180,215);
   button1.style("display","inline-block");
   button1.style("color","#fff");
   button1.style("padding","5px 8px");
   button1.style("text-decoration","none");
   button1.style("font-size","0.9em");
   button1.style("font-weight","normal");
   button1.style("border-radius","3px");
   button1.style("border","none");
   button1.style("text-shadow","0 -1px 0 rgba(0,0,0,.2)");
   button1.style("background","#4c69ba");
   button1.style("background","-moz-linear-gradient(top, #4c69ba 0%, #3b55a0 100%)");
   button1.style("background","-webkit-gradient(linear, left top, left bottom, color-stop(0%, #3b55a0))");
   button1.style("background","-webkit-linear-gradient(top, #4c69ba 0%, #3b55a0 100%)");
   button1.style("background","-o-linear-gradient(top, #4c69ba 0%, #3b55a0 100%)");
   button1.style("background","-ms-linear-gradient(top, #4c69ba 0%, #3b55a0 100%)");
   button1.style("background","linear-gradient(to bottom, #4c69ba 0%, #3b55a0 100%)");
   button1.style("filter","progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c69ba', endColorstr='#3b55a0', GradientType=0 )");
}

function takepicture() {
  x = x + 300;
  if (x > 1000) { //making the pictures shift to the second row
    x = 350; // x coordinate for the first picture in the row
    y = y + h + 100;
    }
  if (y > 500) {
    x = 350;
    y = 270;
  }

  var snapshot = new picture(video.get(),x,y,snapshots.length,likecount);
  snapshots.push(snapshot);
}

function deletepicture(index) {
  delete snapshots[index];
}

function draw() {
background(245);
fill(250);
noStroke();
rect(windowWidth/4.5,windowHeight/2.9,870,450);

 for (var i = 0; i < snapshots.length; i++){
    if(snapshots[i] != undefined){
      snapshots[i].display();
    }
  }
}

class picture {
  constructor(snapshot,xpos,ypos,i,likecount) {
    this.x = xpos;
    this.y = ypos;
    this.pic = snapshot;
    this.index = i;
    this.likecount = likes[floor(random(10))];
    this.button = createButton('Delete');
     this.button.mousePressed(function() { deletepicture(i);});
     this.button.position(this.x,this.y+130);
     this.button.style("display","inline-block");
     this.button.style("color","#fff");
     this.button.style("padding","5px 8px");
     this.button.style("text-decoration","none");
     this.button.style("font-size","0.9em");
     this.button.style("font-weight","normal");
     this.button.style("border-radius","3px");
     this.button.style("border","none");
     this.button.style("text-shadow","0 -1px 0 rgba(0,0,0,.2)");
     this.button.style("background","#4c69ba");
     this.button.style("background","-moz-linear-gradient(top, #4c69ba 0%, #3b55a0 100%)");
     this.button.style("background","-webkit-gradient(linear, left top, left bottom, color-stop(0%, #3b55a0))");
     this.button.style("background","-webkit-linear-gradient(top, #4c69ba 0%, #3b55a0 100%)");
     this.button.style("background","-o-linear-gradient(top, #4c69ba 0%, #3b55a0 100%)");
     this.button.style("background","-ms-linear-gradient(top, #4c69ba 0%, #3b55a0 100%)");
     this.button.style("background","linear-gradient(to bottom, #4c69ba 0%, #3b55a0 100%)");
     this.button.style("filter","progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c69ba', endColorstr='#3b55a0', GradientType=0 )");
  }

  display() {
    image(this.pic, this.x, this.y,w,h)
    image(img, this.x+180, this.y+125,30,30);
    fill(250);
    rect(this.x+155, this.y+135, 23, 20);
    rect(this.x, this.y+170, 210, 20);
    textStyle(BOLD);
    textSize(20);
    textFont('Helvetica');
    textAlign(LEFT);
    fill(0);
    text(this.likecount, this.x+155, this.y+150);
    if (this.likecount <= 10){
      textSize(12);
      fill(0);
      text('Are you sure you want to keep this?', this.x, this.y+180);
    }
  }
}
