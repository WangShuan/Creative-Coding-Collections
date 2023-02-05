function setup() {
	createCanvas(windowWidth, windowHeight-56);
	r = random(0,255)
	maxH = height-10
	frameRate(1)
	noStroke()
	textSize(36)
}
let r,maxH;
function draw() {
	background(0);
	translate(20,20)
	
	let s = 60
	for(let i = 0;i<second();i++){
		fill(255,255/60*i,200)
		circle(map(i,0,60,0,width), 0,10)
	}
	
	let m = 60
	for(let i = 0;i<minute();i++){
		fill(255/60*i,255,100)
		rect(map(i,0,60,0,maxH), map(i,0,60,30,maxH), 20,10,i/6)
	}
	
	let h = 24
	for(let i = 0;i<hour();i++){
		fill(255/24*i,100,255)
		rect(map(i,0,24,0,r), map(i,0,24,100,maxH), 10,20,i/2)
	}
	
	let l = textWidth(hour()+":"+minute()+":"+second())
	fill(255)
	text(hour()+":"+minute()+":"+second(),width-l-40,height-40)
}
