//void becomes function
//data types become var

var rectX=50;
var ovalX=0;

function setup() {
	var canvas = createCanvas(500, 400);
	frameRate(1);
}
function draw() {
	background (0, 21, 64);
	signature();
	lake();
	cityScape();
	stars();
	moon();
}
function cityScape(){
	fill(0);
	noStroke();
	rect(0, 300, 500, -50);
	rect(rectX, 300, 50, -80);
	rect(rectX*2, 300, 50, -100);
	rect(rectX*3, 300, 50, -75);
	rect(rectX*4, 300, 50, -95);
	rect(rectX*5, 300, 50, -65);
	rect(rectX*7, 300, 50, -80);
	rect(rectX*8, 300, 50, -115);
}
function moon(){
	fill(255,253,208);
	noStroke();
	ellipse(100,100,100,100);
}
function lake(){
	//ripples
	noFill();
	stroke(192,192,192);
	ovalX=40;
	for (let i=0; i<10; i+=1) {
		strokeWeight(0.1/i);
		ellipse(250, 350, ovalX*i, ovalX*i/2);
	}
	//boat
	fill(1);
	quad(225, 335, 235, 350, 265, 350, 275, 335);
	strokeWeight(1);
	stroke(0);
	//fishing line
	line(260, 335, 280, 325);
	//man
	ellipse(250, 335, 8,8);
	ellipse(252, 330, 4, 4);
}
function stars(){
	fill(253,253,208);
	for (let i=0; i<50; i++)
		ellipse(random(500), random(180), 5, 5);
}
function signature() {
	textSize(10);
	text("ACSCompSciPandemic2020", 360, 365); 
	textSize(20);
	text("Sam Meznarich", 350, 390); 
}