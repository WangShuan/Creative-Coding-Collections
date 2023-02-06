function setup() {
	createCanvas(windowWidth, windowHeight - 56); // 初始化創建畫布
	background(100); // 設置背景色調(0~255 黑到白)
}

function draw() {
	translate(mouseX, mouseY);
	noFill() // 設定不要填充顏色，預設會填入白色
	frameRate(30); // 讓圖像生成慢一點

	if (mouseIsPressed) { // 判斷是否正點擊滑鼠中
		for (let i = 0; i < 50; i++) {
			stroke(random(0, 255)) // 設定線條顏色，給個隨機的黑到白
			for (let j = 0; j < random(1, 100); j++) {
				rotate(360); // 旋轉一整圈
				circle(50 - i, 50 - i, j * i * 0.1); // 畫出隨機的圓
			}
		}
	}
}
