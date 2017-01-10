var request = require('request');
var fs = require('fs');

var user = 'admin';
var password = '';
var ip = '192.168.1.239';
var port = '81';

var address = 'http://' + user + ':' + password + '@' + ip + ':' + port;

exports.snap = function() {
	request(address + '/media/?action=snapshot').pipe(fs.createWriteStream(new Date() + '.png'));
}

//0 fastest, 10 slowest
exports.setPanSpeed = function(speed) {
	request(address + '/set_misc.cgi?ptz_patrol_rate=' + speed);
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

