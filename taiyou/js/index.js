$(function(){
	
    $("#nav>ul>li>ul").hide();
    
	$(".er").mouseover(function(){
		$(this).find("ul").show();
		
		$(this).find("#downs").attr("src","img/up.png");
	})
	$(".er").mouseout(function(){
		$(this).find("ul").hide();
		
		$(this).find("#downs").attr("src","img/down.png");
	})
	$(".wu").mouseover(function(){
		$(this).find("ul").show();
	
		$(this).find("#downs").attr("src","img/up.png");
	})
	$(".wu").mouseout(function(){
		$(this).find("ul").hide();
		
		$(this).find("#downs").attr("src","img/down.png");
	})
	$(".qi").mouseover(function(){
		$(this).find("ul").show();
		
		$(this).find("#downs").attr("src","img/up.png");
	})
	$(".qi").mouseout(function(){
		$(this).find("ul").hide();
		
		$(this).find("#downs").attr("src","img/down.png");
	})
	$(".lists2").hide();
	$("#navs>ul").mouseover(function(){
		$(this).find("ul").show();
		$(this).siblings().find("ul").hide();
	})
	$("#navs>ul").mouseout(function(){
		$(this).find("ul").hide();
	})
	//nav
	$(".m2Right:gt(0)").hide();
	$("#list li").mouseover(function(){
		var _index=$(this).index();
		$("#tab_boxs>div.m2Right").eq(_index).show().siblings().hide();
	})
	$(".m3Main div:gt(0)").hide();
	$("#lis li").mouseover(function(){
		var _index=$(this).index();
		$(".m3Main>div").eq(_index).show().siblings().hide();
	})
	$("#m4 div:gt(0)").hide();
	$("#lists1 li").mouseover(function(){
		var _index=$(this).index();
		$("#m4>div").eq(_index).show().siblings().hide();
	})
	$("#m4 dd").hide();
	$("#m4 dl").mouseover(function(){
		$(this).find("dd").show();
	});
	$("#m4 dl").mouseout(function(){
		$(this).find("dd").hide();
	});
	
	$(".bys dd").hide();
	$(".bys").mouseover(function(){
		$(this).find("dd").show();
		$(this).siblings().find("dd").hide()
	})
	$(".bys").mouseout(function(){
		$(this).find("dd").hide();
	})
	
	$("#m2_box div:gt(0)").hide();
	$("#lis2 li").mouseover(function(){
		$(this).addClass("current").siblings().removeClass("current");
		var _index=$(this).index();
		$("#m2_box div").eq(_index).show().siblings().hide();
	})
	
	$(".molder3s dl").mouseover(function(){
		$(this).addClass("news").siblings().removeClass("news");
	})
	//酒店
	$("#molder1_box div:gt(0)").hide();
	$("#lis3 li").mouseover(function(){
		var _index=$(this).index();
		$("#molder1_box div").eq(_index).show().siblings().hide();
		$(this).addClass("news1").siblings().removeClass("news1");
	})
	//旅游
	$("#molder2a_box div:gt(0)").hide();
	$("#lis5 li").mouseover(function(){
		var _index=$(this).index();
		$("#molder2a_box div").eq(_index).show().siblings().hide();
		$(this).addClass("news2").siblings().removeClass("news2");
	})
	$(".you3 div:gt(0)").hide();
	$("#lis6 li").mouseover(function(){
		var _index=$(this).index();
		$(".you3 div").eq(_index).show().siblings().hide();
		$(this).addClass("news3").siblings().removeClass("news3");
	})
	
	
	$(".ch").hide();
	$("#sc dl").mouseover(function(){
		$(this).find(".ch").show();
		$(this).siblings().find(".ch").hide();
	})
	$(".ch").click(function(){
		$(this).parents("dl").hide();
	})
	$("#molder2_box div:gt(0)").hide();
	$("#lis4 li").mouseover(function(){
		var _index=$(this).index();
		$("#molder2_box div").eq(_index).show().siblings().hide();
		$(this).addClass("news1").siblings().removeClass("news1");
		$(this).children("#yc").css("display","block").siblings().find("#byc").css("display","none");
		$(this).children("#byc").css("display","none").siblings().find("#byc").css("display","block");	
	})
	
	$("#lis4 li").mouseout(function(){
		$(this).children("#yc").css("display","none");
		$(this).children("#byc").css("display","block");
	})
	//旅游
	$(".rightLy dl").mouseover(function(){
		$(this).find("dd").show();
		$(this).siblings().find("dd").hide();
	})
	
 	//
 	$(".alls>ul>li>ul").hide();
	$(".alls>ul").mouseover(function(){
		$(this).find("ul").show();
		$(this).siblings().find("ul").hide();
		$(this).find("li").addClass("news4");
		$(this).siblings()
		.find("li").removeClass("news4");
	})
	$(".alls>ul").mouseout(function(){
		$(this).find("ul").hide();
		
	})
 	
 	//
 	$(".ding,.dw").hide();
 	$(".molderbs dl").mouseover(function(){
 		$(this).find(".ding,.dw").show();
 		$(this).siblings().find(".ding,.dw").hide();
 	})
 	
 	$(".molderb3_box div:gt(0)").hide();
	$("#lis8 li:not(:first)").mouseover(function(){
		$(this).addClass("news0").siblings().removeClass("news0");
		var _index=$(this).index();
		$(".molderb3_box div").eq(_index).show().siblings().hide();
	})
	
 	$("#leftMy dd").hide()
 	$("#leftMy dt").click(function(){	
			var node=$("#leftMy dd");
			if(node.is(':hidden')){
				
				$(this).nextAll("dd").show();
				
			}else{
				$(this).nextAll("dd").hide();				 
			}     
          $(this).parent().siblings().find("dd").hide();      
})
 		
 	$(".ins:gt(0)").hide();
	$("#dl1 li").mouseover(function(){
		$(this).addClass("new7").siblings().removeClass("new7");
		var _index=$(this).index();
		$(".ins").eq(_index).show().siblings().hide();
	})
 	
 	$("#hang_box div:gt(0)").hide();
	$("#lis1 li").mouseover(function(){
		var _index=$(this).index();
		$("#hang_box >div").eq(_index).show().siblings().hide();
	})
 	
 	$("#xc_box dl dd a").hide();
 	$("#xc_box div:gt(0)").hide();
	$("#list2 li").mouseover(function(){
		var _index=$(this).index();
		$("#xc_box >div").eq(_index).show().siblings().hide();
	})
	$("#xc_box dl").mousemove(function(){
		$(this).find("dd a").show();
		$(this).siblings().find("dd a").hide();
	})
	
	$("#yj_box div:gt(0)").hide();
	$("#list3 li").mouseover(function(){
		$(this).addClass("hovers").siblings().removeClass("hovers");
		var _index=$(this).index();
		$("#yj_box >div").eq(_index).show().siblings().hide();
	})
	
 	/*alert("dd");*/
   var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop:true,
        autoplay:2500,
    });
})
$(function(){
	var $div_li =$("div.tab_menu ul li");
	$div_li.mouseover(function(){
		$(this).addClass("selected").siblings().removeClass("selected");  
		var index=$div_li.index(this); 
		$("div.tab_box > div").eq(index).show().siblings().hide(); 
	})
	int=setInterval(function(){
			index1=$(".selected").index()+1;
			j=$("li").length;
			if(j==index1){
				index1=0
			}
			$("li").eq(index1).trigger("mouseover");
		},5000);
	$(".tab_box div").mouseover(function(){
		clearInterval(int);
	}).mouseout(function(){
			int=setInterval(function(){
			index1=$(".selected").index()+1;
			j=$("li").length;
			if(j==index1){
				index1=0
			}
			$("li").eq(index1).trigger("mouseover");
		},5000);
	});
})