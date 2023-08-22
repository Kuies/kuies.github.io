function backs(){
	window.history.go(-1);
}
//页面层
$(function(){
	$("#tanceng,#tan,#tanceng1,#tan1").hide();
	$(".sp1").click(function(){
		var height=$(".con").height();
		$("#tanceng").css("height",height);		
		$("#tanceng,#tan").slideToggle();
	})
	$("#tan span").click(function(){
		$(this).addClass("orange").siblings().removeClass("orange");
	})
	//以上为景点弹层
	$(".sp3").click(function(){
		var height1=$(".con").height();
		$("#tanceng1").css("height",height1);		
		$("#tanceng1,#tan1").slideToggle();
	})
	$("#tan1 ul li").click(function(){
		$(this).addClass("orange").siblings().removeClass("orange");
	})
	
	$(".bg_lists").hide();
	$(".click").click(function(){
		$(this).parent().find(".bg_lists").toggle();
	})
	$(".bg_lists div span").click(function(){
		$(this).addClass("blue").siblings().removeClass("blue");
	})
	
	//行程
	$("#tanceng2,#tan2").hide();
	$(".p8").click(function(){
		var height2=$(document).height();
		$("#tanceng2").css("height",height2);
		$("#tanceng2,#tan2").slideDown();
	})
	$(".close").click(function(){
		$("#tanceng2,#tan2").slideUp();
	})
	
	
	/*目的地*/
	$(".des_right .dls:not(:first)").hide();
	$(".des_left li:first").addClass("cur");
	$(".des_left li").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		var index=$(this).index();
		/*alert(index)*/
		$(".des_right .dls").eq(index).show().siblings().hide();
	})
	
	$("#tanceng3,#tan3").hide();
	$(".sp6").click(function(){
		var height3=$(document).height();
		$("#tanceng3").css("height",height3);
		$("#tanceng3,#tan3").slideToggle();
	})
	
	var height4=$(document).height();
		$("#wrappers").css("height",height4);
	$("#photo").css("height",height4)
	
	$("#judge .myLove:not(:first)").hide();
	$("header ul li:first").addClass("red");
	$("header ul li").click(function(){
		$(this).addClass("red").siblings().removeClass("red");
		var now=$(this).index();
		/*alert(index)*/
		$("#judge .myLove").eq(now).show().siblings().hide();
	})
	
})


