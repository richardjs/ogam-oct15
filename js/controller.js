'use strict';

var controller = {};
document.addEventListener('keydown', function(event){
	switch(event.keyCode){
		case 65:
			controller.backLeft = true;
			break;
		case 81:
		case 39:
			controller.forwardLeft = true;
			break;
		case 68:
			controller.backRight = true;
			break;
		case 69:
		case 37:
			controller.forwardRight = true;
			break;
		case 38:
			controller.accelerate = true;
			break;
	}
});

document.addEventListener('keyup', function(event){
	switch(event.keyCode){
		case 65:
			controller.backLeft = false;
			break;
		case 81:
		case 39:
			controller.forwardLeft = false;
			break;
		case 68:
			controller.backRight = false;
			break;
		case 69:
		case 37:
			controller.forwardRight = false;
			break;
		case 38:
			controller.accelerate = false;
			break;
	}
});
