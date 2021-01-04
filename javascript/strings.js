/*
Samantha Meznarich
Week 3 - Typography

Still trying to understand text around a circle - base code supplied by Processing API
*/


var m = "mountains";
var sizeLetter;
var s = "sun sun sun sun  sun sun sun sun";
var cloud = "CLOUD";
var r = 50;

function setup() {
	var canvas = createCanvas(615, 350);
	background(255);
	sky();
	ground();
	mountains(10, 250);
	mountains(210, 250);
	mountains(410, 250);
		clouds(50, 100);
	clouds(150, 115);
		clouds(300, 75);
	clouds(415, 125);
	sun();
}

function draw() {
}

function mountains(startX, startY) {
	fill(90, 47, 59);
	sizeLetter=20;
	for (let i=0; i<m.length; i++) {
		var c = m.charAt(i);
		textSize(sizeLetter);
		if (i+1 < (m.length/2)) {
			sizeLetter+=15;
		}
		else {
			sizeLetter-=15;
		}
		text(c, startX, startY);
		startX=startX+textWidth(c);
	}
}
function sky () {
	noStroke();
	fill(135, 206, 250);
	rect(0,0, width, 300);
}
function sun() {
	var arclength = 0;
	translate(500, 100);
	fill(255, 255, 0);
	ellipse(500, 70, r*2, r*2);
	var currentChar;
	for (let i = 0; i<s.length; i++)
	{
		currentChar = s.charAt(i);
		var w = textWidth(currentChar);
		arclength+=w/2;
		var theta = PI + arclength/r;
		push();
		translate(r*cos(theta), r*sin(theta));
		rotate(theta+PI/2); 
		fill(255, 255, 102);
		textAlign(CENTER);
		smooth();
		text(currentChar,0,0);
		pop();
		arclength += w/2;
	}
}
function clouds(startX, startY) {
	fill(255);
	sizeLetter=20;
	for (let i=0; i<cloud.length; i++) {
		var c = cloud.charAt(i);
		textSize(sizeLetter);
		if (i+1 < (cloud.length/2)) {
			sizeLetter+=10;
		}
		else {
			sizeLetter-=10;
		}
		text(c, startX, startY);
		startX=startX+textWidth(c);
	}
}
function ground() {
	noStroke();
	fill(126, 200, 80);
	rect(0,250, width, 150);
}