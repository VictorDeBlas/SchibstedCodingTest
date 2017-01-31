'use strict';

module.exports = VideosRouteConfig;

/* @ngInject */
function VideosRouteConfig($routeProvider) {
	$routeProvider.when('/list', {
		template: require('./VideosRoute.tpl.html'),
		controller: VideosRouteController,
		controllerAs: 'vm'
	});
}

/* @ngInject */
function VideosRouteController(videosService) {
	var vm = this;

	vm.searchVideos = searchVideos;

	///////

	function searchVideos() {
		videosService.loadVideos(1, 10, '', '', '', '', '')
			.then( function(response) {
				console.log(response);
			});
	}
}
