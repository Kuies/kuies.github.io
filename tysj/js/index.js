 $(function(){
   var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop:true,
        autoplay:2000,
    });


 	$(".checked li:first").addClass("current");
	$(".index_int:not(:first)").hide();
	$(".checked li").click(function(){
		$(this).addClass("current").siblings().removeClass("current");
		var index=$(this).index();
		$(".index_int").eq(index).show().siblings().hide();
	})






	$(".tab_box:first").show().siblings().hide();
	var page=$(".tab_box").size();
	//alert(page)
	var now = 0;
	$("#right").click(function(){
		//alert("dd")
		if(now==page-1){
			now = 0;
		}else{
			now++;			
		}
		$(".tab_box").eq(now).show().siblings().hide();
	})
	$("#left").click(function(){
		if(now==0){
			now = page-1;
		}else{
			now--;			
		}
		$(".tab_box").eq(now).show().siblings().hide();
	})
})