'use strict';

angular.module('JacquiXmasApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.year = new Date().getFullYear();
  });
