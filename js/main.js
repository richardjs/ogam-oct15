'use strict';

window.engine = Matter.Engine.create();
window.nonphysicsEntities = [];
window.player = null;
window.canvas = document.createElement('canvas');
document.body.appendChild(window.canvas);
window.ctx = canvas.getContext('2d');
window.mapImage = null;
window.backgroundColor = 'black';

window.IMAGE_CAR = document.getElementById('IMAGE_CAR');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

engine.world.gravity = {x: 0, y: 0};

var lastTime = null;
var delta = null;
function frame(time){
	if(lastTime === null){
		lastTime = time;
		requestAnimationFrame(frame);
		return;
	}

	delta = time - lastTime;
	lastTime = time;

	player.update(delta);
	Matter.Engine.update(engine, delta, 1);

	ctx.fillStyle = backgroundColor;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(mapImage, -player.body.position.x + canvas.width/2, -player.body.position.y + canvas.height/2);

	ctx.save();
	ctx.translate(canvas.width/2, canvas.height/2);
	ctx.rotate(player.body.angle);
	ctx.drawImage(IMAGE_CAR, -IMAGE_CAR.width/2, -IMAGE_CAR.height/2);
	ctx.restore();

	requestAnimationFrame(frame);
}

function loadMap(map){
	Matter.World.clear(engine.world);
	nonphysicsEntities = [];
	map();
}

window.addEventListener('load', function(){
	loadMap(inabox);
	//Matter.Engine.run(engine);
	requestAnimationFrame(frame);
});
