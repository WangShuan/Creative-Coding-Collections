const colors = ["pink", "#fabd94", "gold", "#c3ebde", "#a6d1f1"]
let mic, capture, myTracker;

function setup() {
	createCanvas(windowWidth, windowHeight - 56);
	background(255)
	noStroke()

	capture = createCapture(VIDEO);
	capture.size(windowWidth, windowHeight - 56);
	capture.position(-windowWidth, 0);
	capture.id("myVideo")

	myTracker = new tracking.ColorTracker(['yellow']) //追蹤特定顏色
	tracking.track("#myVideo", myTracker) // 綁定影片
	myTracker.on('track', updateData)

	mic = new p5.AudioIn()
	mic.start()
}

let data
function updateData(e) {
	data = e.data
}

let arr = []
function draw() {
	translate(windowWidth, 0)
	scale(-1, 1)

	let micLv = mic.getLevel()
	background('skyblue');
	if (micLv > 0.02) {
		arr.push({
			x: random(0, windowWidth),
			y: random(0, windowHeight - 56),
			r: random(30, 50)
		})
	}

	if (data) {
		let t, o
		for (let k = 0; k < arr.length; k++) {
			push()
			translate(arr[k].x, arr[k].y)
			fill(colors[k % 5])
			circle(0, 0, arr[k].r)
			fill(255)
			arc(0, 0, arr[k].r / 2, arr[k].r / 2, 0, PI)
			fill(0)
			arc(0, 0, arr[k].r / 3, arr[k].r / 3, 0, PI)

			stroke(colors[k % 5])
			noFill()
			for (let j = 0; j < 8; j++) {
				rotate(PI / 4 + arr[k].r * noise(arr[k].r))
				beginShape()
				for (let i = 0; i < arr[k].r / 2; i++) {
					strokeWeight(arr[k].r / 15)
					vertex(arr[k].r / 2 + i, noise(i + frameCount / 10) * 10)
				}
				endShape()
			}
			pop()

			for (var i = 0; i < data.length; i++) {
				push()
				stroke('red')
				line(data[i].x, data[i].y, data[i].x, data[i].y + 5)
				line(data[i].x, data[i].y, data[i].x + 5, data[i].y)
				line(data[i].x, data[i].y, data[i].x, data[i].y - 5)
				line(data[i].x, data[i].y, data[i].x - 5, data[i].y)
				pop()
				t = createVector(data[i].x, data[i].y)
				o = createVector(arr[k].x, arr[k].y)
				if (p5.Vector.dist(t, o) < 20) {
					gone(arr[k])
				}
			}
		}
	}
}

function gone(o) {
	o.r -= 5
	if (o.r < 0) {
		o.r = 0
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight - 56);
}