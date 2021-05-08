let canvas = document.createElement("canvas");
document.body.append(canvas);

let context = canvas.getContext('2d');
let width = canvas.width = 600,
	height = canvas.height = 600;

context.fillStyle = "#cccccc";
context.fillRect(0, 0, width, height);
context.fillStyle = "#000000";

let rows = 10,
	columns = 10;

let cellWidth = width / columns,
	cellHeight = height / rows;

// console.log("info", cellWidth, cellHeight)

let radius = Math.min(cellWidth, cellHeight) / 2;
// debugger

for (let i = 0; i < rows; i++) {
	for (let j = 0; j < columns; j++) {
		context.save();
		context.translate(j * cellWidth, i * cellHeight);

		// context.fillRect(5, 5, cellWidth - 10, cellHeight - 10)
		// context.restore()

		// console.log(`sin ${j} ${Math.sin(j)}`)

		let s = Math.sin(j * i * Math.PI) * Math.PI + 0.75;

		context.beginPath();
		context.arc(cellWidth / 2, cellHeight / 2, radius * s, 0, Math.PI * 2);
		context.fill();

		context.restore()
		// ctx.stroke();
	}
}