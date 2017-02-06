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
	var vm = this,
		numberOfItems = 10;
	
	vm.videos = [];

	vm.searchVideos = searchVideos;
	vm.getMoreRatedUsers = getMoreRatedUsers;

	///////

	function searchVideos(ipp) {
		numberOfItems = ipp;
		videosService.loadVideos(1, ipp)
			.then( function(response) {
				vm.videos = response;
			});
	}

	function getMoreRatedUsers() {
		vm.videos = [];
		videosService.loadVideos(1, numberOfItems)
			.then( function(response) {
				if ( vm.moreRatedUsers ) {
					response.forEach( function( element ) {
						if ( element.user.metadata.connections.likes.total > 10 ) {
							vm.videos.push(element);
						}
					});
				} else {
					vm.videos = response;
				}
			});
	}
}
