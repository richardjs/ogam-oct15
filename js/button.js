'use strict';

function Button(x, y, radius, target, preserveTarget, offImage, onImage){
	this.x = x;
	this.y = y;
	this.radius = radius;

	this.target = target;
	this.preserveTarget = preserveTarget;
	this.on = false;

	this.offImage = offImage;
	this.onImage = onImage;

	nonphysicsEntities.push(this);
}

Button.prototype.update = function(delta){
	for(var j = 0; j < entities.length; j++){
		var entity = entities[j];
		var ex = entity.body.position.x;
		var ey = entity.body.position.y;
		var distance = Math.sqrt(Math.pow(ex - this.x, 2) + Math.pow(ey - this.y, 2));
		if(distance - BUTTON_RANGE < this.radius){
			if(entities.indexOf(this.target) >= 0){
				entities.splice(entities.indexOf(this.target), 1);
				Matter.World.remove(engine.world, this.target.body);
				this.on = true;
				this.triggerer = entity;
				break;
			}
		}else if(entity === this.triggerer){
			if(this.target && this.preserveTarget && entities.indexOf(this.target) === -1){
				entities.push(this.target);
				Matter.World.add(engine.world, this.target.body);
				this.on = false;
			}
		}
	}
}

Button.prototype.render = function(){
	if(debug){
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

	if(this.on && this.onImage){
		ctx.save();
		ctx.translate(
			-player.body.position.x + canvas.width/2 + this.x,
			-player.body.position.y + canvas.height/2 + this.y
		);
		ctx.drawImage(this.onImage, -this.onImage.width/2, -this.onImage.height/2);
		ctx.restore();
	}
	if(!this.on && this.offImage){
		ctx.save();
		ctx.translate(
			-player.body.position.x + canvas.width/2 + this.x,
			-player.body.position.y + canvas.height/2 + this.y
		);
		ctx.drawImage(this.offImage, -this.offImage.width/2, -this.offImage.height/2);
		ctx.restore();
	}
}
