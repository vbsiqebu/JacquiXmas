'use strict';

angular.module('JacquiXmasApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/bio', {
        templateUrl: 'views/bio.html',
        controller: 'MainCtrl'
      })
      .when('/photos', {
        templateUrl: 'views/photos.html',
        controller: 'MainCtrl'
      })
      .when('/resume', {
        templateUrl: 'views/resume.html',
        controller: 'MainCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
