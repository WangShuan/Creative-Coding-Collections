let myData, maxNum = 1000000, a;
function preload() {
	myData = loadJSON("Marriages&Divorces.json")
}

function easeOutQuart(x) {
	return 1 - pow(1 - x, 5);
}

function setup() {
	createCanvas(windowWidth, windowHeight - 56);
	background(100);
	noFill()
	textSize(16)
	textStyle(BOLD)
	myData = Object.values(myData)
	myData = myData.filter(item => item.date > 105)
	angleMode(DEGREES);
}

function draw() {
	background(0)
	push()
	fill(255)
	textSize(24)
	text("民國106~110年\n婚姻狀況統計", width - 180, height - 50)
	pop()

	for (let i = 0; i < myData.length; i++) {
		let d = myData[i]
		a = easeOutQuart(map(frameCount - i * 100, 0, 200, 0, 1, true))
		push()
		translate(width / 5, height / 2)
		stroke("#198A6E")
		circle(0, 0, map(reNum(d.totalMale), 0, maxNum, 0, width / 2.5) * a)
		push()
		fill("#198A6E")
		rotate(i * 72)
		rect(0, 0, 10, map(reNum(d.totalMale), 0, maxNum, 0, width / 2.5) / 2 * a)
		pop()
		stroke("#48A890")
		circle(0, 0, map(reNum(d.marriedMale), 0, maxNum, 0, width / 2.5) * a)
		push()
		fill("#48A890")
		rotate(i * 72 + 10)
		rect(0, 0, 10, map(reNum(d.marriedMale), 0, maxNum, 0, width / 2.5) / 2 * a)
		pop()
		stroke("#77C5B1")
		circle(0, 0, map(reNum(d.unmarriedMale), 0, maxNum, 0, width / 2.5) * a)
		push()
		fill("#77C5B1")
		rotate(i * 72 + 20)
		rect(0, 0, 10, map(reNum(d.unmarriedMale), 0, maxNum, 0, width / 2.5) / 2 * a)
		pop()
		stroke("#A6E2D2")
		circle(0, 0, map(reNum(d.divorcedMale), 0, maxNum, 0, width / 2.5) * a)
		push()
		fill("#A6E2D2")
		rotate(i * 72 + 30)
		rect(0, 0, 10, map(reNum(d.divorcedMale), 0, maxNum, 0, width / 2.5) / 2 * a)
		pop()
		stroke("#fff")
		circle(0, 0, map(reNum(d.widowedMale), 0, maxNum, 0, width / 2.5) * a)
		push()
		fill("#fff")
		rotate(i * 72 + 40)
		rect(0, 0, 10, map(reNum(d.widowedMale), 0, maxNum, 0, width / 2.5) / 2 * a)
		text(d.date + "年", 0, height / 3)
		pop()
		if (i === myData.length - 1) {
			push()
			noStroke()
			fill("#198A6E")
			text("總計男性", map(reNum(d.totalMale), 0, maxNum, 0, width / 2.5) / 5, map(reNum(d.totalMale), 0, maxNum, 0, width / 2.5) / 2)
			fill("#48A890")
			text("已婚男性", map(reNum(d.marriedMale), 0, maxNum, 0, width / 2.5) / 5, map(reNum(d.marriedMale), 0, maxNum, 0, width / 2.5) / 2)
			fill("#77C5B1")
			text("未婚男性", map(reNum(d.unmarriedMale), 0, maxNum, 0, width / 2.5) / 5, map(reNum(d.unmarriedMale), 0, maxNum, 0, width / 2.5) / 2)
			fill("#A6E2D2")
			text("離婚男性", map(reNum(d.divorcedMale), 0, maxNum, 0, width / 2.5) / 5, map(reNum(d.divorcedMale), 0, maxNum, 0, width / 2.5) / 2)
			fill("#fff")
			text("喪偶男性", map(reNum(d.widowedMale), 0, maxNum, 0, width / 2.5) / 5, map(reNum(d.widowedMale), 0, maxNum, 0, width / 2.5) / -2)
			pop()
		}

		translate(width / 2.5, 0)
		stroke("#a30000")
		circle(0, 0, map(reNum(d.totalFemale), 0, maxNum, 0, width / 2.5) * a)
		push()
		fill("#a30000")
		rotate(i * 72)
		rect(0, 0, 10, map(reNum(d.totalFemale), 0, maxNum, 0, width / 2.5) / 2 * a)
		pop()

		stroke("#ba3636")
		circle(0, 0, map(reNum(d.marriedFemale), 0, maxNum, 0, width / 2.5) * a)
		push()
		fill("#ba3636")
		rotate(i * 72 + 10)
		rect(0, 0, 10, map(reNum(d.marriedFemale), 0, maxNum, 0, width / 2.5) / 2 * a)
		pop()

		stroke("#d16b6b")
		circle(0, 0, map(reNum(d.unmarriedFemale), 0, maxNum, 0, width / 2.5) * a)
		push()
		fill("#d16b6b")
		rotate(i * 72 + 20)
		rect(0, 0, 10, map(reNum(d.unmarriedFemale), 0, maxNum, 0, width / 2.5) / 2 * a)
		pop()

		stroke("#e8a1a1")
		circle(0, 0, map(reNum(d.divorcedFemale), 0, maxNum, 0, width / 2.5) * a)
		push()
		fill("#e8a1a1")
		rotate(i * 72 + 30)
		rect(0, 0, 10, map(reNum(d.divorcedFemale), 0, maxNum, 0, width / 2.5) / 2 * a)
		pop()

		stroke("#fff")
		circle(0, 0, map(reNum(d.widowedFemale), 0, maxNum, 0, width / 2.5) * a)
		push()
		fill("#fff")
		rotate(i * 72 + 40)
		text(d.date + "年", 0, height / 3)
		rect(0, 0, 10, map(reNum(d.widowedFemale), 0, maxNum, 0, width / 2.5) / 2 * a)
		pop()
		if (i === myData.length - 1) {
			push()
			noStroke()
			fill("#a30000")
			text("總計女性", map(reNum(d.totalFemale), 0, maxNum, 0, width / 2.5) / 5, map(reNum(d.totalFemale), 0, maxNum, 0, width / 2.5) / 2)
			fill("#ba3636")
			text("已婚女性", map(reNum(d.marriedFemale), 0, maxNum, 0, width / 2.5) / 5, map(reNum(d.marriedFemale), 0, maxNum, 0, width / 2.5) / 2)
			fill("#d16b6b")
			text("未婚女性", map(reNum(d.unmarriedFemale), 0, maxNum, 0, width / 2.5) / 5, map(reNum(d.unmarriedFemale), 0, maxNum, 0, width / 2.5) / 2)
			fill("#e8a1a1")
			text("離婚女性", map(reNum(d.divorcedFemale), 0, maxNum, 0, width / 2.5) / 5, map(reNum(d.divorcedFemale), 0, maxNum, 0, width / 2.5) / 2)
			fill("#fff")
			text("喪偶女性", map(reNum(d.widowedFemale), 0, maxNum, 0, width / 2.5) / 5, map(reNum(d.widowedFemale), 0, maxNum, 0, width / 2.5) / -2)
			pop()
		}
		pop()
	}
}

function reNum(string) {
	return Number(string.replace(/,/g, ""))
}