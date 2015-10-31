'use strict';

var levels = [
	{name: 'Highway', func: highway},
	{name: 'Maze', func: maze},
	{name: 'Pool Party', func: pool}
]

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
			loadMap(levels[selected].func);
			requestAnimationFrame(frame);
			break;
	}
}

function showMenu(){
	selected = 0;
	drawMenu();
	document.addEventListener('keydown', menuKeyHandler);
}
