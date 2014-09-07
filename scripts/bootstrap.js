define(['angular','domReady','scripts/app/main/app'],function(angular,domReady){
	
	'use strict';

	domReady(function(){
		angular.bootstrap(document,['iWayApp']);
		console.log('dom ready');
		//$('.carousel').carousel();
	});

});