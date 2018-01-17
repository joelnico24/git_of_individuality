var player = {
	x: 50,
	y: 100,
	pacmouth: 320,
	pacdir: 0,
	psize: 32,
	speed: 5
}
var powerdot = {
	x: 10,
	y: 10,
	powerup: true,
	pcountdown: 0,
	ghostNum: 0
}

var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
document.body.appendChild(canvas);
canvas.width = 1240;
canvas.height = 640;
context.fillStyle = "black";
context.fillRect(0,0,1240,640);