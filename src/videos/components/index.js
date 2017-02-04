'use strict';

var angular = require('angular');

module.exports = angular.module('sct.videos.components', [
])

.directive('videoItem', require('./VideoItem.directive'))

.name;