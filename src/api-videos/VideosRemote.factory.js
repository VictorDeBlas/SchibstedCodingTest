'use strict';

module.exports = VideosRemoteFactory;

/* @ngInject */
function VideosRemoteFactory($http) {
	var service = {
		loadVideos: loadVideos
	};
	return service;

	//////

	function loadVideos( page, perPage, query, filter, filterEmbeddable, sort, direction ) {
		var url = './src/api-videos/api.json',
			params = { 
				page: page,
				per_page: perPage,
				query: query,
				filter: filter,
				filter_embeddable: filterEmbeddable,
				sort: sort,
				direction: direction
			};
		return $http.get( url, params );
	}
}