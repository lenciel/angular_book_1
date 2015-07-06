"use strict";

angular.module("MyApp.controllers", []).controller('tellMeController', ['$scope', '$location', function($scope, $location){
	$scope.loadShowMeView = function(){
		$location.path('/showMe/' + $scope.firstName + '/' + $scope.lastName);
	}
}]).controller('showMeController', ['$scope', '$routeParams', function($scope, $routeParams){
	$scope.lastName = $routeParams.lastName;
	$scope.firstName = $routeParams.firstName;
}])