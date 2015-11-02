'use strict';

var levels = [
	{name: 'Intro', func: inabox},
	{name: 'Highway', func: highway},
	{name: 'Reverse', func: backtrack},
	{name: 'Maze', func: maze},
	{name: 'Crate', func: crate},
	{name: 'Hockey', func: hockey},
	{name: 'Pool Party', func: pool}
];

var selected = 0;

function drawMenu(){
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = 'red';
	ctx.textAlign = 'center';
	ctx.font = '22pt courier';
	ctx.fillText('-level select-', canvas.width/2, 50);
	
	for(var i = 0; i < levels.length; i++){
		var level = levels[i];
		ctx.fillStyle = 'white';
		var name = level.name;
		if(i === selected) name = '-'+name+'-';
		ctx.fillText(name, canvas.width/2, 50 + 50 + 35*i);

		if(scores[level.func.name] === undefined){
			scores[level.func.name] = [];
		}
	}
}

function menuKeyHandler(event){
	switch(event.keyCode){
		case 38:
			selected--;
			if(selected < 0){
				selected += levels.length;
			}
			drawMenu();
			break;
		case 40:
			selected = (selected + 1) % levels.length;
			drawMenu();
			break;
		case 13:
			document.removeEventListener('keydown', menuKeyHandler);
			showLevelMenu(levels[selected]);
			break;
	}
}

function showMenu(){
	selected = 0;
	drawMenu();
	document.addEventListener('keydown', menuKeyHandler);
}

function showLevelMenu(level){
	levelObject = level;

	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = 'red';
	ctx.textAlign = 'center';
	ctx.font = '22pt courier';
	ctx.fillText('-'+level.name+'-', canvas.width/2, 50);

	var times = scores[level.func.name];

	if(true || times.length){
		ctx.fillStyle = 'yellow';
		ctx.fillText('record times:', canvas.width/2, 100);

		for(var i = 0; i < times.length; i++){
			var time = times[i];
			ctx.fillStyle = 'white';
			ctx.fillText(millisToStr(time), canvas.width/2, 100 + 50 + 35*i);
		}

		ctx.fillText('press enter to begin, esc to go back', canvas.width/2, 100 + 50 + 35*i + 50);
	}

	var levelMenuKeyHandler = function(event){
		if(event.keyCode === 13){
			document.removeEventListener('keydown', levelMenuKeyHandler);
			loadMap(levels[selected].func);
			requestAnimationFrame(frame);
		}else if(event.keyCode === 27){
			document.removeEventListener('keydown', levelMenuKeyHandler);
			showMenu();
		}
	}
	document.addEventListener('keydown', levelMenuKeyHandler);
}
