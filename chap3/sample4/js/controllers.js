'use strict';

angular.module('MyApp.controllers', []).controller('TimeoutController', ['$rootScope', '$scope', '$timeout', function($rootScope, $scope, $timeout) {
	$scope.now = new Date();

	$scope.fetchNewDate = function() {
		$timeout(function() {
			$scope.now = new Date();
		    console.log('updated'); //log this to console
		}, 3000);
	};
}]);