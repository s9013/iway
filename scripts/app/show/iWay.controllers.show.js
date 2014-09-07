define(['angular','jquery'],function(angular,jquery){

	'use strict';

		console.log('show');

		// show controller module
		var showController = angular.module('iWay.controllers.show', []);

		// show controller
		showController.controller('showCtrl',['$scope','iWayHttpService',function($scope,iWayHttpService){
			$scope.user = {
			    name: 'show',
			    age: 22, 
			};

			iWayHttpService.querywithParams('data/images.json',null).then(function(data){
			 	console.log(data);
			 	$scope.images = data;
			});

			console.log($scope.user);




// 使用requirejs引进mosonry bridget imagesloaded
requirejs([
			'jquery',
			'vender/masonry.pkgd',
			'vender/imagesloaded.pkgd',
			'vender/jquery.bridget'],
			function($,Masonry){
				// make Masonry a jQuery plugin
				$.bridget( 'masonry', Masonry );
				// now you can use $().masonry()
				var html = '';
				// var data = [1,2,3,1,2,3,2,3,1,2,3,1,2,3,1,2,3,2,3,1,2,3,1,2,3,1,2,3,2,3,1,2,3];
			    for ( var i = 0; i < 33; i++ ) {
			         html += '<div class="item"><div class="pic"><img src="images/muscle%20('+i+').jpg" > </div> <div class="text">hello! how are you ?</div>  </div>';
			    }
			    $('#container').html(html);
			    $('#container').imagesLoaded( function(){
					$('#container').masonry({
					    itemSelector : '.item',
					    columnWidth: 260,
					    gutter:10
					});
				});

			function addItems(){
			      var elems = [];
			      var fragment = document.createDocumentFragment();
			      //var data = [1,2,3,1,2,3,2,3,1,2,3,1,2,3,1,2,3,2,3,1,2,3,1,2,3,1,2,3,2,3,1,2,3];

			      for ( var i = 0; i < 33; i++ ) {
			        var elem = $('<div class="item"><div class="pic"><img src="images/muscle%20('+i+').jpg" > </div> <div class="text">hello! how are you ?</div></div>')[0] //getItemElement();
			        fragment.appendChild( elem );
			        elems.push( elem );
			      }
			      // append elements to container
			      container.appendChild( fragment );
			      // add and lay out newly appended elements
			     // msnry.appended( elems );
			      $('#container').imagesLoaded( function(){
			      	$('#container').masonry( 'appended', elems);
			      });
			  }

			  // scroll
			  window.onscroll = function() { 
			    if($(window).scrollTop()!==0 && $(document).height() == $(window).scrollTop()+ $(window).height()){
			      addItems();
			    }
			  }


				// scroll event
			// window.onscroll = function() { 
			//    if( $(window).scrollTop()!==0 && $(document).height() == $(window).scrollTop()+ $(window).height()){
			//         iWayHttpService.querywithParams('ajax/images.json',null,true).then(function(data){
			// 	 		$scope.images = $scope.images.concat(data);
			// 	 		console.log(data);
			// 		});
			//     }
			// }

			}
);

		}]);





		// show controller
		showController.controller('show2Ctrl',['$scope','iWayHttpService','$sce','$routeParams',function($scope,iWayHttpService,$sce,$routeParams){
				console.log($routeParams.id);

				iWayHttpService.querywithParams('ajax/images.json',null).then(function(data){
					console.log(data);
					for(var i=0;i< data.length; i++){
						if($routeParams.id == data[i].id){
							$scope.image =data[i];
						}
					}			 	
				});
				


		}]);

});// end for define
