'use strict';

module.exports = VideosServiceFactory;

/* @ngInject */
function VideosServiceFactory(videosRemote) {
	var service = {
		loadVideos: loadVideos,
	};

	return service;

	//////

	function loadVideos( page, perPage, query, filter, filterEmbeddable, sort, direction ) {
		return videosRemote.loadVideos( page, perPage, query, filter, filterEmbeddable, sort, direction );
	}
}