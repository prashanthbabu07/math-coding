let canvas = document.createElement("canvas");
document.body.append(canvas);

let context = canvas.getContext('2d');
let width = canvas.width = 800,
	height = canvas.height = 800;

context.fillStyle = "#000000";
context.fillRect(0, 0, width, height);
context.fillStyle = "#ffffff";
context.strokeStyle = "#cccccc";

const origin = { x: width / 2, y: height / 2 };

drawLine(context, 0, origin.y, width, origin.y);
drawLine(context, origin.x, 0, origin.y, height);

const UNIT = 20;
const delta = UNIT / 2;
unitCount = width / UNIT;
for (let i = 0; i < unitCount; i++) {
	context.strokeStyle = "#efefef";
	drawLine(context, i * UNIT, origin.y - 3, i * UNIT, origin.y + 3);
}
unitCount = height / UNIT;
for (let i = 0; i < unitCount; i++) {
	context.strokeStyle = "#efefef";
	drawLine(context, origin.x - 3, i * UNIT, origin.x + 3, i * UNIT);
}

context.beginPath()
context.moveTo(origin.x, origin.y);
context.strokeStyle = "#ff0000";
for (let i = 0; i < width; i++) {
	context.save();
	y = Math.sin(i) * delta;
	context.lineTo(origin.x + i * delta, origin.y + y);
	context.stroke();
}

/**
 * 
 * @param {CanvasRenderingContext2D} context 
 * @param {number} x1 
 * @param {number} y1 
 * @param {number} x2 
 * @param {number} y2 
 */
function drawLine(context, x1, y1, x2, y2) {
	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.stroke();
}
