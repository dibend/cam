var request = require('request');
var fs = require('fs');
var config = require('./config.json');

var address = 'http://' + config.user + ':' + config.password + '@' + config.ip + ':' + config.port;

exports.snap = function() {
	request(address + '/media/?action=snapshot').pipe(fs.createWriteStream(new Date() + '.png'));
}

exports.savePreset = function(preset) {
	request(address + '/media/?action=cmd&code=11&value=' + preset);
}

exports.callPreset = function(preset) {
	request(address + '/media/?action=cmd&code=13&value=' + preset);
}

//1 lowest, 10 highest
exports.setContrast = function(contrast) {
	request(address + '/media/?action=cmd&code=5&value=' + contrast);
}

//1 lowest, 10 highest
exports.setBrightness = function(brightness) {
	request(address + '/media/?action=cmd&code=6&value=' + brightness);
}

//0 fastest, 10 slowest
exports.setPanSpeed = function(speed) {
	request(address + '/set_misc.cgi?ptz_patrol_rate=' + speed);
}

exports.flipHorizontal = function() {
	request(address + '/media/?action=cmd&code=9&value=13');
}

exports.flipVertical = function() {
	request(address + '/media/?action=cmd&code=9&value=23');
}

exports.horizontalPan = function() {
	request(address + '/media/?action=cmd&code=2&value=9');
}

exports.verticalPan = function() { 
	request(address + '/media/?action=cmd&code=2&value=10');
}

exports.scan = function() {
	request(address + '/media/?action=cmd&code=2&value=11');
}

//movement occurs in given direction for given milliseconds
exports.up = function(ms) {
	request(address + '/media/?action=cmd&code=2&value=1');
	setTimeout(function() {
		request(address + '/media/?action=cmd&code=3&value=1');
	}, ms);
}

exports.down = function(ms) {
	request(address + '/media/?action=cmd&code=2&value=2');
	setTimeout(function() {
		request(address + '/media/?action=cmd&code=3&value=2');
	}, ms);
}

exports.right = function(ms) {
	request(address + '/media/?action=cmd&code=2&value=3');
	setTimeout(function() {
		request(address + '/media/?action=cmd&code=3&value=3');
	}, ms);
}

exports.left = function(ms) {
	request(address + '/media/?action=cmd&code=2&value=4');
	setTimeout(function() {
		request(address + '/media/?action=cmd&code=3&value=4');
	}, ms);
}

