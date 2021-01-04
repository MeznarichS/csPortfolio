function setup() {
  noLoop();
  createCanvas(500, 400);
}


var count = [6];


function draw()
{
	background(255);
	var dice = [];
	for (let i=0; i<6; i++) {
		dice[i] = new Die (i*75+25, 50);
		dice[i].roll();
		count[dice[i].getRoll()-1]++;
	}
	rollCounter();
}
function rollCounter() {
	textSize(16);
	fill(0);
	for (let i=0; i<6; i++) {
		text("# of "+(i+1)+"s: "+count[i], 50, height - 150 + (i*20));
	}
}
function mousePressed()
{
	redraw();
}



class Die //models one single dice cube
{
	var x, y, diceNum;
	
	var dotX, dotY;
	
    var dieSize = 60;
	var dotSize = dieSize/5;
	var space = dotSize*1.5;
	Die(x, y) //constructor
	{
		this.x = x;
		this.y = y;
	}
	roll()
	{
		diceNum = (int) (random(6) + 1);
		show(diceNum);
	}
	show(int dots)
	{
		noStroke();
		if (dots == 1) {fill(255, 173, 173)}
		else if (dots == 2) {fill(255, 214, 165)}
		else if (dots == 3) {fill(253, 255, 182)}
		else if (dots == 4) {fill(202, 255, 191)}
		else if (dots == 5) {fill(155, 246, 255)}
		else {fill(160, 196, 255)}
		rect(x, y, dieSize, dieSize);
		fill(50);
		//center dot, whether present or not
		dotX = x+(dieSize/2);
		dotY = y+(dieSize/2);
		//assigning dots based on what was rolled
		if (dots == 1 || dots == 3) {
			ellipse (dotX, dotY, dotSize, dotSize);
			if(dots == 3){
				ellipse(dotX-space, dotY-space, dotSize, dotSize);
				ellipse(dotX+space, dotY+space, dotSize, dotSize);
			}
		}
		else if (dots != 6) { //2, 4, 5
			ellipse (dotX-space, dotY-space, dotSize, dotSize);
			ellipse (dotX+space, dotY+space, dotSize, dotSize);
			if (dots != 2) { //4, 5
				ellipse (dotX+space, dotY-space, dotSize, dotSize);
				ellipse (dotX-space, dotY+space, dotSize, dotSize);
				if (dots == 5) {
					ellipse (dotX, dotY, dotSize, dotSize);
				}
			}
		}
		else { //if 6
			ellipse (dotX-space, dotY-space, dotSize, dotSize);
			ellipse (dotX+space, dotY+space, dotSize, dotSize);
			ellipse (dotX+space, dotY-space, dotSize, dotSize);
			ellipse (dotX-space, dotY+space, dotSize, dotSize);
			ellipse (dotX+space, dotY, dotSize, dotSize);
			ellipse (dotX-space, dotY, dotSize, dotSize);
		}
	}
	getRoll() {
		return diceNum;
	}
}
