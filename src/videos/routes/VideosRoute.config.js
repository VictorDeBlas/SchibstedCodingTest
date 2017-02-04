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
		var numberOfItems = ( vm.ipp ) ? vm.ipp : 10;
		videosService.loadVideos(1, numberOfItems)
			.then( function(response) {
				vm.videos = response;
			});
	}
}
