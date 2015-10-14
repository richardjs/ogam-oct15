'use strict';

function Car(x, y){
	this.body = Matter.Bodies.rectangle(
		x,
		y,
		CAR_LENGTH,
		CAR_WIDTH, {
			frictionAir: .025,
			density: 0.05,
			restitution: .5
		}
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
