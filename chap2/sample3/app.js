function GreetingControllerConstructer($rootScope, $scope, $http) {
	this.now = new Date();
	this.helloMessages = ['Hello', 'Bonjour', 'Hloa', 'Ciao', 'Hallo'];
	this.greeting = this.helloMessages[0];

	this.getRandomHelloMessage = function() {
		this.greeting = this.helloMessages[parseInt(Math.random() * this.helloMessages.length)];
	}
}

// use the $inject property so the code will be validate after minification
GreetingControllerConstructer.$inject = ['$rootScope', '$scope', '$http'];

angular.module('myApp', []).controller('GreetingController', GreetingControllerConstructer);