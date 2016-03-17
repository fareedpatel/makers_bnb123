'use strict';

angular.module('makersBnB', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/spaces', {
    templateUrl: '/index.html',
    controller: 'SpacesCtrl'
  });
}])

.controller('SpacesCtrl', function($scope) {


    $scope.spaces = {space:{id: 1, name: "my lovely space"}};
});



