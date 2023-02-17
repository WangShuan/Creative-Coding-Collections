const colors = ["#fabd94", "#c3ebde", "#a6d1f1", "#fdd8d9", "#fff3b5", "#d1b3ff"]
let starImg, noiseImg, sound1, sound2, sound3, sound4, sound5, sound6
let balls = []

function preload() {
	sound1 = loadSound("do.wav")
	sound2 = loadSound("re.wav")
	sound3 = loadSound("mi.wav")
	sound4 = loadSound("fa.wav")
	sound5 = loadSound("sol.wav")
	sound6 = loadSound("la.wav")
	starImg = loadImage("star.webp")
	noiseImg = loadImage("noise.jpg")
}

function setup() {
	createCanvas(windowWidth, windowHeight - 56);
	background(100);
	noStroke()

	let widths = []
	let sounds = [sound1, sound2, sound3, sound4, sound5, sound6]
	for (let i = 0; i < 6; i++) {
		widths.push(width / 6 * i)
		let ball = new Ball({
			p: createVector(width / 6 * i, 0),
			o: createVector(width / 6 * i, 0 + height / 4 * 3.5),
			bgc: colors[i],
			sound: sounds[i],
			index: i
		})
		balls.push(ball)
	}
}

let t = 0
let points = 0
let song = [0, 0, 4, 4, 5, 5, 4, 3, 3, 2, 2, 1, 1, 0, 4, 4, 3, 3, 2, 2, 1, 0, 0, 4, 4, 5, 5, 4, 3, 3, 2, 2, 1, 1, 0]
let stars = []
function draw() {
	background(255)
	textSize(24)
	fill(0)
	text("points:" + points, 40, 40)
	for (let i = 0; i < balls.length; i++) {
		let ball = balls[i]
		fill(ball.bgc)
		rect(width / 6 * i, height / 4 * 3, width / 6 * (i + 1), height)

		push()
		translate(ball.o.x, ball.o.y)
		fill(0)
		textSize(20)
		textStyle(BOLD)
		text(ball.index + 1, 45, 60)
		pop()
	}

	balls[song[t % song.length]].update()
	balls[song[t % song.length]].draw()

	push()
	blendMode(MULTIPLY)
	image(noiseImg, 0, 0, width, height)
	pop()

	for (let star of stars) {
		star.x += star.vx
		star.y += star.vy
		if (star.x > width) {
			star.vx = -star.vx
		}
		if (star.y > height / 4 * 3 - 50) {
			star.vy = -star.vy
		}
		if (star.x < 0) {
			star.vx = -star.vx
		}
		if (star.y < 0) {
			star.vy = -star.vy
		}
		image(starImg, star.x, star.y, star.r, star.r)
	}
}

function keyPressed() {
	for (let i = 0; i < balls.length; i++) {
		let n = i + 1
		if (key == n.toString()) {
			let d = p5.Vector.dist(balls[i].p, balls[i].o)
			if (d < 50) {
				balls[i].p.y = 0
				balls[i].playSound(balls[i].sound)
				t += 1
				points += 10
				if (points > 1 && points % 30 == 0) {
					stars.push({
						x: random(0, width),
						y: random(0, height / 4 * 3 - 50),
						r: 50,
						vx: 3 + points / 15,
						vy: 3 + points / 15
					})
				}
				if (points > 1 && points % 350 == 0) {
					stars.push({
						x: random(0, width),
						y: random(0, height / 4 * 3 - 50),
						r: 75,
						vx: 3 + points / 15,
						vy: 3 + points / 15
					})
				}
			}
			balls[i].ts = frameCount
		}
	}
}

function test() {
	fill("yellow")
	rect(0, 0, width, height)
}

function mousePressed() {
	if (mouseY > 56) {
		location.reload();
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight - 56);
}