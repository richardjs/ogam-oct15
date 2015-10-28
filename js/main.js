'use strict';

window.engine = Matter.Engine.create();
window.entities = [];
window.nonphysicsEntities = [];
window.player = null;
window.canvas = document.createElement('canvas');
document.body.appendChild(window.canvas);
window.ctx = canvas.getContext('2d');
window.mapImage = null;
window.backgroundColor = 'black';
window.debug = false;

window.IMAGE_CAR = document.getElementById('IMAGE_CAR');
window.IMAGE_IMAGE_EIGHTBALL = document.getElementById('IMAGE_EIGHTBALL');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

engine.world.gravity = {x: 0, y: 0};

var lastTime = null;
var delta = null;
function frame(time){
	ctx.fillStyle = backgroundColor;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(mapImage, -player.body.position.x + canvas.width/2, -player.body.position.y + canvas.height/2);

	player.render();
	for(var i = 0; i < entities.length; i++){
		var entity = entities[i];
		if(debug || !entity.body.isStatic || entity.doRender){
			entity.render();
		}
	}

	requestAnimationFrame(frame);
}

Matter.Events.on(engine, 'beforeTick', function(event){
	if(event.timestamp === undefined){
		return;
	}
	if(lastTime === null){
		lastTime = event.timestamp;
		return;
	}
	delta = event.timestamp - lastTime;
	lastTime = event.timestamp;

	player.update(delta);
});

Matter.Events.on(engine, 'afterTick', function(event){
	for(var i = 0; i < nonphysicsEntities.length; i++){
		var entity = nonphysicsEntities[i];
		entity.update(delta);
	}
});

function loadMap(map){
	Matter.World.clear(engine.world);
	nonphysicsEntities = [];
	map();
}

window.addEventListener('load', function(){
	loadMap(inabox);
	Matter.Engine.run(engine);
	requestAnimationFrame(frame);
});
