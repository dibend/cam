var cam = require('./cam.js');

cam.setPanSpeed(10);
cam.setBrightness(10);
cam.setContrast(10);
cam.flipVertical();
cam.flipHorizontal();
cam.up(5000);
cam.right(5000);
setTimeout(function() {
	cam.snap();
	cam.down(5000);
	cam.left(5000);
	cam.flipVertical();
	cam.flipHorizontal();
	setTimeout(function() {
		cam.snap();
	}, 5000);
}, 5000);
