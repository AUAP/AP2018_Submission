var x = ['Normal', 'BLIV DER!', 'Duuumme ulv!!',
'MØGDYR!!!','close', 'almost there',
'Back to normal']
function setup() {
	createCanvas(windowWidth, windowHeight);
}
function draw() {
	textSize(15);
	text(x[0], 20, 20);
push(); //1
	fill(141, 236, 120);
	textSize(25);
	text(x[1], 100, 50);
push(); //2
	fill(255, 226, 0);
	textSize(35);
	text(x[2], 100, 90);
push(); //3
	fill(199, 44, 58);
	textSize(50);
	text(x[3], 100, 150);
pop(); //3
	text(x[4], 20, 200);
pop(); //2
	text(x[5], 20, 250);
pop(); //1
	text(x[6], 20, 300);
}
