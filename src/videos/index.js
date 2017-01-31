'use strict';

var angular = require('angular');

module.exports = angular.module('sct.videos', [

	//require('./components'),
	require('./routes')
])

.directive('videosList', require('./Videos.directive'))

.name;