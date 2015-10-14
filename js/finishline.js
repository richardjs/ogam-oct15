'use strict';

function FinishLine(x, y, width, height){
	this.x = x - width/2;
	this.y = y - height/2;
	this.width = width;
	this.height = height;

	this.finished = false;

	nonphysicsEntities.push(this);
}

FinishLine.prototype.update = function(delta){
	if(this.finished){
		return;
	}

	var px = player.body.position.x;
	var py = player.body.position.y;
	if(px > this.x && py < this.x + this.width && py > this.y && py < this.y + this.height){
		alert('Finished!');
		this.finished = true;
	}
}

FinishLine.prototype.render = function(){
	if(this.finished){
		return;
	}

	var ctx = engine.render.context;
	ctx.fillStyle = '#0f0';
	ctx.fillRect(this.x, this.y, this.width, this.height);
}
