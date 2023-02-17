function setup() {
	createCanvas(windowWidth, windowHeight - 56);
	background(0)
	frameRate(10)
	colorMode(HSB, 100)
}

let x = 60, y = 60
function draw() {
	let circleSize = 100, space = 10
	fill(255)
	stroke(0, 50)
	strokeWeight(10)
	rectMode(CENTER)
	rect(x, y, circleSize)
	for (let i = 0; i < 60; i++) {
		fill(map(mouseX, 0, width, 0, 100), map(i, 0, 60, 50, 100), map(i, 0, 60, 50, 100))
		noStroke()
		circle(x + random(-40, 40), y - random(-40, 40), random(3, 10))
	}
	x += circleSize + space
	if (x > width) {
		x = 60
		y += circleSize + space
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight - 56);
}