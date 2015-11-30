'use strict';

angular.module('Products.routes',[]);
angular.module('Products.routes')
.config(function ($stateProvider, $urlRouterProvider) {
$stateProvider
	.state('Products', {
		url: '/',
		template: '<div ui-view></div>',
		abstract: true
	})
	.state('Products.home', {
		url: 'home',
		templateUrl: '../../views/home/index.html',
		controller: 'homeController'
	});
	$urlRouterProvider.otherwise('/home');
});
