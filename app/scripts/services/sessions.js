'use strict';

angular.module('salesFront')
   .factory('Sessions', function Users($resource, $rootScope) {
	return $resource($rootScope.apiURL + 'sessions', {
	}, {
		create: {
			method: 'POST',
			params: {
				isArray: true
			}
		}
	});
});
