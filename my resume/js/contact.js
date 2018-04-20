$(function(){
	var ahover = $('.contactme a');
	//console.log(ahover.length);
	//console.log(ahover[0]);
		$('.contactme a').on({
			mouseenter:function(){
				console.log($(this));
				$(this).children().css({'display':'block'}).parents('li').css('background','#e23a6e').siblings().css('background','#555').children().children().css('display','none');
				
			}
		})
	
})
