define(['angular'],function(){
	
	'use strict';

	// create a directive module
	var directiveModule = angular.module('directiveModule',[]);

	 // create a directive
	directiveModule.directive('myDriective',function(){
	  return {
	    restrict: 'E',
	    template: 'Name: {{user.name}} Address: {{user.age}}'
	  }

	})

	return directiveModule;

});// end for define 

