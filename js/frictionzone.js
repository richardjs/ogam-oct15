'use strict';

function FrictionZone(x, y, width, height, friction){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;

	this.friction = friction;

	nonphysicsEntities.push(this);
}

FrictionZone.prototype.update = function(delta){
	var px = player.body.position.x;
	var py = player.body.position.y;
	if(px > this.x - this.width/2 && px < this.x + this.width/2 && py > this.y - this.height/2 && py < this.y + this.height/2){
		player.body.frictionAir = this.friction;
		player.inFrictionZone = true;
	}
}

FrictionZone.prototype.render = function(){
	ctx.save();
	ctx.translate(
		-player.body.position.x + canvas.width/2 + this.x,
		-player.body.position.y + canvas.height/2 + this.y
	);
	ctx.fillStyle = '#00f';
	ctx.fillRect(-this.width/2, -this.height/2, this.width, this.height);
	ctx.restore();
}

function FrictionZoneCircle(x, y, radius, friction){
	this.x = x;
	this.y = y;
	this.radius = radius;

	this.friction = friction;

	nonphysicsEntities.push(this);
}

FrictionZoneCircle.prototype.update = function(delta){
	var px = player.body.position.x;
	var py = player.body.position.y;
	var distance = Math.sqrt(Math.pow(px - this.x, 2) + Math.pow(py - this.y, 2));
	if(distance < this.radius){
		player.body.frictionAir = this.friction;
		player.inFrictionZone = true;
	}
}

FrictionZoneCircle.prototype.render = function(){
	ctx.save();
	ctx.translate(
		-player.body.position.x + canvas.width/2 + this.x,
		-player.body.position.y + canvas.height/2 + this.y
	);
	ctx.fillStyle = '#08f';
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.arc(0, 0, this.radius, 0, 2*Math.PI);
	ctx.fill();
	ctx.restore();
}
