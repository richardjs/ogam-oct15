'use strict';

function Wall(x, y, width, height, options){
	options = options || {};
	if(options.isStatic === undefined) options.isStatic = true;

	this.body = Matter.Bodies.rectangle(
		x,
		y,
		width,
		height,
		options
	);
	Matter.World.add(engine.world, this.body);
}
