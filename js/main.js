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
window.level = null;
window.levelObject = null;
window.finished = true;
window.debug = false;

window.IMAGE_CAR = document.getElementById('IMAGE_CAR');
window.IMAGE_IMAGE_EIGHTBALL = document.getElementById('IMAGE_EIGHTBALL');

var scoreJSON = localStorage.getItem('scores');
var scores;
if(scoreJSON){
	scores = JSON.parse(scoreJSON);
}else{
	scores = {};
}

function millisToStr(time){
	var minutes = Math.floor(time / (1000*60));
	var seconds = Math.floor((time - minutes*1000*60) / 1000) + '';
	if(seconds.length === 1){
		seconds = '0' + seconds;
	}
	var millis = Math.floor(time - minutes*1000*60 - seconds*1000) + '';
	while(millis.length < 3){
		millis = millis + '0';
	}
	return minutes+':'+seconds+':'+millis;
}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

engine.world.gravity = {x: 0, y: 0};

var raceTime = 0;

var lastTime = null;
var delta = null;
window.timer = null;
function frame(time){
	ctx.fillStyle = backgroundColor;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(mapImage, -player.body.position.x + canvas.width/2, -player.body.position.y + canvas.height/2);

	if(debug){
		for(var i = 0; i < nonphysicsEntities.length; i++){
			nonphysicsEntities[i].render();
		}
	}
	for(var i = 0; i < nonphysicsEntities.length; i++){
		var entity = nonphysicsEntities[i];

		// render buttons
		if(entity.offImage && entity.onImage){
			entity.render();
		}
	}

	for(var i = 0; i < entities.length; i++){
		var entity = entities[i];
		if(debug || !entity.body.isStatic || entity.image || entity.color){
			entity.render();
		}
	}

	ctx.fillStyle = 'white';
	ctx.font = '20pt courier';
	ctx.textAlign = 'right';
	ctx.fillText(millisToStr(raceTime), canvas.width - 20, 20)

	timer = requestAnimationFrame(frame);
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
	if(!finished){
		raceTime += delta;
	}
	for(var i =0; i < entities.length; i++){
		if(!entities[i].update){
			continue;
		}
		entities[i].update(delta);
	}
});

Matter.Events.on(engine, 'afterTick', function(event){
	for(var i = 0; i < nonphysicsEntities.length; i++){
		var entity = nonphysicsEntities[i];
		entity.update(delta);
	}
});

function loadMap(map){
	Matter.World.clear(engine.world);
	Matter.Engine.clear(engine);
	entities = [];
	nonphysicsEntities = [];
	raceTime = 0;
	level = map.name;
	finished = false;
	map();
}

function finishMap(delay, levelScreen){
	if(delay === undefined){
		delay = 1000;
	}
	finished = true;
	setTimeout(function(){
		Matter.Engine.clear(engine);
		Matter.World.clear(engine.world);
		cancelAnimationFrame(timer);

		var addedScore = false;
		if(raceTime !== null){
			for(var i = 0; i < scores[level].length; i++){
				if(raceTime < scores[level][i]){
					scores[level].splice(i, 0, raceTime);
					addedScore = true;
					break;
				}
			}
			if(scores[level].length < 3 && !addedScore){
				scores[level].push(raceTime);
			}
			scores[level] = scores[level].slice(0, 3);

			localStorage.setItem('scores', JSON.stringify(scores));
		}

		if(levelScreen === undefined){
			showMenu();
		}else{
			showLevelMenu(levelScreen);
		}
	}, delay);
}

window.addEventListener('load', function(){
	Matter.Engine.run(engine);
	showMenu();
});
