function setup() {
	createCanvas(800,windowHeight-56);
}

function draw() {
	frameRate(50)
	
	background(20,0);
	noStroke()
	
	// 滑鼠移動產生泡泡在畫面
	fill(`rgba(155, 155, 255,${random(0,1)})`)
	circle(mouseX,mouseY,random(5,100))
	
	// 叼著ㄉ圓形金幣
	fill('gold')
	stroke(0)
	rectMode(CENTER)
	rect(200,400,150,150,90)
	
	// 金幣中ㄉ菱形
	fill(255)
	quad(200, 375, 230, 400, 200, 425, 175, 400);
	
	let colorX = map(mouseX,0,width,0,155)
	let colorY = map(mouseY,0,height,0,155)
	// 魚身
	fill(colorY,100,colorY)
	beginShape();
	curveVertex(width-width/5, height/2);
	curveVertex(width-width/5, height/2);
	curveVertex(450,220);
	curveVertex(200,400);
	curveVertex(450,580);
	curveVertex(width-width/5, height/2);
	curveVertex(width-width/5, height/2);
	endShape();

	// 魚尾
	fill(colorX,colorY,100)
	beginShape();	
	vertex(width-width/5, height/2);
	vertex(width-width/5+100,200);
	vertex(width-width/5+100,500);
	vertex(width-width/5, height/2);
	endShape();
	
	// 魚上方的鰭
	beginShape();
	curveVertex(435,220);
	curveVertex(435,220);
	curveVertex(580,160);
	curveVertex(674,286);
	curveVertex(674,286);
	endShape();
	
	// 魚下方的鰭
	beginShape();
	curveVertex(462,580);
	curveVertex(462,580);
	curveVertex(600,600);
	curveVertex(670,484);
	curveVertex(670,484);
	endShape();
	
	// 魚圓眼珠
	fill(255)
	circle(300,300,50)
	circle(300,500,50)
	fill(55)
	circle(300,300,30)
	circle(300,500,30)
	
	// 魚ㄉ鼻孔
	noStroke()
	fill('darkblue')
	circle(240,390,10)
	circle(240,410,10)
}