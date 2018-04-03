var sourceText = "Life, is, short, and, art, long";
var words = sourceText.split(",");
function setup() {
  createCanvas(1000, 1000);
  noLoop();
}
function draw() {
  background(50);
  textSize(72);
  textAlign(CENTER, CENTER);
  for (var i = 0; i < words.length; i++) {
    fill(255);
    text(words[i], random(width), random(height));
  }
}
