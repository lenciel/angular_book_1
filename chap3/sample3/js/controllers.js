'use strict';

angular.module('MyApp.controllers', []).controller('TimeoutController', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$scope.now = new Date();

	$scope.scheduleTask = function() {
		setTimeout(function() {
			$scope.$apply(function() {
		    	$scope.now = new Date();
		    	console.log('updated'); //log this to console
		    });
		}, 3000);
	};
}]);