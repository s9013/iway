define(['angular'],function(){

	'use strict';

	// create a directive module
	var directiveModule = angular.module('iWay.directive.timeline',[]);

	 // create a directive
	directiveModule.directive('iwayTimelineScroller',function(){
	  return {
	    link:function(scope,element,attrs){
	    	$('element').parents('body').on('scroll',function(){
	    		console.log('jay');
	    		window.scrollTo(0,90);
	    	})
	    },
	    compile:function(){
	    		//console.log('compare');
	    		//window.onscroll = function() { 
				//console.log(window.scrollY);
				//	if(window.scrollY < 200 && window.scrollY >190){
						//console.log('hack'); 
		 		// window.scrollTo(0,90);
				//	}    
				//}
                
				
                //if($(document).height() == $(window).scrollTop()+ $(window).height()){
                //    console.log('dao di le');
                //}






                
	    	}
	    
	  }

	})


	directiveModule.directive('test-modify',function(){
	  return {
	    restrict: 'E',
	    template: 'Name: {{user.name}} Address: {{user.age}}'
	  }

	})

	return directiveModule;

});// end for define

