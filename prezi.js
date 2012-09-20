/*
 * Prezi-style Menu
 * Version 1.0
 * https://github.com/ca7pe/PreziMenu
 *
 * HTML5+CSS3+jQuery
 *
 * Copyright (c) 2012 ca7pe (Sina Weibo @ica7pe http://weibo.com/u/1703532252)
*/
$(function(){
	var delay = 60, delayTime, subDiv = $('.subDiv');       
	var openDiv = function(){
		$($(subDiv).get().reverse()).each(function(i){
			delayTime = i * delay;
			var ele = $(this);            
			window.setTimeout(function(){              
				ele.addClass('open');              
			}, delayTime);            
		});          
	}();
	$('#mainDiv').toggle(function(){    
			$('#wrapper').removeClass();
			var ii = 0;          
			$($(subDiv).get().reverse()).each(function(i){            
				delayTime = i * delay;
				var ele = $(this);            
				window.setTimeout(function(){              
					ele.removeClass('open');              
				}, delayTime);            
			});         
		},function(){
			subDiv.each(function(i){
				delayTime = i * delay;
				var ele = $(this);            
				window.setTimeout(function(){              
					ele.addClass('open');              
				}, delayTime);            
			});          
	});      
	$('#insert').toggle(function(){
		$('#wrapper').removeClass();
		$('#wrapper').addClass('insert-rotate');
	},function(){
		if($('#wrapper').hasClass('insert-rotate')){
			$('#wrapper').removeClass();			
		}
		else{
			$('#wrapper').removeClass();
			$('#wrapper').addClass('insert-rotate');
		}
		/*var width = parseInt(wrapper.css("width"));
		var height = parseInt(wrapper.css("height"));
		wrapper.css("width", (width/2) + "px");
		wrapper.css("height",(height/2) + "px");*/
	});
	$('#frame').toggle(function(){
		$('#wrapper').removeClass();
		$('#wrapper').addClass('frame-rotate');
	},function(){
		if($('#wrapper').hasClass('frame-rotate')){
			$('#wrapper').removeClass();			
		}
		else{
			$('#wrapper').removeClass();
			$('#wrapper').addClass('frame-rotate');
		}
	});
	$('#path').toggle(function(){
		$('#wrapper').removeClass();
		$('#wrapper').addClass('path-rotate');
	},function(){
		if($('#wrapper').hasClass('path-rotate')){
			$('#wrapper').removeClass();			
		}
		else{
			$('#wrapper').removeClass();
			$('#wrapper').addClass('path-rotate');
		}
	});
	$('#colors').toggle(function(){
		$('#wrapper').removeClass();
		$('#wrapper').addClass('colors-rotate');
	},function(){
		if($('#wrapper').hasClass('colors-rotate')){
			$('#wrapper').removeClass();			
		}
		else{
			$('#wrapper').removeClass();
			$('#wrapper').addClass('colors-rotate');
		}
	});
	$('#wrapper div').hover(function(){
		$(this).css("opacity",0.9);
	},function(){
		$(this).css("opacity",1);
	});
})