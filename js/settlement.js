$(function(){
	$("#contentX .content .eight input").on("click",function(){
		var nameMy = $("#contentX .content .one input").val();
		var addressMy = $("#contentX .content .two .first").val()+$("#contentX .content .two .second").val()+$("#contentX .content .two .third").val()+$("#contentX .content .three input").val();
		var postcodeMy = $("#contentX .content .four select").val();
		var emailMy = $("#contentX .content .five input").val();
		var phoneMy = $("#contentX .content .six input").val();
		var telMy = $("#contentX .content .seven input").val();
		
		addCookie("Myname",nameMy,5);
		addCookie("Myaddress",addressMy,5);
		addCookie("Mypostcode",postcodeMy,5);
		addCookie("Myemail",emailMy,5);
		addCookie("Myphone",phoneMy,5);
		addCookie("Mytel",telMy,5);
		
		addCookie("Mylogin","1",5);//判断是否登录
	
	
	})
	
	if($.cookie("shopping")==undefined){
		
//		$(".shopping").children().css({"display":"none"});
//		$("<img/>").attr("src", "../img/nogoods.png").appendTo($(".shopping"));
	}else{
		var shopping = JSON.parse($.cookie("shopping"));
		var shoppingArr=JSON.parse($.cookie("shoppingArr"));
		console.log(shoppingArr);
//		$.each(shoppingArr, function(idx,ele) {
//			console.log(idx+":"+ele);
//			var ele=JSON.parse(ele);
//			$("<img/>").attr("src", ele.imgsrc).appendTo($("#imgsrc"));
//			$("<div/>").html("<i>" + ele.goodsname + "</i><em>品牌：梦芭莎&nbsp;尺寸：" + ele.size + "&nbsp;颜色：" + ele.color + "</em>").appendTo($("#goods"));
//			$("<div/>").html("￥"+ele.money+".00").appendTo($("#money"));
//			$("<div/>").html("￥"+ele.money * shopping.num+".00").appendTo($("#hj"));
//			$(".num").val(ele.num);
//			$(".fukuan").css({"display":"block"});
//			$(".pics").text(shopping.num);
//			$(".howmuch").text(ele.money * shopping.num);
//			
//		});
		
		
	}
})
