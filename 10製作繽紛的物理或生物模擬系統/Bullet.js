class Bullet{
  constructor(args){
	  this.r= args.r || 10
		this.p = args.p || ship.p.copy()
		this.v = createVector(mouseX,mouseY).sub(ship.p.copy()).setMag(10)
		this.a = createVector(1,1)
		this.color = color("red")
		this.id = random(100000000)
	}
	draw(){
		if(this.isDead){
		  return
		}
		push()
		translate(this.p.x,this.p.y)
		fill(this.color)
		ellipse(0,0,this.r/2)
		pop()
	}
	update(){
		this.p.add(this.v)
		this.v.mult(0.99)
	}
}