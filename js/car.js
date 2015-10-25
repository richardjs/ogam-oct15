'use strict';

function Car(x, y, options){
	options = options || {};
	options.frictionAir = .05;
	options.density = .05;
	options.restitution = .5;
	this.body = Matter.Bodies.rectangle(
		x,
		y,
		CAR_LENGTH,
		CAR_WIDTH,
		options
	);
	Matter.World.add(engine.world, this.body);
	player = this;
}

Car.prototype.update = function(delta){
	if(controller.accelerate){
		Matter.Body.applyForce(
			this.body,
			Matter.Vector.add(
				this.body.position,
				Matter.Vector.rotate({x: -CAR_LENGTH/2, y: 0}, this.body.angle)
			), {
				x:  Math.cos(this.body.angle) * CAR_ACCELERATION * delta/1000,
				y:  Math.sin(this.body.angle) * CAR_ACCELERATION * delta/1000
		});
	}
	if(controller.forwardLeft){
		Matter.Body.applyForce(
			this.body,
			Matter.Vector.add(
				this.body.position,
				Matter.Vector.rotate({x: CAR_THRUSTER_POSITION, y: 0}, this.body.angle)
			),
			Matter.Vector.rotate({x: 0, y: CAR_THRUSTER_POWER * delta/1000}, this.body.angle)
		);
	}
	if(controller.backLeft){
		Matter.Body.applyForce(
			this.body,
			Matter.Vector.add(
				this.body.position,
				Matter.Vector.rotate({x: -CAR_THRUSTER_POSITION, y: 0}, this.body.angle)
			),
			Matter.Vector.rotate({x: 0, y: CAR_THRUSTER_POWER * delta/1000}, this.body.angle)
		);
	}
	if(controller.forwardRight){
		Matter.Body.applyForce(
			this.body,
			Matter.Vector.add(
				this.body.position,
				Matter.Vector.rotate({x: CAR_THRUSTER_POSITION, y: 0}, this.body.angle)
			),
			Matter.Vector.rotate({x: 0, y: -CAR_THRUSTER_POWER * delta/1000}, this.body.angle)
		);
	}
	if(controller.backRight){
		Matter.Body.applyForce(
			this.body,
			Matter.Vector.add(
				this.body.position,
				Matter.Vector.rotate({x: -CAR_THRUSTER_POSITION, y: 0}, this.body.angle)
			),
			Matter.Vector.rotate({x: 0, y: -CAR_THRUSTER_POWER * delta/1000}, this.body.angle)
		);
	}
}

Car.prototype.render = function(){
	ctx.save();
	ctx.translate(canvas.width/2, canvas.height/2);
	ctx.rotate(this.body.angle);
	ctx.drawImage(IMAGE_CAR, -IMAGE_CAR.width/2, -IMAGE_CAR.height/2);
	ctx.restore();
}
