'use strict';

angular.module('salesFront')
   .factory('Users', function Users($resource, $rootScope) {
	return $resource($rootScope.apiURL + 'users/:id', {
	}, {
		index: {
			method: 'GET',
			params: {
				isArray: true
			}
		},
		show: {
			method: 'GET',
			params: {
				id: '@id'
			}
		},
		create: {
			method: 'POST',
			params: {
				isArray: true
			}
		},
		update: {
			method: 'PUT',
			params: {
				id: '@id',
				isArray: true
			}
		},
		destroy: {
			method: 'DELETE',
			params: {
				id: '@id'
			}
		},
	});
});
