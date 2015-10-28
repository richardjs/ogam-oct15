'use strict';

function Button(x, y, radius, target, preserveTarget){
	this.x = x;
	this.y = y;
	this.radius = radius;

	this.target = target;
	this.preserveTarget = preserveTarget;

	nonphysicsEntities.push(this);
}

Button.prototype.update = function(delta){
	for(var j = 0; j < entities.length; j++){
		var entity = entities[j];
		var ex = entity.body.position.x;
		var ey = entity.body.position.y;
		var distance = Math.sqrt(Math.pow(ex - this.x, 2) + Math.pow(ey - this.y, 2));
		if(distance < this.radius){
			if(entities.indexOf(this.target) >= 0){
				entities.splice(entities.indexOf(this.target), 1);
				Matter.World.remove(engine.world, this.target.body);
			}
		}else{
			if(this.target && this.preserveTarget && entities.indexOf(this.target) === -1){
				entities.push(this.target);
				Matter.World.add(engine.world, this.target.body);
			}
		}
	}
}

Button.prototype.render = function(){
	ctx.save();
	ctx.translate(
		-player.body.position.x + canvas.width/2 + this.x,
		-player.body.position.y + canvas.height/2 + this.y
	);
	ctx.fillStyle = '#f8f';
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.arc(0, 0, this.radius, 0, 2*Math.PI);
	ctx.fill();
	ctx.restore();
}
