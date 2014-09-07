define(['angular','resource'],function(){

	'use strict';

	angular.module('iWay.services.common', ['ngResource'])
	.factory('iWayHttpService', ['$q','$http',function($q, $http) {

				var httpService = {};
				 
				httpService.querywithParams = function(url,params,spin) {
					if(!spin){
						$("#foo").show();
					}
					var deferred = $q.defer();
					$http({
						method : 'get',
						url : url,
						params:params,
                        headers: {
							"Content-Type": "application/json;charset=UTF-8",
							"X-Requested-With": "XMLHttpRequest"
						}
					}).success(function(data, status, headers, config) {
						deferred.resolve(data);
						$("#foo").hide();
					}).error(function(reason, status, headers, config) {
						deferred.reject(reason);
						$("#foo").hide();
					});
					return deferred.promise;
				};
					
				return httpService;

	} ]);

});// end for define

