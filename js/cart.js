var item=0;
$(function(){
	/*购物车*/
	
	if($.cookie("shopping")==undefined){
		
		$(".shopping").children().css({"display":"none"});
		$("<img/>").attr("src", "../img/nogoods.png").appendTo($(".shopping"));
	}else{
		var shopping = JSON.parse($.cookie("shopping"));
		var shoppingArr=JSON.parse($.cookie("shoppingArr"));
		console.log(shoppingArr);
		$.each(shoppingArr, function(idx,ele) {
			console.log(idx+":"+ele);
			var ele=JSON.parse(ele);
			$("<img/>").attr("src", ele.imgsrc).appendTo($("#imgsrc"));
			$("<div/>").html("<i>" + ele.goodsname + "</i><em>品牌：梦芭莎&nbsp;尺寸：" + ele.size + "&nbsp;颜色：" + ele.color + "</em>").appendTo($("#goods"));
			$("<div/>").html("￥"+ele.money+".00").appendTo($("#money"));
			$("<div/>").html("￥"+ele.money * shopping.num+".00").appendTo($("#hj"));
			$(".num").val(ele.num);
			$(".fukuan").css({"display":"block"});
			$(".pics").text(shopping.num);
			$(".howmuch").text(ele.money * shopping.num);
			
		});
		
		
	}
	/*换一组*/
	$(".cart_footer button").click(function(){
		$(this).prevAll("img.on").removeClass("on").siblings().addClass("on");
		return false;
	});
	/*+和-*/
	$(".min").click(function(){
		var num=$(this).next().val();
		if(num-->1){
			$(this).next("input").val(num);
			$(".pics").text(num+"件");
			$(".howmuch").text($("#money div").text().substring(1)*$(".num").val());
			if($.cookie("shopping")==undefined){
	
			}else{
				var shopping = JSON.parse($.cookie("shopping"));
				var shoppingArr=JSON.parse($.cookie("shoppingArr"));
				console.log(shoppingArr);
				shopping.num=num;
			}
		}
		
	});
	$(".plus").click(function(){
		var num=$(this).prev("input").val();
		num++;
		$(this).prev("input").val(num);
		$(".pics").text(num+"件");
		$(".howmuch").text($("#money div").text().substring(1)*$(".num").val());
		if($.cookie("shopping")==undefined){
	
			}else{
				var shopping = JSON.parse($.cookie("shopping"));
				var shoppingArr=JSON.parse($.cookie("shoppingArr"));
				console.log(shoppingArr);
				shopping.num=num;
			}
	});
	
	/*数量改变引起总价和数量变化*/
	$(".num").on("blur",function(){
		$(".pics").text($(".num").val()+"件");
		$(".howmuch").text($("#money div").text().substring(1)*$(".num").val());
	
	});
});

