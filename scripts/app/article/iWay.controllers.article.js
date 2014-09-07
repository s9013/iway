define(['angular'],function(){

	'use strict';

		console.log('article');

		// article controller module
		var articleController = angular.module('iWay.controllers.article', []);

		// article controller
		articleController.controller('articleCtrl',['$scope','$http','$sce',function($scope,$http,$sce){
				$scope.user = {
				    name: 'article',
				    age: 22, 
				};


				// or use $http to call ajax
				$http.get('data/articles.json')
            	//$http.get('data/articles.php')
					.success(function(data){
						console.log('success');
						console.log(data);
						$scope.articles= data;
						
					}).error(function(data,status,headers,config){
						console.log('error');
					});

				$scope.trust = function(html){
					return $sce.trustAsHtml(html);
				}

				console.log($scope.user);
		}]);


		// article controller
		articleController.controller('article2Ctrl',['$scope','$http','$sce','$routeParams',function($scope,$http,$sce,$routeParams){
				console.log($routeParams.id);
				// or use $http to call ajax
				$http.get('data/articles.json')
            	 //$http.get('data/articles.php')
					.success(function(data){
						//$scope.articles = data;

						for(var i=0; i<data.length; i++){
							if(data[i].id == $routeParams.id){
								$scope.article = data[i];
							}
						}


					}).error(function(data,status,headers,config){
						console.log('error');
					});

				$scope.trust = function(html){
					return $sce.trustAsHtml(html);
				}
		}]);

});// end for define