class Ship {
	constructor(args) {
		this.p = createVector(width / 2, height / 2)
		this.color = color(random(colors))
	}
	draw() {
		push()
		translate(this.p.x, this.p.y)
		rectMode(CENTER)
		fill(this.color)
		rect(0, 0, 30)
		pop()
	}
	update() {
		if (key == "w") {
			this.p.y -= 5
		}
		if (key == "s") {
			this.p.y += 5
		}
		if (key == "a") {
			this.p.x -= 5
		}
		if (key == "d") {
			this.p.x += 5
		}
	}
}