'use strict';

angular.module('salesFront')
  .controller('UsersCtrl', ['$scope', 'Auth', '$cookies', function ($scope, Auth, $cookies) {
  	$scope.registrationForm = {};
  	$scope.users_list
  	$scope.registration_form_shown = true;
  	$scope.registration_success_message = "";
  	$scope.registration_error_message = "";
  	$scope.autorisation_success_message = "";

  	$scope.clearErrors = function () {
  		$scope.registration_success_message = "";
  		$scope.registration_error_message = "";
  		$scope.autorisation_success_message = "";
  	}

  	$scope.submitRegistrationForm = function(user) {
  		Auth.createUser({user: user}).then(function(data) {
  			$scope.clearErrors();
  			$scope.registration_form_shown = false;
  			$scope.registration_success_message = "Your registration was succesful!";
  		},
		function(err) {
			$scope.clearErrors();
			$scope.registration_form_shown = false;
			$scope.registration_error_message = "Your registration was not succesful! " + message;
		});
  	}

  	$scope.submitAutorisationForm = function(user) {
  		Auth.createSession({user: user}).then(function(data) {
  			$cookies.put('auth-token', data.token);
  		}, function(err) {
  			$scope.autorisation_success_message = "Autentication failed: " + err.data.message;
  		})
  	}

  	$scope.logout = function() {
  		$cookies.remove('auth-token');
  	}

  	$scope.index_init = function () {
  		Auth.getUsers({user: {}}).then(function (data) {
  			$scope.users_list = data.users;
  		}, function(err) {
  			console.log("Error getting users list")
  		})
  	}
  }]);
