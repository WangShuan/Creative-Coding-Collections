let myData, maxNum = 1000000, a, maxW;
function preload() {
	myData = loadJSON("Marriages&Divorces.json")
}

function easeOutQuart(x) {
	return 1 - pow(1 - x, 5);
}

function setup() {
	createCanvas(windowWidth, windowHeight - 56);
	background(100);
	noStroke()
	textSize(16)
	textStyle(BOLD)
	myData = Object.values(myData)
	myData = myData.filter(item => item.date > 105)
	maxW = width - 180
}

function draw() {
	background(0)
	push()
	fill(200, 200, 200, 20)
	textSize(60)
	text("民國106~110年婚姻狀況統計", width / 2 - 375, height / 2 + 30)
	pop()
	translate(0, 50)

	for (let i = 0; i < myData.length; i++) {
		let d = myData[i]
		a = easeOutQuart(map(frameCount - i * 100, 0, 200, 0, 1, true))
		text(d.date + "年(男) :", 20, i * 30 + 50)
		text(d.date + "年(女) :", 20, i * 30 + 50 + height / 2)

		push()
		translate(160, 30)
		fill("#194FB3")
		rect(0, i * 30, map(reNum(d.totalMale), 0, maxNum, 0, maxW) * a, 20)

		fill("#2969E0")
		rect(0, i * 30, map(reNum(d.marriedMale), 0, maxNum, 0, maxW) * a, 20)

		fill("#5E8FE8")
		rect(0, i * 30, map(reNum(d.unmarriedMale), 0, maxNum, 0, maxW) * a, 20)

		fill("#A6C1F2")
		rect(0, i * 30, map(reNum(d.divorcedMale), 0, maxNum, 0, maxW) * a, 20)

		fill("#fff")
		rect(0, i * 30, map(reNum(d.widowedMale), 0, maxNum, 0, maxW) * a, 20)
		pop()

		if (i === myData.length - 1) {
			noStroke()
			fill("#194FB3")
			circle(40, (i + 1) * 30 + 70 - 10, 20)
			text("總計男性", 60, (i + 1) * 30 + 70)

			fill("#2969E0")
			circle(40 + 150, (i + 1) * 30 + 70 - 10, 20)
			text("已婚男性", 60 + 150, (i + 1) * 30 + 70)

			fill("#5E8FE8")
			circle(40 + 300, (i + 1) * 30 + 70 - 10, 20)
			text("未婚男性", 60 + 300, (i + 1) * 30 + 70)

			fill("#A6C1F2")
			circle(40 + 450, (i + 1) * 30 + 70 - 10, 20)
			text("離婚男性", 60 + 450, (i + 1) * 30 + 70)

			fill("#fff")
			circle(40 + 600, (i + 1) * 30 + 70 - 10, 20)
			text("喪偶男性", 60 + 600, (i + 1) * 30 + 70)
		}

		push()
		translate(160, 30)
		fill("#a30000")
		rect(0, i * 30 + height / 2, map(reNum(d.totalFemale), 0, maxNum, 0, maxW) * a, 20)

		fill("#ba3636")
		rect(0, i * 30 + height / 2, map(reNum(d.marriedFemale), 0, maxNum, 0, maxW) * a, 20)

		fill("#d16b6b")
		rect(0, i * 30 + height / 2, map(reNum(d.unmarriedFemale), 0, maxNum, 0, maxW) * a, 20)

		fill("#e8a1a1")
		rect(0, i * 30 + height / 2, map(reNum(d.divorcedFemale), 0, maxNum, 0, maxW) * a, 20)

		fill("#fff")
		rect(0, i * 30 + height / 2, map(reNum(d.widowedFemale), 0, maxNum, 0, maxW) * a, 20)
		pop()

		if (i === myData.length - 1) {
			noStroke()
			fill("#a30000")
			circle(40, (i + 1) * 30 + height / 2 + 70 - 10, 20)
			text("總計女性", 60, (i + 1) * 30 + height / 2 + 70)

			fill("#ba3636")
			circle(40 + 150, (i + 1) * 30 + height / 2 + 70 - 10, 20)
			text("已婚女性", 60 + 150, (i + 1) * 30 + height / 2 + 70)

			fill("#d16b6b")
			circle(40 + 300, (i + 1) * 30 + height / 2 + 70 - 10, 20)
			text("未婚女性", 60 + 300, (i + 1) * 30 + height / 2 + 70)

			fill("#e8a1a1")
			circle(40 + 450, (i + 1) * 30 + height / 2 + 70 - 10, 20)
			text("離婚女性", 60 + 450, (i + 1) * 30 + height / 2 + 70)

			fill("#fff")
			circle(40 + 600, (i + 1) * 30 + height / 2 + 70 - 10, 20)
			text("喪偶女性", 60 + 600, (i + 1) * 30 + height / 2 + 70)
		}

	}
}

function reNum(string) {
	return Number(string.replace(/,/g, ""))
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight - 56);
}