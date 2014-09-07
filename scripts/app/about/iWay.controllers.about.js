define(['angular'],function(){
	
	'use strict';

	console.log('about');

	// about controller module
	var aboutController = angular.module('iWay.controllers.about', []);

	// about controller
	aboutController.controller('aboutCtrl',['$scope',function($scope){
			$scope.user = {
			    name: 'about',
			    age: 22, 
			};

			console.log($scope.user);
	}]);

});//end for define
