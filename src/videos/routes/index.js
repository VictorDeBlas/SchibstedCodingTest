'use strict';

var angular = require('angular');

module.exports = angular.module('sct.videos..routes', [

	require('angular-route'),
])

.config(require('./VideosRoute.config'))

.name;