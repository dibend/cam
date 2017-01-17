//script to go to each saved preset and save a picture
var cam = require('./cam.js');

cam.setPanSpeed(1);
cam.setBrightness(6);
cam.setContrast(6);

/* recursive function to move to a preset and take a snapshot after 5 seconds,
then call itself again on the next preset if more remain (1-6) */
function monitor(preset) {
	cam.callPreset(preset);
	setTimeout(function() {
		cam.snap();
		if(preset < 6) {
			monitor(preset+1);
		}
	}, 5000);
}

//start at preset 1
monitor(1);
