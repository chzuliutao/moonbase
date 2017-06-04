$(function(){
	
//	console.log(shopping.num);
//	var numMy = getCookie("num"); 
//	var priceMy = getCookie("myPrice1");
//	var totleMy = priceMy*numMy+10;//单价*数量
	
//	$("#contentOut .pp .one span").html(totleMy);
//	$("#contentOut .pp .two p").html(totleMy);
//	$("#contentOut .pp .two span").html(totleMy);
//	$("#contentOut .pp .three p").html(totleMy);
	if($.cookie("shopping")==undefined){
		console.log(-1);
	}else{
		var shopping = JSON.parse($.cookie("shopping"));
		var shoppingArr=JSON.parse($.cookie("shoppingArr"));
		console.log(shoppingArr);
		$("#contentOut .pp .one span").html(shopping.num*shopping.money+10);
		$("#contentOut .pp .two p").html(shopping.num*shopping.money+10);
		$("#contentOut .pp .two span").html(shopping.num*shopping.money+10);
		$("#contentOut .pp .three p").html(shopping.num*shopping.money+10);
	}
})
