var sourceText = "Aesthetic Programming";
var Paragraph;
var link;
var slider;
var button;
var h1;
var img;

function setup() {
    background(50,20,10);
  var myCanvas;
  myCanvas = createCanvas(600, 400);
  myCanvas.position(550, 50);

  // Header 1
  h1 = createElement('h1', 'Javascript header');
  h1.position(50, 150);
  h1.size(1000);

  // Link
  link = createA('https://en.wikipedia.org/wiki/HTML', 'Such link, much waw');
  link.position(100,300);

  //Paragraph

  Paragraph = createP("This is a paragraph created by javascript")
  Paragraph.position(50,100);
  Paragraph.style("font-family", "Garamond");
  Paragraph.style("ITALIC");
  Paragraph.style("font-size", "20pT");
  Paragraph.style("background-color", "#FF8200");
  Paragraph.style("color", "#FFFFFF");



  //unicorn -Image
  img=createImg("http://pre03.deviantart.net/ef42/th/pre/i/2011/260/3/5/dash_hooray_by_rainbowcrab-d49xk0d.png")
  img.position(400,200);
  img.size(300,300);

  // Button
  button = createButton("This is a Comic Sans button, click me!")
  button.size(200,50)
  button.position(35,240);
  button.mousePressed(changeBG);
  button.style("font-family", "ComicSansMs");

}


function changeBG(){
  var bu = random(100);
  background(bu);
}

function draw() {
  // These commands are applied to the graphics canvas as normal.
frameRate(100);

   fill(255);
   textSize(32);
   textAlign(CENTER, CENTER);
   var middle = sourceText.length / 2;
   var left = middle - ((mouseX / width) * middle);
   var right = middle + ((mouseX / width) * middle);
   text(
     sourceText.substring(left, right+1),
     width/2, height/2);
}

function mousePressed() {
  console.log(mouseX, mouseY);
}
