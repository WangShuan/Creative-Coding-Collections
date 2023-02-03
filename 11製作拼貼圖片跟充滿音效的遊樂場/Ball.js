class Ball{
	constructor(args){ // 預設執行
    this.p = args.p // 設定 x,y
    this.o = args.o
    this.v = createVector(0,3)
		this.ts = 0
		this.bgc = args.bgc
		this.sound = args.sound
		this.index = args.index
  }
  draw(){
    push()
		let r1 = map(frameCount-this.ts,0,15,50,0,true)
		rectMode(CENTER)
		translate(this.o.x,this.o.y)
		fill("white")
		circle(50,0,50)
		fill("orange")
		circle(50,0,r1)
		pop()
  }
  update(){
		this.v = createVector(0,3+points/30)
    push()
		this.p.add(this.v)
		fill("orange")
		circle(this.p.x+50,this.p.y,50)
		pop()
  }
	playSound(){
	  this.sound.play()
	}
}