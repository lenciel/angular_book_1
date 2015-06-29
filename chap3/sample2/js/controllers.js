'use strict';

angular.module('MyApp.controllers', []).controller('SiteController', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$scope.publisher = 'Publisher 1';
	$scope.types = ['Art', 'Geography', 'Science', 'Programming'];
	$scope.type = $scope.types[0]; 
}]).controller('BookController', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http){
	$scope.publisher = 'Publisher 2';
	$scope.books = [{'bookName': 'yo'}, {'bookName': 'yo2'}];
	$scope.wishListCount = 0;
	$scope.addToWishList = function(book) {
		$scope.wishListCount++;
	};
	$scope.$watch('wishListCount', function(newVal, oldVal) {
		console.log('Called ' +newVal+ ' times');
		if (newVal === 2) {
			alert('Great! You added 2 items.');
		}
	});
}]);