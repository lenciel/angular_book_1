'use strict';

angular.module('MyApp', ["MyApp.controllers"]).run(function($rootScope) {
	$rootScope.title = 'Events';
});