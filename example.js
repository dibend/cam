var cam = require('./cam.js');

cam.setPanSpeed(10);
cam.up(5000);
cam.right(5000);
setTimeout(function() {
	cam.snap();
	cam.down(5000);
	cam.left(5000);
	setTimeout(function() {
		cam.snap();
	}, 5000);
}, 5000);
