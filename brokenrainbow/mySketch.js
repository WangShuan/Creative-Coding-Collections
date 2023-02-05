function setup() {
	createCanvas(500, 500);
	background(0);
	
	let r1 = color("red")
	let r2 = color("orange")
	let r3 = color("yellow")
	let r4 = color("green")
	let r5 = color("blue")
	let r6 = color("white")

	blendMode(SCREEN)
	colorMode(HSB, 100);
	noStroke()
	for(let i=0;i<width*2;i+=100){
		r1.setAlpha(10)
		fill(r1)
		circle(0, height/2,i);
	}
	for(let i=0;i<width*2;i+=100){
		r2.setAlpha(10)
		fill(r2)
		circle(width/2, 0,i);
	}
	for(let i=0;i<width*2;i+=100){
		r3.setAlpha(10)
		fill(r3)
		circle(width, height/2,i);
	}
	for(let i=0;i<width*2;i+=100){
		r4.setAlpha(10)
		fill(r4)
		circle(width/2, height,i);
	}
	for(let i=0;i<width*2;i+=100){
		noStroke()
		r5.setAlpha(10)
		fill(r5)
		circle(width/2, height/2,i);
	}
	
	blendMode(OVERLAY)
	for(let i=0;i<width*2;i+=500){
		r6.setAlpha(255)
		fill(r6)
		circle(width/2, height/2,i);
	}
}


function draw(){
	background(0,10);
	
	blendMode(EXCLUSION)
	for(let i=0;i<width*2;i+=100){
		let r7 = color("white")
		r7.setAlpha(255)
		stroke(r7)
		let s = random(0,10000)
		strokeWeight(s)
		line(width/2, 0,i,i);	
		line(0, height/2,i,i);	
	}
	
	if(mouseIsPressed){
	  noLoop()
	}
}

