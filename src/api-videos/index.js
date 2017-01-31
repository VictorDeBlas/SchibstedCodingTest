// index.js
/*
	Module scd.products
*/
'use strict';

var angular = require('angular');

module.exports = angular.module('sct.api-videos', [
])

// Product is registered with capital P because we do **new** Product()
.factory('Videos', require('./Videos.factory'))
// other artifacts are singletons (one instance) so with camelCase
.factory('videosRemote', require('./VideosRemote.factory'))
.factory('videosService', require('./VideosService.factory'))

.name;