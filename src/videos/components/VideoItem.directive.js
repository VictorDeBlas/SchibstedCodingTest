'use strict';

module.exports = VideoItemDirective;

/* @ngInject */
function VideoItemDirective() {
	var directive = {
		restrict: 'E',
		template: require('./video-item.tpl.html'),
		scope: {},
		controller: VideoItemDrvController,
		controllerAs: 'vm',
		bindToController: {
			video: '='
		},
	};
	return directive;
}

/* @ngInject */
function VideoItemDrvController() { 
    //var vm = this;
}
