'use strict';

/**
 * @ngdoc overview
 * @name salesFront
 * @description
 * # salesFront
 *
 * Main module of the application.
 */

var app = angular
  .module('salesFront', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(appConfig)
  .run(appRun);

appRun.$inject = ['$rootScope'];

function appRun ($rootScope) {
  $rootScope.apiURL = 'http://localhost:3000/api/';
  $rootScope.safeApiURL = 'https://localhost:3000/api/';
}

appConfig.$inject = ['$routeProvider', '$httpProvider'];

function appConfig ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
    })
    .when('/users', {
      templateUrl: 'views/users/index.html',
      controller: 'UsersCtrl'
    })
    .when('/users/new', {
      templateUrl: 'views/users/new.html',
      controller: 'UsersCtrl'
    })
    .when('/users/login', {
      templateUrl: 'views/users/login.html',
      controller: 'UsersCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
    $httpProvider.interceptors.push(function($q, $cookies) {
      return {
        'request': function(config) {
          config.headers['auth-token'] = $cookies.get('auth-token');
          return config;
        }
      };
    });
}
