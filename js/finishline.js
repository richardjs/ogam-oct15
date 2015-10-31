'use strict';

function FinishLine(x, y, width, height){
	this.x = x;
	this.y = y;
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
	if(px > this.x - this.width/2 && px < this.x + this.width/2 && py > this.y - this.height/2 && py < this.y + this.height/2){
		this.finished = true;
		finished = true;
		setTimeout(function(){
			Matter.Engine.clear(engine);
			Matter.World.clear(engine.world);
			cancelAnimationFrame(timer);
			showMenu();
		}, 1000);
	}
}

FinishLine.prototype.render = function(){
	ctx.save();
	ctx.translate(
		-player.body.position.x + canvas.width/2 + this.x,
		-player.body.position.y + canvas.height/2 + this.y
	);
	ctx.fillStyle = '#0f0';
	ctx.fillRect(-this.width/2, -this.height/2, this.width, this.height);
	ctx.restore();
}
