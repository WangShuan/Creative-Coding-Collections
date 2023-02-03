function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0)
}

let x = 60, y = 60
function draw() {
	let circleSize = 100,space = 10
	fill(random(50,255))
	stroke(0,50)
	strokeWeight(10)
	rectMode(CENTER)
	rect(x,y,circleSize)
	for(let i=0;i<60;i++){
		fill(random(0,255),random(0,255),mouseX)
		noStroke()
		circle(x+random(-40,40),y-random(-40,40),random(3,10))
	}
	x+=circleSize+space
	if(x>width){
	  x=60
		y+=circleSize+space
	}	
}