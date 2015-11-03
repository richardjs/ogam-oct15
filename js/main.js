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
window.stardust = new Stardust();

window.IMAGE_CAR = document.getElementById('IMAGE_CAR');
window.IMAGE_FIRE1 = document.getElementById('IMAGE_FIRE1');

var scoreJSON = localStorage.getItem('rcrscores');
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
var lastRaceTime = 0;

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

		// render buttons and ghosts
		if((entity.offImage && entity.onImage) || entity.recording){
			entity.render();
		}
	}

	for(var i = 0; i < entities.length; i++){
		var entity = entities[i];
		if(debug || !entity.body.isStatic || entity.image || entity.color){
			entity.render();
		}
	}

	ctx.save();
	ctx.translate(-player.body.position.x + canvas.width/2, -player.body.position.y + canvas.height/2);
	stardust.render(canvas, ctx);
	ctx.restore();

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

	stardust.update(delta);
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
	for(var i = 0; i < scores[level].length; i++){
		new Ghost(scores[level][i].recording);
	}
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
				if(raceTime < scores[level][i].time){
					scores[level].splice(i, 0, {time: raceTime, recording: player.recording});
					addedScore = true;
					break;
				}
			}
			if(scores[level].length < 3 && !addedScore){
				scores[level].push({time: raceTime, recording: player.recording});
			}
			scores[level] = scores[level].slice(0, 3);

			localStorage.setItem('rcrscores', JSON.stringify(scores));
		}

		lastRaceTime = raceTime;
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
