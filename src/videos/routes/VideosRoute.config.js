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
		videosBackup = [],
		originalList;
	
	vm.videos = [];
	vm.page = 1;

	vm.searchVideos = searchVideos;
	vm.getMoreRatedUsers = getMoreRatedUsers;
	vm.filterByDescription = filterByDescription;
	vm.loadNextPage = loadNextPage;
	vm.loadPreviousPage = loadPreviousPage;

	activate();

	///////

	function activate() {
		searchVideos(1, 10);
	}

	/////// PUBLIC FUNCTIONS

	function searchVideos(page, ipp) {
		numberOfItems = ipp;
		vm.ipp = ipp;
		videosService.loadVideos(page, ipp)
			.then( function(response) {
				vm.lastPage = response.lastPage;
				vm.videos = response.list;
				originalList = vm.videos;
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
			vm.videos = originalList;
			filterByDescription();
		}
	}

	function filterByDescription() {
		var filteredList = [];

		vm.videos = originalList;
		if ( !vm.searchText ) {
			return;
		}

		vm.videos.filter( function(element) {
			if ( element.description.indexOf(vm.searchText) > -1 ) {
				filteredList.push(element);
			}
		});

		vm.videos = filteredList;
	}

	function loadNextPage() {
		vm.page = vm.page + 1;
		searchVideos(vm.page, numberOfItems);
	}

	function loadPreviousPage(){
		vm.page = vm.page - 1;
		searchVideos(vm.page, numberOfItems);
	}
}
