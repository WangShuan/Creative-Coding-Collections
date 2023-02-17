let colors = "9800fd-1554dc-00a300-e14b4b-b30aad-e2753f-0ae297-74e75b-ddeb1e-FBDFB1".split("-").map(c => "#" + c)
let balls = []
let bullets = []
let ship
let oBtn
let oBtn2
let t = 0

function setup() {
	createCanvas(windowWidth, windowHeight - 156);
	background("#8FAFF5");
	noStroke()
	createBalls()

	ship = new Ship({})

	oBtn = createButton("Add Cells")
	oBtn.position(20, 66)
	oBtn.mousePressed(createBalls)
	oBtn.style("height", "30px")
	oBtn.addClass("btn btn-sm btn-dark")

	oBtn2 = createButton("Change Face")
	oBtn2.position(100, 66)
	oBtn2.mousePressed(changeMode)
	oBtn2.style("height", "30px")
	oBtn2.addClass("btn btn-sm btn-dark")
}

function changeMode() {
	t++
	if (t % 2) {
		for (let ball of balls) {
			ball.changeMode("sad")
		}
	} else {
		for (let ball of balls) {
			ball.changeMode("happy")
		}
	}
}

function createBalls() {
	for (let i = 0; i < 20; i++) {
		let ball = new Ball({
			r: random(20, 50),
			p: createVector(random(width - 50), random(height - 50))
		})
		balls.push(ball)
	}
}

function draw() {
	background("#8FAFF5");
	for (let ball of balls) {
		ball.draw()
		ball.update()

		for (let bullet of bullets) {
			if (!ball.isDead && !bullet.isDead) {
				let isHit = ball.inRange(bullet.p.x, bullet.p.y)
				if (isHit) {
					ball.changeMode("sad")
					ball.v = p5.Vector.random2D().mult(3)
					ball.r -= 10
					if (ball.r < 15) {
						ball.isDead = true
					}
					bullet.isDead = true
				}
			}
			if (ball.isDead && bullet.isDead) {
				const index = balls.indexOf(ball);
				balls.splice(index, 1);
			}
		}
	}

	if (keyIsPressed) {
		ship.update()
	}
	ship.draw()

	for (let bullet of bullets) {
		bullet.draw()
		bullet.update()
	}
	textSize(20)
	text(balls.length + " Monster left...", width - 200, 30)
}

function mousePressed() {
	if (mouseY > 0) {
		let bullet = new Bullet({})
		bullets.push(bullet)
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight - 156);
}