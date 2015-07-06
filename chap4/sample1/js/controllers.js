"use strict"

angular.module('MyApp.controllers',[]).controller('HelloController', ['$scope', function($scope){
	$scope.message = "Hello";
}]).controller('WorldController', ['$scope', function($scope){
	$scope.message = "World";
}]);