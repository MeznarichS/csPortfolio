var tomJer;

function setup() {
  createCanvas(400, 400);
  tomJer = new CatvMouse (100, 100);
  noCursor();
}

function draw() {
	background(155, 15, 2);
	noStroke();
	fill(194, 26, 0); //cartoon background
	ellipse(200, 200, 400, 400);
	fill(214, 67, 0);
	ellipse(200, 200, 300, 300);
	fill(255);
	textSize(18);
	textAlign(CENTER);
	fill(0);
	var j = 4;
	for(let i=0; i<4; i++) { //creates shadow for text
		text("Don't let Tom catch Jerry!", width/2-j, height/2+i);
		j--;
	}
	
	fill(255, 210, 75);
	text("Don't let Tom catch Jerry!", width/2, height/2);

	tomJer.move();
	tomJer.show();
}
class CatvMouse {
	var xpos; //x position of cat
	var ypos;
	var distanceX; //distance between mouseX and xpos
	var distanceY;
	var incX; //size of "step" in movement
	var incY;
	
  constructor (x, y) {
		xpos = x;
		ypos = y;
		incX=0;
		incY=0;
	}
  
	move() {
		//distance, ratio for smooth travel
		distanceX = abs(mouseX-xpos);
		distanceY = abs(mouseY-ypos);
		if (distanceY > distanceX) {
			incY = 1;
			incX = distanceX/distanceY;
		}
		else if (distanceX > distanceY) {
			incX = 1;
			incY = distanceY/distanceX;
		}
		else {
			incX = 1;
			incY = 1;
		}
		//direction
		if (mouseX > xpos) {
			xpos += incX;
		}
		else if (mouseX < xpos) {
			xpos -= incX;
		}
		if (mouseY > ypos) {
			ypos += incY;
		}
		else if (mouseY < ypos) {
			ypos -= incY;
		}
	}
	
  show() {
		cat(xpos, ypos);
		mouse(mouseX, mouseY);
		if (mouseX == xpos && mouseY == ypos) {
			caught();
			textSize(32);
			fill(155, 15, 2);
			text("Oh No!", width/2, height/2+50);
			text("Oh No!", width/2-1, height/2+50);
		}
	}
	
	cat(x, y) {
		noStroke();
		fill(128, 137, 144);
		ellipse(x, y, 40, 40);
		triangle(x-20, y, x-24, y-24, x, y-20);
		triangle(x+20, y, x+24, y-24, x, y-20);
		fill(243, 165, 152);
		triangle(x-14, y-2, x-18, y-18, x-2, y-14);
		triangle(x+14, y-2, x+18, y-18, x+2, y-14);
		stroke(0);
		strokeWeight(1);
		line (x-3, y+3, x-10, y);
		line (x-3, y+5, x-12, y+4);
		line (x-3, y+7, x-10, y+8);
		line (x+3, y+3, x+10, y);
		line (x+3, y+5, x+12, y+4);
		line (x+3, y+7, x+10, y+8);
		ellipse(x, y+5, 2, 2);
	}
	
	mouse (x, y) {
		noStroke();
		fill(192, 129, 41);
		ellipse(x, y, 20, 20);
		ellipse(x-10, y-5, 12, 17);
		ellipse(x+10, y-5, 12, 17);
		fill(244, 165, 148);
		ellipse(x-10, y-5, 6, 10);
		ellipse(x+10, y-5, 6, 10);
		fill(11, 6, 5);
		ellipse(x, y+5, 4, 3);
		stroke(11, 6, 5);
		strokeWeight(.75);
		line(x-5, y+5, x-15, y+3);
		line(x-5, y+5, x-15, y+6);
		line(x+5, y+5, x+15, y+3);
		line(x+5, y+5, x+15, y+6);	
	}
	
	
	//glitchy - works 10% of the time
	caught() {
		stroke(100);
			strokeWeight(3);
			line (xpos-22, ypos, xpos+3, ypos+25);
			line (xpos-22, ypos-20, xpos+18, ypos+20);
			line (xpos-2, ypos-20, xpos+23, ypos+5);	
		
		stroke(255);	
			strokeWeight(2);
			line (xpos-20, ypos, xpos+5, ypos+25);
			line (xpos-20, ypos-20, xpos+20, ypos+20);
			line (xpos, ypos-20, xpos+25, ypos+5);
	}
}
