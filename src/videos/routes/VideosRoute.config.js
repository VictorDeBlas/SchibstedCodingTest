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
		numberOfItems = 10,
		videosBackup = [];
	
	vm.videos = [];

	vm.searchVideos = searchVideos;
	vm.getMoreRatedUsers = getMoreRatedUsers;

	activate();

	///////

	function activate() {
		searchVideos(10);
	}

	/////// PUBLIC FUNCTIONS

	function searchVideos(ipp) {
		numberOfItems = ipp;
		videosService.loadVideos(1, ipp)
			.then( function(response) {
				vm.videos = response;
			});
	}

	function getMoreRatedUsers() {

		if ( vm.moreRatedUsers ) {
			videosBackup = vm.videos;
			vm.videos = [];
			videosBackup.forEach( function(element){
				if ( element.user.metadata.connections.likes.total > 10 ) {
					vm.videos.push(element);
				}
			});
		} else {
			vm.videos = videosBackup;
		}
	}
}
