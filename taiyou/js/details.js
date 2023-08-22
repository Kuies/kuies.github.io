$(function(){
	$("#big img:not(:first)").hide();
	$("#small img:first").addClass("re");
	$("#small img").mouseover(function(){
		$(this).addClass("re").siblings().removeClass("re");
		var now=$(this).index();
		$("#big img").eq(now).show().siblings().hide();
	})
	
	$("#tabBox .detailsCom:not(:first)").hide();
	$("#detailsList li:first").addClass("artBlue");
	$("#detailsList li").mouseover(function(){
		$(this).addClass("artBlue").siblings().removeClass("artBlue");
		var nows=$(this).index();
		$("#tabBox .detailsCom").eq(nows).show().siblings().hide();
	})
	
	$("#detailsList1 li:first").addClass("artBlues");
	$("#detailsList1 li").mouseover(function(){
		$(this).addClass("artBlues").siblings().removeClass("artBlues");
	})
	
	
	$(window).scroll(function(){
			// 获得窗口滚动上去的距离
			var ling = $(document).scrollTop();
			// 在标题栏显示滚动的距离
			//document.title = ling;   720
			if(ling>=1150){
				$("#detailsList1").addClass("new");
				$("#main").css("padding-top","0px");
			}else{
			
			$("#detailsList1").removeClass("new");
			$("#detailsMain").css("padding","30px");
			
			}
			
			
		})
	
})