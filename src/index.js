'use strict';

var angular = require('angular');

module.exports = angular.module('schibstedCodeTest', [
	require('./api-videos'),
	require('./videos'),

	require('angular-route')
])

.config(function($routeProvider) {

	$routeProvider.otherwise({
		redirectTo: '/list'
	});
})

.name;