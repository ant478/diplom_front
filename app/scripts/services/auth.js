'use strict';

angular.module('salesFront')
  .factory('Auth', function Auth ($http, $rootScope, Users, Sessions) {
	var currentUser

	return {
		createUser: function (params, callback) {
			var cb = callback || angular.noop;

			return Users.create(params, 
				function (data) {
					return cb(data);
				}, 
				function (err){
					console.log('error', err); 
					return cb(err)
				}).$promise;
		},
		showUser: function (params, callback) {
			var cb = callback || angular.noop;

			return Users.show(params, 
				function (data) {
					return cb(data);
				}, 
				function (err){
					console.log('error', err); 
					return cb(err)
				}).$promise;
		},
		getUsers: function (params, callback) {
			var cb = callback || angular.noop;

			return Users.get(params, 
				function (data) {
					return cb(data);
				}, 
				function (err){
					console.log('error', err); 
					return cb(err)
				}).$promise;
		},
		updateUser: function (params, callback) {
			var cb = callback || angular.noop;

			return Users.update(params, 
				function (data) {
					return cb(data);
				}, 
				function (err){
					console.log('error', err); 
					return cb(err)
				}).$promise;
		},
		destroyUser: function (params, callback) {
			var cb = callback || angular.noop;

			return Users.destroy(params, 
				function (data) {
					return cb(data);
				}, 
				function (err){
					console.log('error', err); 
					return cb(err)
				}).$promise;
		},
		createSession: function (params, callback) {
			var cb = callback || angular.noop;

			return Sessions.create(params, 
				function (data) {
					return cb(data);
				}, 
				function (err){
					console.log('error', err); 
					return cb(err)
				}).$promise;
		}
	};
});
