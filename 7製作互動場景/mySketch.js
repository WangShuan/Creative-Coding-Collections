function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	fishs.push({
		x:random(width),
		y:random(height),
		size:random(60,80),
		color: random(colors),
		v:random(0.5,1.5)
	})
	foods.push({
		x:random(width),
		y:random(height),
		size:random(5,10)
	})
}
let fishs = []
let foods = []
const colors = ["#9800fd","#1554dc","#00ff00","#e14b4b","#b30aad","#e2753f","#0ae297","#ddeb1e","#b6750b"]
function draw() {
	background("#31B0FA");
	for(let i=0;i<fishs.length;i++){
		drawFish(fishs[i])
		fishs[i].x-=abs(fishs[i].v)
		
		fishs[i].y-=fishs[i].v
		
		if(fishs[i].x<0){
		  fishs[i].x=width
		}
		
		if(fishs[i].y>height||fishs[i].y<0){
		  fishs[i].v=-fishs[i].v
		}
		
	}
	
	for(let k=0;k<fishs.length;k++){
		for(let l=0;l<foods.length;l++){
			drawFood(foods[l])
			if(dist(fishs[k].x,fishs[k].y,foods[l].x,foods[l].y)<30){
				foods.splice(l,1)
				fishs[k].size+=10
			}
			
			
			if(fishs[k].size>150){
				fishs.push({
					x:fishs[k].x+60,
					y:fishs[k].y+30,
					size:random(40,60),
					color: random(colors),
					v:random(0.5,1.5)
				})
				fishs[k].size=random(60,80)
			}
		}
	}
		
}

function drawFish(obj){
	push()
  fill(obj.color);
	translate(obj.x,obj.y)
	triangle(obj.size-20,-(obj.size/4),obj.size/4,0,obj.size-20,obj.size/4)
	ellipse(0,0,obj.size,obj.size/2); 
	stroke("skyblue")
	fill("#fff")
	for(let i=1;i<3;i++){
		circle(-obj.size/2,-i*20,obj.size*(i)/10)
	}
	pop()
}

function drawFood(obj){
	push()
  fill(150,0,0);
	translate(obj.x,obj.y)
	circle(0,0,obj.size)
	pop()
}

function mousePressed() {
	foods.push({
		x:mouseX,
		y:mouseY,
		size:random(5,10)
	})
}