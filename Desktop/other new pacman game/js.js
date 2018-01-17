/*
var audio = new Audio("pacman_intro.mp3");
audio.play();
setTimeout(function(){
	audio.play();
}, 4500);
setTimeout(function(){
	audio.play();
}, 9000);
setTimeout(function(){
	audio.play();
}, 13500);
setTimeout(function(){
	audio.play();
}, 18000);
setTimeout(function(){
	audio.play();
}, 22500);
setTimeout(function(){
	audio.play();
}, 27000);
setTimeout(function(){
	audio.play();
}, 31500);
*/
var score = 0, gscore = 0, ghost = false, ghost2 = false, ghost3 = false, ghost4 = false,
ghost5 = false, ghost6 = false, ghost7 = false, ghost8 = false, ghost9 = false, ghost10 = false;

var player = {
	x: 50,
	y: 100,
	pacmouth: 320,
	pacdir: 0,
	psize: 32,
	speed: 8
}
var enemy = {
	x: 150,
	y: 200,
	speed: 5,
	moving: 0,
	dirx: 0,
	diry: 0
}
var enemy2 = {
	x: 200,
	y: 250,
	speed: 5,
	moving: 0,
	dirx: 0,
	diry: 0
}
var enemy3 = {
	x: 250,
	y: 300,
	speed: 5,
	moving: 0,
	dirx: 0,
	diry: 0
}
var enemy4 = {
	x: 300,
	y: 350,
	speed: 5,
	moving: 0,
	dirx: 0,
	diry: 0
}
var enemy5 = {
	x: 350,
	y: 400,
	speed: 5,
	moving: 0,
	dirx: 0,
	diry: 0
}
var enemy6 = {
	x: 400,
	y: 450,
	speed: 5,
	moving: 0,
	dirx: 0,
	diry: 0
}
var enemy7 = {
	x: 450,
	y: 500,
	speed: 5,
	moving: 0,
	dirx: 0,
	diry: 0
}
var enemy8 = {
	x: 500,
	y: 550,
	speed: 5,
	moving: 0,
	dirx: 0,
	diry: 0
}
var enemy9 = {
	x: 550,
	y: 600,
	speed: 5,
	moving: 0,
	dirx: 0,
	diry: 0
}
var enemy10 = {
	x: 600,
	y: 650,
	speed: 5,
	moving: 0,
	dirx: 0,
	diry: 0
}

var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
document.body.appendChild(canvas);
canvas.height = 400;
canvas.width = 600;

mainImage = new Image();
mainImage.ready = false;
mainImage.onload = checkReady;
mainImage.src = "pac.png";

var keyclick = {};
document.addEventListener("keydown", function(event) {
	keyclick[event.keyCode] = true;
	move(keyclick);
}, false);

document.addEventListener("keyup", function(event) {
	delete keyclick[event.keyCode];
}, false);

function move(keyclick) {
	if (37 in keyclick) {
		player.x -= player.speed;
		player.pacdir = 64;
	}
	if (38 in keyclick) {
		player.y -= player.speed;
		player.pacdir = 96;
	}
	if (39 in keyclick) {
		player.x += player.speed;
		player.pacdir = 0;
	}
	if (40 in keyclick) {
		player.y += player.speed;
		player.pacdir = 32;
	}
	if (player.x >= (canvas.width - 32)) {
		player.x = 0;
	}
	if (player.y >= (canvas.height - 32)) {
		player.y = 0;
	}
	if (player.x < 0) {
		player.x = (canvas.width - 32);
	}
	if (player.y < 0) {
		player.y = (canvas.height - 32);
	}
	if (player.pacmouth == 320) {
		player.pacmouth = 352;
	} else {
		player.pacmouth = 320;
	}
	render();
}

function checkReady() {
	this.ready = true;
	playgame();
}

function playgame() {
	render();
	requestAnimationFrame(playgame);
}

function myNum(n) {
	return Math.floor(Math.random() * n);
}

function render() {
	context.fillStyle = "black";
	context.fillRect(0, 0, canvas.width, canvas.height);

	if (!ghost) {
		enemy.ghostNum = myNum(5) * 64;
		enemy.x = myNum(450);
		enemy.y = myNum(250) + 30;
		ghost = true;

		enemy2.ghostNum = myNum(5) * 64;
		enemy2.x = myNum(450);
		enemy2.y = myNum(250) + 30;
		ghost2 = true;

		enemy3.ghostNum = myNum(5) * 64;
		enemy3.x = myNum(450);
		enemy3.y = myNum(250) + 30;
		ghost3 = true;

		enemy4.ghostNum = myNum(5) * 64;
		enemy4.x = myNum(450);
		enemy4.y = myNum(250) + 30;
		ghost4 = true;

		enemy5.ghostNum = myNum(5) * 64;
		enemy5.x = myNum(450);
		enemy5.y = myNum(250) + 30;
		ghost5 = true;

		enemy6.ghostNum = myNum(5) * 64;
		enemy6.x = myNum(450);
		enemy6.y = myNum(250) + 30;
		ghost6 = true;

		enemy7.ghostNum = myNum(5) * 64;
		enemy7.x = myNum(450);
		enemy7.y = myNum(250) + 30;
		ghost7 = true;

		enemy8.ghostNum = myNum(5) * 64;
		enemy8.x = myNum(450);
		enemy8.y = myNum(250) + 30;
		ghost8 = true;

		enemy9.ghostNum = myNum(5) * 64;
		enemy9.x = myNum(450);
		enemy9.y = myNum(250) + 30;
		ghost9 = true;

		enemy10.ghostNum = myNum(5) * 64;
		enemy10.x = myNum(450);
		enemy10.y = myNum(250) + 30;
		ghost10 = true;
	}

	if (true) {
		enemy.moving = (myNum(2) * 3) + 10;
		enemy.speed = myNum(10) + 1;
		enemy.dirx = 0;
		enemy.diry = 0;
		if (enemy.moving % 2) {
			if (player.x < enemy.x) {
				enemy.dirx = -enemy.speed;
			} else {
				enemy.dirx = enemy.speed;
			}
		} else {
			if (player.y < enemy.y) {
				enemy.diry = -enemy.speed;
			} else {
				enemy.diry = enemy.speed;
			}
		}
	}

	if (true) {
		enemy2.moving = (myNum(2) * 3) + 10;
		enemy2.speed = myNum(10) + 1;
		enemy2.dirx = 0;
		enemy2.diry = 0;
		if (enemy2.moving % 2) {
			if (player.x < enemy2.x) {
				enemy2.dirx = -enemy2.speed;
			} else {
				enemy2.dirx = enemy2.speed;
			}
		} else {
			if (player.y < enemy2.y) {
				enemy2.diry = -enemy2.speed;
			} else {
				enemy2.diry = enemy2.speed;
			}
		}
	}

	if (true) {
		enemy3.moving = (myNum(2) * 3) + 10;
		enemy3.speed = myNum(10) + 1;
		enemy3.dirx = 0;
		enemy3.diry = 0;
		if (enemy3.moving % 2) {
			if (player.x < enemy3.x) {
				enemy3.dirx = -enemy3.speed;
			} else {
				enemy3.dirx = enemy3.speed;
			}
		} else {
			if (player.y < enemy3.y) {
				enemy3.diry = -enemy3.speed;
			} else {
				enemy3.diry = enemy3.speed;
			}
		}
	}

	if (true) {
		enemy4.moving = (myNum(2) * 3) + 10;
		enemy4.speed = myNum(10) + 1;
		enemy4.dirx = 0;
		enemy4.diry = 0;
		if (enemy4.moving % 2) {
			if (player.x < enemy4.x) {
				enemy4.dirx = -enemy4.speed;
			} else {
				enemy4.dirx = enemy4.speed;
			}
		} else {
			if (player.y < enemy4.y) {
				enemy4.diry = -enemy4.speed;
			} else {
				enemy4.diry = enemy4.speed;
			}
		}
	}

	if (true) {
		enemy5.moving = (myNum(2) * 3) + 10;
		enemy5.speed = myNum(10) + 1;
		enemy5.dirx = 0;
		enemy5.diry = 0;
		if (enemy5.moving % 2) {
			if (player.x < enemy5.x) {
				enemy5.dirx = -enemy5.speed;
			} else {
				enemy5.dirx = enemy5.speed;
			}
		} else {
			if (player.y < enemy5.y) {
				enemy5.diry = -enemy5.speed;
			} else {
				enemy5.diry = enemy5.speed;
			}
		}
	}

	if (true) {
		enemy6.moving = (myNum(2) * 3) + 10;
		enemy6.speed = myNum(10) + 1;
		enemy6.dirx = 0;
		enemy6.diry = 0;
		if (enemy6.moving % 2) {
			if (player.x < enemy6.x) {
				enemy6.dirx = -enemy6.speed;
			} else {
				enemy6.dirx = enemy6.speed;
			}
		} else {
			if (player.y < enemy6.y) {
				enemy6.diry = -enemy6.speed;
			} else {
				enemy6.diry = enemy6.speed;
			}
		}
	}

	if (true) {
		enemy7.moving = (myNum(2) * 3) + 10;
		enemy7.speed = myNum(10) + 1;
		enemy7.dirx = 0;
		enemy7.diry = 0;
		if (enemy7.moving % 2) {
			if (player.x < enemy7.x) {
				enemy7.dirx = -enemy7.speed;
			} else {
				enemy7.dirx = enemy7.speed;
			}
		} else {
			if (player.y < enemy7.y) {
				enemy7.diry = -enemy7.speed;
			} else {
				enemy7.diry = enemy7.speed;
			}
		}
	}

	if (true) {
		enemy8.moving = (myNum(2) * 3) + 10;
		enemy8.speed = myNum(10) + 1;
		enemy8.dirx = 0;
		enemy8.diry = 0;
		if (enemy8.moving % 2) {
			if (player.x < enemy8.x) {
				enemy8.dirx = -enemy8.speed;
			} else {
				enemy8.dirx = enemy8.speed;
			}
		} else {
			if (player.y < enemy8.y) {
				enemy8.diry = -enemy8.speed;
			} else {
				enemy8.diry = enemy8.speed;
			}
		}
	}

	if (true) {
		enemy9.moving = (myNum(2) * 3) + 10;
		enemy9.speed = myNum(10) + 1;
		enemy9.dirx = 0;
		enemy9.diry = 0;
		if (enemy9.moving % 2) {
			if (player.x < enemy9.x) {
				enemy9.dirx = -enemy9.speed;
			} else {
				enemy9.dirx = enemy9.speed;
			}
		} else {
			if (player.y < enemy9.y) {
				enemy9.diry = -enemy9.speed;
			} else {
				enemy9.diry = enemy9.speed;
			}
		}
	}

	if (true) {
		enemy10.moving = (myNum(2) * 3) + 10;
		enemy10.speed = myNum(10) + 1;
		enemy10.dirx = 0;
		enemy10.diry = 0;
		if (enemy10.moving % 2) {
			if (player.x < enemy10.x) {
				enemy10.dirx = -enemy10.speed;
			} else {
				enemy10.dirx = enemy10.speed;
			}
		} else {
			if (player.y < enemy10.y) {
				enemy10.diry = -enemy10.speed;
			} else {
				enemy10.diry = enemy10.speed;
			}
		}
	}

	enemy.moving--;
	enemy.x += enemy.dirx;
	enemy.y += enemy.diry;

	enemy2.moving--;
	enemy2.x += enemy2.dirx;
	enemy2.y += enemy2.diry;
	
	enemy3.moving--;
	enemy3.x += enemy3.dirx;
	enemy3.y += enemy3.diry;
	
	enemy4.moving--;
	enemy4.x += enemy4.dirx;
	enemy4.y += enemy4.diry;
	
	enemy5.moving--;
	enemy5.x += enemy5.dirx;
	enemy5.y += enemy5.diry;
	
	enemy6.moving--;
	enemy6.x += enemy6.dirx;
	enemy6.y += enemy6.diry;

	enemy7.moving--;
	enemy7.x += enemy7.dirx;
	enemy7.y += enemy7.diry;
	
	enemy8.moving--;
	enemy8.x += enemy8.dirx;
	enemy8.y += enemy8.diry;
	
	enemy9.moving--;
	enemy9.x += enemy9.dirx;
	enemy9.y += enemy9.diry;
	
	enemy10.moving--;
	enemy10.x += enemy10.dirx;
	enemy10.y += enemy10.diry;

	context.font = "20px Verdana";
	context.fillStyle = "white";
	context.fillText("Pacman: " + score + " vs. Ghost: " + gscore, 2, 18);

	context.drawImage(mainImage, enemy.ghostNum, 0, 32, 32, enemy.x, enemy.y, 32,32);
	context.drawImage(mainImage, enemy2.ghostNum, 0, 32, 32, enemy2.x, enemy2.y, 32,32);
	context.drawImage(mainImage, enemy3.ghostNum, 0, 32, 32, enemy3.x, enemy3.y, 32,32);
	context.drawImage(mainImage, enemy4.ghostNum, 0, 32, 32, enemy4.x, enemy4.y, 32,32);
	context.drawImage(mainImage, enemy5.ghostNum, 0, 32, 32, enemy5.x, enemy5.y, 32,32);
	context.drawImage(mainImage, enemy6.ghostNum, 0, 32, 32, enemy6.x, enemy6.y, 32,32);
	context.drawImage(mainImage, enemy7.ghostNum, 0, 32, 32, enemy7.x, enemy7.y, 32,32);
	context.drawImage(mainImage, enemy8.ghostNum, 0, 32, 32, enemy8.x, enemy8.y, 32,32);
	context.drawImage(mainImage, enemy9.ghostNum, 0, 32, 32, enemy9.x, enemy9.y, 32,32);
	context.drawImage(mainImage, enemy10.ghostNum, 0, 32, 32, enemy10.x, enemy10.y, 32,32);
	context.drawImage(mainImage, player.pacmouth, player.pacdir, 32, 32, player.x, player.y, 32,32);
}