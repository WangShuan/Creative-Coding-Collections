function setup() {
	createCanvas(500, 500);
	background(0);
	colorMode(HSB,100)
}

function draw() {
	push()
	for(let i=0;i<5;i++){
		blendMode(BLEND);
		fill(0)
		rect(0,0,100,500)		
		
		blendMode(SCREEN);
		fill(map(i,0,5,0,100),100,100,random(0,30))
		for(let j=0;j<500;j++){
			rect(random(j),random(500),random(100),random(100))
		}
		
		translate(100,0)
	}	
	pop()
	
	for(let i=0;i<5;i++){
		blendMode(DIFFERENCE);
		fill(255)
		for(let j=0;j<100;j++){
			rect(random(500),random(height),random(j,20),random(50))
		}
	}	
	noLoop()
}