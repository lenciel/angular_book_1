'use strict'

angular.module('MyApp', ["MyApp.controllers", "ngRoute"]).run(function($rootScope) {
	$rootScope.title = 'Multiple Views and Routes';
});

angular.module('MyApp').config($routeProvider, function() {
	$routeProvider.when('hello', {
		controller: "HelloController",
		templateUrl: "partials/hello.inc.html"
	}).when('world', {
		controller: "WorldController",
		templateUrl: "partials/world.inc.html"
	})
})