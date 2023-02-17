let oIpt, oIpt2, oBtn
let arr = []
function setup() {
	createCanvas(windowWidth, windowHeight - 56);
	background(5);
	oIpt = createInput().attribute('placeholder', 'Enter word and submit!');
	oIpt.position(width / 2 - 65, 20 + 56);
	oIpt.addClass("form-control form-control-sm input-submit")

	oIpt2 = createInput().attribute('placeholder', 'Enter word to create!');
	oIpt2.position(20, 20 + 56);
	oIpt2.input(enterInput)
	oIpt2.addClass("form-control form-control-sm input-create")

	oSubmit = createButton('SUBMIT')
	oSubmit.position(width / 2 - 65 + 168, 20 + 56);
	oSubmit.mousePressed(submitInput)
	oSubmit.addClass("btn btn-sm btn-dark btn-submit")

	oBtn = createButton('RESET')
	oBtn.position(width - 80, 20 + 56);
	oBtn.mousePressed(resetCanvas)
	oBtn.addClass("btn btn-sm btn-dark btn-reset")

	colorMode(HSB, 100)
}
function enterInput() {
	arr.push({
		x: random(width),
		y: random(height),
		text: this.value(),
		r: int(random(3, 20)),
		color: color(random(100), random(80, 100), random(70, 100)),
		size: random(50, 100)
	})
	this.value("")
}
function submitInput() {
	arr.push({
		x: random(width),
		y: random(height),
		text: oIpt.value(),
		r: int(random(3, 20)),
		color: color(random(100), random(80, 100), random(70, 100)),
		size: random(50, 100)
	})
	oIpt.value("")
}

function draw() {
	background(255)
	angleMode(DEGREES);
	for (let i = 0; i < arr.length; i++) {
		let txt = arr[i]
		for (let t = 0; t < txt.r; t++) {
			push()
			textSize(txt.size)
			translate(txt.x, txt.y)
			rotate((360 / txt.r) * t)
			fill(txt.color)
			text(txt.text, 0, 0)
			pop()
		}
	}
}
function resetCanvas() {
	arr = []
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight - 56);
}