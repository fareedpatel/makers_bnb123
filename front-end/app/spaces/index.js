'use strict';

angular.module('makersBnB', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/spaces', {
    templateUrl: '/index.html',
    controller: 'SpacesCtrl'
  });
}])

.controller('SpacesCtrl', ['$scope', function($scope) {
  this.getSpaces = function() {
		return [{id: 1, name: "my lovely space"}, {id: 2, name: "My horrible space"}];
	};

	$scope.spaces = this.getSpaces();

}]);