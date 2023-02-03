let oIpt,oIpt2,oBtn
let arr = []
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(5);
	oIpt = createInput().attribute('placeholder', 'Enter word to submit');
	oIpt.position(width/2-65, 20);
  oIpt.size(130);
	
	oIpt2 = createInput().attribute('placeholder', 'Enter word to create!');
	oIpt2.position(20, 20);
  oIpt2.size(130);
	oIpt2.input(enterInput)
	
	oSubmit = createButton('SUBMIT')
	oSubmit.position(width/2-65+138, 20);
	oSubmit.mousePressed(submitInput)
	
	oBtn = createButton('RESET')
	oBtn.size(60)
	oBtn.position(width-80, 20);
	oBtn.mousePressed(resetCanvas)
	
	colorMode(HSB,100)
}
function enterInput() {
  arr.push({
	  x:random(width),
		y:random(height),
		text: this.value(),
		r: int(random(3,20)),
		color: color(random(100),random(80,100),random(70,100)),
		size: random(50,100)
	})
	this.value("")
}
function submitInput() {
  arr.push({
	  x:random(width),
		y:random(height),
		text: oIpt.value(),
		r: int(random(3,20)),
		color: color(random(100),random(80,100),random(70,100)),
		size: random(50,100)
	})
	oIpt.value("")
}

function draw() {
	background(255)
	angleMode(DEGREES);
	for(let i=0;i<arr.length;i++){
	  let txt = arr[i]
		for(let t=0;t<txt.r;t++){
			push()
			textSize(txt.size)
			translate(txt.x,txt.y)
			rotate((360/txt.r)*t)
			fill(txt.color)
			text(txt.text,0,0)
			pop()
		}
	}
}
function resetCanvas() {
  arr = []
}