'use strict';

module.exports = VideosServiceFactory;

/* @ngInject */
function VideosServiceFactory(videosRemote) {
	var service = {
		loadVideos: loadVideos,
	};

	return service;

	//////

	//, query, filter, filterEmbeddable, sort, direction
	function loadVideos( page, perPage ) {
		return videosRemote.loadVideos( page, perPage )
			.then ( function(response) {
				return {
					list: response.data.data.slice( perPage*(page - 1), perPage*page),
					lastPage: response.data.data.length / perPage
				};
			});
	}
}