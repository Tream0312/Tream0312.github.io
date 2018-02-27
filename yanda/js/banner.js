$(function(){
	var ullists = $(".banner-list").children("li");
	var ollists =$(".cir-list").children("li");
	var jt = $(".jt");
	var k=0;
	//箭头隐藏
	jt.hide();
	
	
	//自动播放
	function d(){
		for(var i=0;i<ollists.length;i++){
			ollists.css("background","#fff");
		}
		k+=1;
		if(k<ollists.length){
			ullists.eq(k).fadeTo("slow",0.9).siblings().hide();
			ollists.eq(k).css("background","#008000");
		}
		else{
			k=0;
			ullists.eq(k).fadeTo("slow",0.9).siblings().hide();
			ollists.eq(k).css("background","#008000");
		}
	}
 	var timer = setInterval(d,2500);
	
	//当鼠标放在UL上时
	$(".banner-list").mouseover(function(){
		jt.show();
		alert(dss);
		$(this).css("cursor","pointer");
		clearInterval(timer);
	});
});
