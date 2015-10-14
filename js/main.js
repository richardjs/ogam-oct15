'use strict';

window.engine = Matter.Engine.create(document.body);
window.nonphysicsEntities = [];
window.player = null;

engine.world.gravity = {x: 0, y: 0};

engine.render.options.hasBounds = true;

var lastTime = null;
var delta = null;
Matter.Events.on(engine, 'beforeTick', function(event){
	if(event.timestamp === undefined){
		return;
	}
	if(lastTime === null){
		lastTime = event.timestamp;
		return;
	}
	delta = event.timestamp - lastTime;
	lastTime = event.timestamp;

	player.update(delta);

	Matter.Bounds.shift(
		engine.render.bounds,
		Matter.Vector.sub(player.body.position, {x: engine.render.options.width/2, y: engine.render.options.height/2})
	);
});

Matter.Events.on(engine, 'afterTick', function(event){
	for(var i = 0; i < nonphysicsEntities.length; i++){
		var entity = nonphysicsEntities[i];
		entity.update(delta);

		var ctx = engine.render.context;
		ctx.save();
		ctx.translate(
			-player.body.position.x + engine.render.options.width/2,
			-player.body.position.y + engine.render.options.height/2
		);
		entity.render();
		ctx.restore();
	}
});

function loadMap(map){
	Matter.World.clear(engine.world);
	nonphysicsEntities = [];
	map();
}
loadMap(inabox);
Matter.Engine.run(engine);
