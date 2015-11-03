'use strict';

function Car(x, y, options){
	options = options || {};
	if(options.frictionAir === undefined){
		options.frictionAir = .05;
	}
	if(options.density === undefined){
		options.density = .05;
	}
	if(options.densite === undefined){
		options.restitution = .5;
	}

	this.originalFriction = options.frictionAir;

	this.body = Matter.Bodies.rectangle(
		x,
		y,
		CAR_LENGTH,
		CAR_WIDTH,
		options
	);
	Matter.World.add(engine.world, this.body);
	entities.push(this)
	player = this;

	this.recording = [];

	this.backEmitter = stardust.add(0, 0, {
		image: IMAGE_FIRE1,
		width: 0,
		height: 0,
		ttl: null,
		emitCount: 0,
		emitInterval: 10,
		particleVelocity: {x: 0, y: 0},
		particleTTL: function(){return Math.random() * 100}
	});
	this.frontRight = stardust.add(0, 0, {
		image: IMAGE_FIRE1,
		width: 0,
		height: 0,
		ttl: null,
		emitCount: 0,
		emitInterval: 10,
		particleTTL: function(){return Math.random() * 50},
	});
	this.frontLeft = stardust.add(0, 0, {
		image: IMAGE_FIRE1,
		width: 0,
		height: 0,
		ttl: null,
		emitCount: 0,
		emitInterval: 10,
		particleVelocity: {x: 0, y: 0},
		particleTTL: function(){return Math.random() * 50}
	});
	this.backRight = stardust.add(0, 0, {
		image: IMAGE_FIRE1,
		width: 0,
		height: 0,
		ttl: null,
		emitCount: 0,
		emitInterval: 10,
		particleVelocity: {x: 0, y: 0},
		particleTTL: function(){return Math.random() * 50}
	});
	this.backLeft = stardust.add(0, 0, {
		image: IMAGE_FIRE1,
		width: 0,
		height: 0,
		ttl: null,
		emitCount: 0,
		emitInterval: 10,
		particleVelocity: {x: 0, y: 0},
		particleTTL: function(){return Math.random() * 50}
	});
}

Car.prototype.update = function(delta){
	if(finished){
		return;
	}
	if(!this.inFrictionZone){
		this.body.frictionAir = this.originalFriction;
	}
	this.inFrictionZone = false;

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

	this.recording.push({x: this.body.position.x, y: this.body.position.y, angle: this.body.angle, time: raceTime});
	
	this.backEmitter.x = this.body.position.x + (-30 * Math.cos(this.body.angle));
	this.backEmitter.y = this.body.position.y + (-30 * Math.sin(this.body.angle));
	if(controller.accelerate){
		this.backEmitter.emitCount = 10;
	}else{
		this.backEmitter.emitCount = 0;
	}
	this.frontRight.x = this.body.position.x + (23 * Math.cos(this.body.angle));
	this.frontRight.y = this.body.position.y + (23 * Math.sin(this.body.angle));
	this.frontRight.x += (13 * Math.cos(this.body.angle + Math.PI/2));
	this.frontRight.y += (13 * Math.sin(this.body.angle + Math.PI/2));
	if(controller.forwardRight){
		this.frontRight.emitCount = 10;
	}else{
		this.frontRight.emitCount = 0;
	}
	this.frontRight.velocity = this.body.velocity;
	this.frontLeft.x = this.body.position.x + (23 * Math.cos(this.body.angle));
	this.frontLeft.y = this.body.position.y + (23 * Math.sin(this.body.angle));
	this.frontLeft.x += (-13 * Math.cos(this.body.angle + Math.PI/2));
	this.frontLeft.y += (-13 * Math.sin(this.body.angle + Math.PI/2));
	if(controller.forwardLeft){
		this.frontLeft.emitCount = 10;
	}else{
		this.frontLeft.emitCount = 0;
	}
	this.backRight.x = this.body.position.x + (-23 * Math.cos(this.body.angle));
	this.backRight.y = this.body.position.y + (-23 * Math.sin(this.body.angle));
	this.backRight.x += (13 * Math.cos(this.body.angle + Math.PI/2));
	this.backRight.y += (13 * Math.sin(this.body.angle + Math.PI/2));
	if(controller.backRight){
		this.backRight.emitCount = 10;
	}else{
		this.backRight.emitCount = 0;
	}
	this.backLeft.x = this.body.position.x + (-23 * Math.cos(this.body.angle));
	this.backLeft.y = this.body.position.y + (-23 * Math.sin(this.body.angle));
	this.backLeft.x += (-13 * Math.cos(this.body.angle + Math.PI/2));
	this.backLeft.y += (-13 * Math.sin(this.body.angle + Math.PI/2));
	if(controller.backLeft){
		this.backLeft.emitCount = 10;
	}else{
		this.backLeft.emitCount = 0;
	}
}

Car.prototype.render = function(){
	ctx.save();
	ctx.translate(canvas.width/2, canvas.height/2);
	ctx.rotate(this.body.angle);
	ctx.drawImage(IMAGE_CAR, -IMAGE_CAR.width/2, -IMAGE_CAR.height/2);
	ctx.restore();
}
