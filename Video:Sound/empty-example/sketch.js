var song;
var vid;

function setup() {
vid=createVideo('ibiza.mp4', vidloader);

}

function vidloader(){
  vid.play();
  vid.position(200,80);
  vid.size(600,600);
}
function draw(){
background(255,225,6);
}
