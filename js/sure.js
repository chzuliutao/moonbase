$(function(){
	
	
	var loginMy = getCookie("Mylogin");
	var nameMy = getCookie("Myname");
	var addressMy = getCookie("Myaddress");
	var postcodeMy = getCookie("Mypostcode");
	var emailMy = getCookie("Myemail");
	var	phoneMy = getCookie("Myphone");
	var	telMy = getCookie("Mytel");
	
	var srcMy = getCookie("myPicture1");
	var sizeMy = getCookie("mySize1");
	var numMy = getCookie("myNumber1"); 
	var priceMy = getCookie("myPrice1");
	var totleMy = priceMy*numMy;//单价*数量
	//console.log(totleMy+srcMy+sizeMy+numMy+priceMy);
	
	
	
	
	
	if(loginMy == 1){
		/*****地址栏*******/
		$("#contentX .content1 p.one").html(nameMy);
		$("#contentX .content1 p.two").html(addressMy);
		$("#contentX .content1 p.three").html(postcodeMy);
		$("#contentX .content1 p.four").html(emailMy);
		$("#contentX .content1 p.five").html(phoneMy);
		$("#contentX .content1 p.six").html(telMy);
		
		/*****图片框******/
		$("#contentX .content3 .kua li.one img").attr("src",srcMy);
		$("#contentX .content3 .kua li.one p").html(sizeMy);
		$("#contentX .content3 .kua li.two").html(priceMy);
		$("#contentX .content3 .kua li.three").html(numMy);
		$("#contentX .content3 .kua li.four").html(totleMy);
	
		/*****结算*****/
		$("#contentX .content4 .totle .one span").html(totleMy);
		$("#contentX .content4 .totle .three span").html(totleMy+10);
	}
		
	if($.cookie("shopping")==undefined){

	}else{
		var shopping = JSON.parse($.cookie("shopping"));
		var shoppingArr=JSON.parse($.cookie("shoppingArr"));
		console.log(shoppingArr);
		console.log(shopping.num);
		$("#contentX .content3 .kua li.one img").attr("src",shopping.imgsrc);
		$("#contentX .content3 .kua li.one p").html(shopping.size+"  "+shopping.goodsname);
		$("#contentX .content3 .kua li.two").html(shopping.money);
		$("#contentX .content3 .kua li.three").html(shopping.num);
		$("#contentX .content3 .kua li.four").html(shopping.money*shopping.num);
	
		/*****结算*****/
		$("#contentX .content4 .totle .one span").html(shopping.money*shopping.num);
		$("#contentX .content4 .totle .three span").html(shopping.money*shopping.num+10);
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
