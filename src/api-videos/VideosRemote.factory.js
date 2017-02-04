'use strict';

module.exports = VideosRemoteFactory;

/* @ngInject */
function VideosRemoteFactory($http) {
	var service = {
		loadVideos: loadVideos
	};
	return service;

	//////

	function loadVideos() {
		var url = './src/api-videos/api.json';
		return $http.get( url )
			.then( function(response) {
				return response;
			});
	}
}