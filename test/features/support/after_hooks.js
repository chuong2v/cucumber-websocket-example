var FleetModel = require("./../../../libs/models/fleet.js");

var Hooks = function(callback) {
	this.After(function(scenario, callback) {
		FleetModel.remove().then(function() {
			callback();
		})
	});
};

module.exports = Hooks;