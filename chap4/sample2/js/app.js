"use strict";

angular.module("MyApp", ["MyApp.controllers", "ngRoute"]).run(function($rootScope){
	$rootScope.title = "SayWeSayMe";
});

angular.module("MyApp").config(function($routeProvider, $locationProvider){
	$routeProvider.when('/tellMe', {
		controller: 'tellMeController',
		templateUrl: '/templates/tell.me.inc.html'
	}).when('/showMe/:firstName/:lastName', {
		controller: 'showMeController',
		templateUrl:'/templates/show.me.inc.html'
	}).otherwise({redirectTo: '/tellMe'});

	$locationProvider.html5Mode(true);
});