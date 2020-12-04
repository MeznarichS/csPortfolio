var startY;
var startX;
var endY;
var endX;
var r;
var g;
var b;
function setup() {
	createCanvas(400, 400);
	background(0);
	strokeWeight(2);
	startY=10;
	startX=width/2;
	endY=200;
	endX=width/2;
	r = 150;
	g = 150;
	b = 150;
}
function draw() {
	stroke(r, g, b);
	while (endX<width) {
		endY=startY+random(1, 10);
		endX=startX+random(-9, 9);
		line(startX, startY, endX, endY);
		line(startY, startX, endY, endX);
		startX=endX;
		startY=endY;
	}
}
function mousePressed() {
	startY=10;
	startX=width/2;
	endY=200;
	endX=width/2;
	r = random(256);
	g = random (256);
	b = random (256);
	background(0);
}
