var tree = [];
var leaves = [];
var root;
var count = 0;

// The rotation variable for branchA and branchB
var rotc = 20;
// The thickness variable for all the branches
var c = 8;
/* These two variables defines the two colors, that the fill color
for the leaves should range between */
var fromCol;
var toCol;

/* This variable is for randomizing the x-position for the tree. */
var ranX;

function setup() {
  frameRate(13);
  background('white');
  createCanvas(windowWidth, windowHeight);
  ranX = random(0,width);
  /* Creating a vector for the start point for the root of the tree */
  var a = createVector(ranX, height);
  /* Creating a vector for the end point for the root of the tree */
  var b = createVector(ranX, height-175);
  /* Creating a variable for the root of the tree and defining the first
  iteration of the tree as the root.*/
  var root = new Branch(a, b, c);
  tree[0] = root;
}

function draw() {

  /* Displaying all the branches for tree and adding 1 to a counter, that
  controls how far the tree grow */
    for (var i = 0; i < tree.length; i++) {
      tree[i].display();
      count++;
    }

/* If the counters is less than 200, the program pushes branchb into the tree []
array. There is also a element of chance whether or not branchA is pushed into
the tree[] array. */
  if (count<200){
    for (var i = tree.length - 1; i >= 0; i--) {
      if (!tree[i].finished) {
          tree.push(tree[i].branchB());
        if (random(12)>1){
          tree.push(tree[i].branchA());
        }
      }
      tree[i].finished = true;
    }
  }

/* Overall, this if-statement defines, when the leaves should start growing.
We define a variable with the end point vector  for all the branches and
pushes it into the array called leaves[] */
  if (count > 100) {
      for (var i = 0; i < tree.length; i++) {
        if (!tree[i].finished) {
          var leaf = tree[i].end.copy();
          leaves.push(leaf);
        }
      }
    }

/* This for-loop loops through all the end points for the final branches and
draws an ellipse at each end point. The fill color is defined as a color between
 the two variable fromCol and toCol using the lerpColor(). There is an iteration
for a positive rotation and an iteration for a negative rotation for the leaves.
This is done to make the crown of tree appear more full. */
    for (var i = 0; i < leaves.length; i++) {
        noStroke();
        // The noloop() prevent the fill color from changing constantly
        noLoop();
        //Color = yellow
        fromCol = color(255,255,random(0,104));
        //Color = orange
        toCol = color (255,random(69,165),50);
        var interA = lerpColor(fromCol,toCol,random(0.1,0.8))
        fill(interA)
        ellipse(leaves[i].x, leaves[i].y, 3.5, 5.5);
        /*There is an iteration for a positive rotation and an iteration for
        a negative rotation. This is done to make the tree apear more lifelike */
        push();
        ellipseMode(CORNER)
        angleMode(DEGREES);
        rotate(3)
        ellipse(leaves[i].x, leaves[i].y, 3.5, 5.5);
        pop();
        push();
        ellipseMode(CORNER)
        angleMode(DEGREES);
        rotate(-3)
        ellipse(leaves[i].x, leaves[i].y, 3.5, 5.5);
        pop();
    }
}

/* This functions is for saving a screenshot of the program by pressing s
and reloading the window by pressing r. */
function keyPressed(){
  if(keyCode === 83){
    saveCanvas();
  }
  if(keyCode === 82){
    window.location.reload();
  }
}

class Branch {

/* Setting up the constructor. It includes a begin point as a vector, an
end point as a vector and thickness for the branches. */
  constructor(begin,end,thick){
    this.begin = begin;
    this.end = end;
    this.thick = thick;
    this.finished = false;

  }

/* This functions display a branch as a line, which has the start coordinates
from the start point vector and end coordinates from the end point vector. */
  display(){
    strokeWeight(this.thick);
    stroke(150,0,0);
    line(this.begin.x,this.begin.y,this.end.x,this.end.y);
  }

// This branch rotates to the right.
  branchA(){
    /* creating a new direction for a new branch by subtracting the end point
    and the begin point.*/
    var dir = p5.Vector.sub(this.end, this.begin);
    // rotating the direction vector using the rotational variable.
    dir.rotate(radians(rotc));
    // This scales down the length of the next branch.
    dir.mult(random(0.5,0.8))
    this.thick = this.thick*0.67;
    /* Creating a new end point as a vector by adding the end point from a
    previous branch and the new dir*/
    var newEnd = p5.Vector.add(this.end, dir);
    // This scales down the thickness of the next branch.
    var newThick = this.thick*0.67;
    /* Creating a new variable that equals a new branch that has the previous
    branch's end point as a start point, the newEnd as new end point and
    newThick as the thickness. */
    var nextBranchA = new Branch(this.end, newEnd, newThick);
    /* This returns the new branch, which theprogram uses to calculate a new
    begin, new end and new thickness for the next branch. */
    return nextBranchA;
  }
  // This branch rotates to the left.
  branchB(){
    var dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(radians(-rotc));
    dir.mult(random(0.5,0.8));
    var newEnd = p5.Vector.add(this.end, dir);
    var newThick = this.thick*0.67;
    var nextBranchB = new Branch(this.end, newEnd, newThick);
    return nextBranchB;
  }
}
