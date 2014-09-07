define(['angular',
		'route',
		'scripts/app/home/iWay.controllers.home',
		'scripts/app/main/services',
		'scripts/app/timeline/iWay.controllers.timeline','scripts/app/timeline/iWay.directives.timeline',
		'scripts/app/article/iWay.controllers.article','scripts/app/article/iWay.directives.article',
		'scripts/app/show/iWay.controllers.show',
		'scripts/app/about/iWay.controllers.about'
		],function(){

		'use strict';

			var app = angular.module('iWayApp', [ 
				'ngRoute',
				'iWay.controllers.home',
				'iWay.services.common',
				'iWay.controllers.timeline','iWay.directive.timeline',
				'iWay.controllers.article','iWay.directive.article',
				'iWay.controllers.show',
				'iWay.controllers.about'
			]);

			app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
				$locationProvider.html5Mode(false).hashPrefix('~');
				$routeProvider
					.when('/home', {
				        templateUrl: 'scripts/app/home/iWay.view.home.html',
				        controller: 'homeCtrl'
				    })
				    .when('/timeline', {
				        templateUrl: 'scripts/app/timeline/iWay.view.timeline.html',
				        controller: 'timelineCtrl'
				    })
				    .when('/article', {
				        templateUrl: 'scripts/app/article/iWay.view.article.html',
				        controller: 'articleCtrl'
				    })
				    .when('/article2/:id', {
				        templateUrl: 'scripts/app/article/iWay.view-detail.article.html',
				        controller: 'article2Ctrl'
				    })
				    .when('/show', {
				        templateUrl: 'scripts/app/show/iWay.view.show.html',
				        controller: 'showCtrl'
				    })
				    .when('/show2/:id', {
				        templateUrl: 'scripts/app/show/iWay.view-detail.show.html',
				        controller: 'show2Ctrl'
				    })
				    .when('/about', {
				        templateUrl: 'scripts/app/about/iWay.view.about.html',
				        controller: 'aboutCtrl'
				    })
				    .otherwise({
				        redirectTo: '/home'
				    });
			}]);

});//for define end