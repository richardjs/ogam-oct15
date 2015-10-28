'use strict';

function WallCircle(x, y, radius, options){
	options = options || {};
	if(options.isStatic === undefined) options.isStatic = true;

	this.body = Matter.Bodies.circle(
		x,
		y,
		radius,
		options
	);
	Matter.World.add(engine.world, this.body);
	this.radius = radius;
	entities.push(this);

	this.image = options.image;
	this.color = options.color;
}

WallCircle.prototype.render = function(){
	ctx.save();
	ctx.translate(
		-player.body.position.x + canvas.width/2 + this.body.position.x,
		-player.body.position.y + canvas.height/2 + this.body.position.y
	);
	if(this.image){
		ctx.rotate(this.body.angle);
		ctx.drawImage(this.image, -this.image.width/2, -this.image.height/2);
	}else{
		if(debug && !this.color){
			this.color = '#282';
		}
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.arc(0, 0, this.radius, 0, 2*Math.PI);
		ctx.fill();
	}
	ctx.restore();
}
