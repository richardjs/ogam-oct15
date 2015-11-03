'use strict';
(function(){

/*	For flexibility, most parameters may be either a literal or a function
	called at the time of use. getValue is used to abstract that process. */
function getValue(x, time){
	if(typeof(x) === 'function'){
		return x(time);
	}else{
		return x;
	}
}

/*	The Stardust object keeps track of emitters, and performs task such as 
	updating, rendering, and removing when their duration ends. */
function Stardust(){
	this.emitters = [];
}

Stardust.prototype.add = function(x, y, options){
	if(Array.isArray(options)){
		for(var i = 0; i < options.length; i++){
			this.add(x, y, options[i]);
		}
		return;
	}

	var emitter = new Emitter(x, y, options);
	this.emitters.push(emitter);
	return emitter;
}

Stardust.prototype.remove = function(emitter){
	this.emitters.splice(this.emitters.indexOf(emitter), 1);
}

Stardust.prototype.update = function(delta){
	while(delta > 100){
		this.update(100);
		delta -= 100;
	}
	var stillAlive = [];
	this.emitters.forEach(function(emitter){
		emitter.update(delta);
		if(emitter.ttl === null || emitter.ttl > 0 || emitter.particles.length > 0){
			stillAlive.push(emitter);
		}
	});
	this.emitters = stillAlive;
}

Stardust.prototype.render = function(canvas, ctx){
	this.emitters.forEach(function(emitter){
		emitter.render(canvas, ctx);
	});
}

/*	An Emitter object creates and maintaines Particles according to the rules given to it. */
function Emitter(x, y, options){
	this.x = x;
	this.y = y;

	this.image = getValue(options.image) || null;

	if(options.ttl === undefined){
		this.ttl = 1000;
	}else{
		this.ttl = getValue(options.ttl);
	}
	
	this.width = options.width || 0;
	this.height = options.height || 0;
	this.velocity = options.velocity || null;
	this.inheritVelocity = options.inheritVelocity;
	if(this.inheritVelocity === undefined){
		this.inheritVelocity = true;
	}

	this.emitCount = options.emitCount || 10;
	this.emitInterval = options.emitInterval || 500;
	this.particleTTL = options.particleTTL || 100;
	this.particleVelocity = options.particleVelocity || {x: 0, y: 0};

	this.renderOrder = options.renderOrder || 'first'; // or 'last'

	this.opacity = options.opacity || 1;
	this.rotation = options.rotation || 0;

	this.time = 0;
	this.emitTimer = 0;
	this.particles = [];
}

Emitter.prototype.update = function(delta){
	if(this.emitTimer <= 0 && (this.ttl >= 0 || this.ttl === null)){
		var count = getValue(this.emitCount, this.time);
		for(var i = 0; i < count; i++){
			this.particles.push(new Particle(
				this,
				getValue(this.image, this.time),
				getValue(this.x, this.time) + Math.random()*getValue(this.width, this.time),
				getValue(this.y, this.time) + Math.random()*getValue(this.height, this.time),
				getValue(this.particleTTL, this.time),
				getValue(this.particleVelocity),
				getValue(this.opacity, this.time),
				getValue(this.rotation, this.time)
			));
		}

		this.emitTimer += getValue(this.emitInterval, this.time);
	}
	this.emitTimer -= delta;

	var stillAlive = [];
	this.particles.forEach(function(particle){
		particle.update(delta);
		if(particle.ttl === null || particle.ttl > 0){
			stillAlive.push(particle);
		}
	});
	this.particles = stillAlive;
	
	if(this.velocity){
		var velocity = getValue(this.velocity, this.time);
		this.x += getValue(velocity, this.time).x * delta / 1000;
		this.y += getValue(velocity, this.time).y * delta / 1000;
	}

	if(this.ttl !== null){
		this.ttl -= delta;
	}

	this.time += delta;
}

Emitter.prototype.render = function(canvas, ctx){
	if(getValue(this.renderOrder) === 'first'){
		for(var i = this.particles.length - 1; i >= 0; i--){
			this.particles[i].render(canvas, ctx);
		}
	}else{
		for(var i = 0; i < this.particles.length; i++){
			this.particles[i].render(canvas, ctx);
		}
	}
}

/* A Particle object represents a single object rendered to the screen. */
function Particle(emitter, image, x, y, duration, velocity, opacity, rotation){
	this.emitter = emitter;
	this.image = image;
	this.x = x;
	this.y = y;
	this.ttl = duration;
	this.velocity = velocity;
	this.opacity = opacity;
	this.rotation = rotation;

	this.time = 0;
}

Particle.prototype.update = function(delta){
	var velocity = getValue(this.velocity, this.time);
	this.x += velocity.x * delta / 1000;
	this.y += velocity.y * delta / 1000;
	if(this.emitter.velocity && getValue(this.emitter.inheritVelocity, this.emitter.time)){
		var emitterVelocity = getValue(this.emitter.velocity, this.time);
		this.x += emitterVelocity.x * delta / 1000;
		this.y += emitterVelocity.y * delta / 1000;
	}

	if(this.ttl !== null){
		this.ttl -= delta;
	}

	this.time += delta;
}

Particle.prototype.render = function(canvas, ctx){
	ctx.save();
	ctx.translate(getValue(this.x, this.time), getValue(this.y, this.time));
	ctx.rotate(getValue(this.rotation, this.time));
	ctx.globalAlpha = getValue(this.opacity, this.time);
	var image = getValue(this.image, this.time);
	ctx.drawImage(image, -image.width/2, -image.height/2);
	ctx.restore();
}

/* Define public objects. */
window.Stardust = Stardust;
window.Emitter = Emitter;
window.Particle = Particle;

})();
