function setup() {
	createCanvas(800, 800);
	r = random(255)
}
let r
function draw() {
	background(0,99);
	fill(0)
	
	let h = 24

	for(let i = 0;i<hour();i++){
		fill(255/24*i,25,100)
		let maxH = i*i*r
		if(maxH>height){
		  maxH = i*i*r%height
		}
		rect(i*100, maxH, h,h,i/2)
		h*=0.99
	}
	
	noStroke()
	let m = 60
	
	for(let i = 0;i<minute();i++){
		fill(255/24*i,255,100)
		let h = i*i*r
		if(h>height){
		  h = i*i*r%height
		}
		rect(i*20, h, m,m,i/2)
		m*=0.99
	}
	
	let s = 60
	
	for(let i = 0;i<second();i++){
		fill(255,255/24*i,100)
		let h = i*i*r
		if(h>height){
		  h = i*i*r%height
		}
		circle(h,0+i*30,s)
		s*=0.99
	}
}
