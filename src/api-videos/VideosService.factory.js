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
				return response.data.data.slice(page - 1, perPage*page);
			});
	}
}