class Ball{
  constructor(args){
	  this.r= args.r
		this.p = args.p
		this.v = p5.Vector.random2D().mult(0.5)
		this.color = random(colors)
		this.mode = random(["happy","sad"])
		this.id = random(100000)
	}
	
	draw(){
		if(this.isDead){
		  return
		}
		
		push()
		
			push()
			translate(this.p.x,this.p.y)
			rotate(PI*this.id)
			fill(this.color)
			ellipse(0,0,this.r,this.r*1.5)
			pop()

		translate(this.p.x,this.p.y)
		
			push()
			stroke(this.color)
			noFill()
			for(let j=0;j<8;j++){
				rotate(PI/10)
				beginShape()
				for(let i=0;i<this.r/2;i++){
					if(this.mode=="sad"){
						strokeWeight(this.r/15)
						vertex(this.r/2+i*2,noise(i+frameCount/10)*10)
					}else{
						strokeWeight(this.r/10)
						vertex(this.r/2+i*2,sin(i/5+frameCount/5)*5)
					}	
				}
				endShape()
			}
			pop()
		
		if(this.mode=="sad"){
			fill(255)
			arc(0-this.r/2,0,this.r/2,this.r/2,0,PI)
			arc(0+this.r/2,0,this.r/2,this.r/2,0,PI)
			fill(0)
			arc(0-this.r/2,0,this.r/3,this.r/3,0,PI)
			arc(0+this.r/2,0,this.r/3,this.r/3,0,PI)
		}else{
			fill(255)
			circle(0-this.r/2,0,this.r/2)
			circle(0+this.r/2,0,this.r/2)
			fill(0)
			circle(0-this.r/2,0,this.r/4)
			circle(0+this.r/2,0,this.r/4)
		}
		
		pop()
	}
	
	update(){
		this.p.add(this.v)
		this.v.mult(0.99)

		if(this.mode=="happy"){
			this.p.x+=cos(frameCount/10+this.id/100)*3
		}else{
			this.p.x+=cos(frameCount/10+this.id/100)*2
			this.p.y+=sin(frameCount/10+this.id/100)*2
		}
		
		if(this.p.y>height){
		  this.v.y = -abs(this.v.y)
		}
	}
	
	changeMode(mode){
	  this.mode = mode
	}
	
	inRange(x,y){
	  let d = dist(x,y,this.p.x,this.p.y)
		
		if(d<this.r){
			return true
		}else{
		  return false
		}
	}
}
