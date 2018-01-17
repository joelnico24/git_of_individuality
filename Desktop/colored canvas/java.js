var rectangle = {
	x: 50,
	y: 100,
	speed: 10
}

var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.width = 1250;
canvas.height = 660;
document.body.appendChild(canvas);
var rectColor = prompt("What color of square do you want?");

var keyClick = {};
document.addEventListener("keydown", function(event) {
	keyClick[event.keyCode] = true;
	//context.clearRect(0, 0, canvas.width, canvas.height);
	rects();
}, false);

document.addEventListener("keyup", function(event) {
	delete keyClick[event.keyCode];
}, false);

function rects() {
	if (37 in keyClick) {
		rectangle.x -= rectangle.speed;
	}
	if (38 in keyClick) {
		rectangle.y -= rectangle.speed;
	}
	if (39 in keyClick) {
		rectangle.x += rectangle.speed;
	}
	if (40 in keyClick) {
		rectangle.y += rectangle.speed;
	}
	if (rectangle.x >= (canvas.width - 32)) {
		rectangle.x = 0;
	}
	if (rectangle.y >= (canvas.height - 32)) {
		rectangle.y = 0;
	}
	if (rectangle.x < 0) {
		rectangle.x = (canvas.width - 32);
	}
	if (rectangle.y < 0) {
		rectangle.y = (canvas.height - 32);
	}
	context.fillStyle = rectColor;
	context.fillRect(rectangle.x, rectangle.y, 20, 20);

	/* if (66 in keyClick) {
		context.fillStyle = "blue";
		context.fillRect(myNum(1230), myNum(640), 20, 20);
	} else if (71 in keyClick) {
		context.fillStyle = "green";
		context.fillRect(myNum(1230), myNum(640), 20, 20);
	} else if (79 in keyClick) {
		context.fillStyle = "orange";
		context.fillRect(myNum(1230), myNum(640), 20, 20);
	} else if (82 in keyClick) {
		context.fillStyle = "red";
		context.fillRect(myNum(1230), myNum(640), 20, 20);
	} else if (89 in keyClick) {
		context.fillStyle = "yellow";
		context.fillRect(myNum(1230), myNum(640), 20, 20);
	} else if (84 in keyClick) {
		context.fillStyle = "teal";
		context.fillRect(myNum(1230), myNum(640), 20, 20);
	} else if (80 in keyClick) {
		context.fillStyle = "purple";
		context.fillRect(myNum(1230), myNum(640), 20, 20);
	} else if (73 in keyClick) {
		context.fillStyle = "indigo";
		context.fillRect(myNum(1230), myNum(640), 20, 20);
	} else if (65 in keyClick) {
		context.fillStyle = "aqua";
		context.fillRect(myNum(1230), myNum(640), 20, 20);
	} else if (83 in keyClick) {
		context.fillStyle = "silver";
		context.fillRect(myNum(1230), myNum(640), 20, 20);
	} else if (77 in keyClick) {
		context.fillStyle = "maroon";
		context.fillRect(myNum(1230), myNum(640), 20, 20);
	} else {
		context.fillStyle = "black";
		context.beginPath();
		context.arc(myNum(1230), myNum(640), 10, 0, Math.PI * 2, true);
		context.closePath();
		context.fill();
	} */
}

/* function myNum(n) {
	return Math.floor(Math.random() * n);
} */

rects();