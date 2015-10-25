'use strict';

function Wall(x, y, width, height, options){
	options = options || {};
	if(options.isStatic === undefined) options.isStatic = true;

	this.width = width;
	this.height = height;
	this.body = Matter.Bodies.rectangle(
		x,
		y,
		width,
		height,
		options
	);
	Matter.World.add(engine.world, this.body);
	entities.push(this);
}

Wall.prototype.render = function(){
	ctx.save();
	ctx.translate(
		-player.body.position.x + canvas.width/2 + this.body.position.x,
		-player.body.position.y + canvas.height/2 + this.body.position.y
	);
	ctx.rotate(this.body.angle);
	ctx.fillStyle = '#822';
	ctx.fillRect(-this.width/2, -this.height/2, this.width, this.height);
	ctx.restore();
}
