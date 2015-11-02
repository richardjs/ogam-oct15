'use strict';

function Ghost(recording){
	this.recording = recording.slice();
	nonphysicsEntities.push(this);
}

Ghost.prototype.update = function(delta){
}

Ghost.prototype.render = function(){
	while(this.recording[0].time < raceTime && this.recording.length > 1){
		this.recording.shift();
	}

	ctx.save();
	ctx.translate(
		-player.body.position.x + canvas.width/2 + this.recording[0].x,
		-player.body.position.y + canvas.height/2 + this.recording[0].y
	);
	ctx.rotate(this.recording[0].angle);
	ctx.globalAlpha=.2;
	ctx.drawImage(IMAGE_CAR, -IMAGE_CAR.width/2, -IMAGE_CAR.height/2);
	ctx.globalAlpha=1;
	ctx.restore();
}
