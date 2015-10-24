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
}
