function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	if (windowWidth > 700) {
		s = 20
	} else {
		s = 10
	}
	for (let x = 0; x < width; x += width / s) {
		for (let y = 0; y < height; y += width / s) {
			arr.push({
				x: x,
				y: y
			})
		}
	}

}
let arr = [], s
function draw() {
	background(0, 0.01);
	colorMode(HSB)
	for (let i = 0; i < arr.length; i++) {
		let p = arr[i]
		fill(noise(p.x / 300, p.y / 300) * 360, 80, 80)
		noStroke()
		circle(p.x, p.y, 1);
		p.x += noise(p.x / 200, p.y / 200, 100) - 0.5
		p.y += noise(p.x / 200, p.y / 200, 10000) - 0.5
	}
}