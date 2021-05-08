let canvas = document.createElement("canvas");
document.body.append(canvas);

let context = canvas.getContext('2d');
let width = canvas.width = 800,
	height = canvas.height = 800;

context.fillStyle = "#cccccc";
context.fillRect(0, 0, width, height);
context.fillStyle = "#000000";

center = { x: width / 2, y: height / 2 };

drawLine(context, 0, center.y, width, center.y);
drawLine(context, center.x, 0, center.y, height);



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