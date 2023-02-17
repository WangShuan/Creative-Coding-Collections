let arr = []

function setup() {
	createCanvas(windowWidth, windowHeight - 56);
	background(0);
	noStroke()
	colorMode(HSB, 100)

	for (let x = 0; x < width; x += 30) {
		for (let y = 0; y < width; y += 30) {
			arr.push({
				x: x,
				y: y
			})
		}
	}
}

function draw() {
	for (let i = 0; i < arr.length; i++) {
		let p = arr[i]

		fill((i + mouseX / 10) % 100 - 10, 80, mouseY % 100 + 50)
		circle(p.x, p.y, sin(i));

		if (random(1) > 0.5) {
			p.x += noise(p.x / 50, p.y, 1000) * 5
			p.y += noise(p.x, p.y / 50, 2000) * 5
		} else {
			p.x -= noise(p.x, p.y / 50, 3000) * 5
			p.y -= noise(p.x / 50, p.y, 4000) * 5
		}
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight - 56);
}