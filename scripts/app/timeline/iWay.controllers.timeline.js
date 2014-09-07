define(['angular'],function(){

	'use strict';

	console.log('timeline');

	// timeline controller module
	var timelineController = angular.module('iWay.controllers.timeline', []);

	// timeline controller
	timelineController.controller('timelineCtrl',['$scope','iWayHttpService','$http',function($scope,iWayHttpService,$http){

		//$scope.getTimelineData = getTimelineData();
		iWayHttpService.querywithParams('data/timeline.json',null).then(function(data){
		 	console.log(data);
		 	$scope.timelineData = data;
		});
		
		// scroll event
		window.onscroll = function() { 
		   if($(document).height() == $(window).scrollTop()+ $(window).height()){
		        iWayHttpService.querywithParams('data/timeline.json',null,true).then(function(data){
			 		$scope.timelineData = $scope.timelineData.concat(data);
				});
		    }
		}

	}]);


});// end for define
