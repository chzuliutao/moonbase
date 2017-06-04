/*微博、手机、微信二维图展现特效*/
$(function() {
	$(".tel").on("mouseover", function() {
		$(this).children("img").css("display", "block");
	}).on("mouseleave", function() {
		$(this).children("img").css("display", "none");
	});
	$(".weibo").on("mouseover", function() {
		$(this).children("img").css("display", "block");
	}).on("mouseleave", function() {
		$(this).children("img").css("display", "none");
	});
	$(".weixin").on("mouseover", function() {
		$(this).children("img").css("display", "block");
	}).on("mouseleave", function() {
		$(this).children("img").css("display", "none");
	});
});
/*分享小图标*/
$(function() {
	$(".this_share").hover(function() {
		$(this).children("div").css("display", "block");
	}, function() {
		$(".goshare").css("display", "none");
	})
});
/*hover时候有小黑框以及图片的动态转换*/
$(function() {
	$(".smallPic").on("mouseover", "img", function() {
		$(".smallPic img").css("outline", "none");
		$(this).css("outline", "1px solid black");
		$(".bg img").attr("src", $(this).attr("src"));
	}).on("mouseleave", "img", function() {
		$(".smallPic img").css("outline", "none");
		$(this).css("outline", "1px solid black");
	});
});
/*左右控制图片*/
$(function() {
	var i = 0;
	var length = $(".smallPic li").length - 5;
	$(".bg2 #left").click(function() {
		console.log(i);
		if(i < length) {
			$(".smallPic li")[i].style.display = "none";
			i++;
		}
	});
	$(".bg2 #right").click(function() {
		console.log(i);
		i--;
		if(i > -1) {
			$(".smallPic li")[i].style.display = "block";
		} else if(i = -1) {
			i = 0;
		}
	});
});

/*收起*/
$(function() {
	$(".up").click(function() {
		$(".youhui")[0].style.border = "none";
		$(".youhui")[0].style.backgroundColor = "#f4f4f4";
		$(".youhui")[0].style.width = "500px";
		for(var i = 0; i < $(".youhui li").length; i++) {
			$(".youhui li")[i].style.border = "none";
			if(i != 1) {
				$(".youhui li")[i].style.display = "none";
			}
		}
		$(".down").css("display", "block");
		return false;
	});
});
/*下来*/
$(function() {
	$(".down").click(function() {
		$(".youhui li").css({
			"display": "block",
			"border-bottom": "1px dotted #E8E8E8"
		});
		$(".youhui").css({
			"background-color": "#fff",
			"padding": "5px 10px 10px",
			"border": "1px solid #e3e3e3",
			"width": "498px"
		});
		$(this).css("display", "none");
		return false;
	});
});
/*二维码*/
$(function() {
	$(".erweima").on("mouseover", "img", function() {
		$(this).attr("src", $(this).attr("src").substring(0, $(this).attr("src").length - 5) + "2.gif");
	}).on("mouseleave", "img", function() {
		$(this).attr("src", $(this).attr("src").substring(0, $(this).attr("src").length - 5) + "1.gif");
	}).on("click", "img", function() {
		$(".telerwei").slideDown();
	});
});
/*关闭*/
$(function() {
	$(".close").click(function() {
		$(".telerwei").slideUp();
	});
});
/*lb*/
$(function() {
	var lilength = parseInt($(".lb li").length / 3);
	var a = 0;
	$("#lb_next").click(function() {
		a++;
		console.log(a);
		if(a < lilength) {
			$(".lb li:lt(" + a * 3 + ")").slideUp(600);
		} else {
			a--;
		}
	});
	$("#lb_prev").click(function() {
		a--;
		$(".lb li:gt(" + (3 * a) + ")").slideDown();

	});
});

/*评论页面的on*/
$(function() {
	$(".commentright h2").on("click", "a", function() {
		var idx = $(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		$(this).parent().next().children("li").eq(idx).css("display", "block").siblings().css("display", "none");
		return false;
	});
});

/*放大镜*/
$(function() {
	$(".bg img").on("mousemove", function(e) {
		var mouseX = e.offsetX;
		var mouseY = e.offsetY;
		$("#zhezao").css({
			"display": "block",
			"left": mouseX + "px",
			"top": mouseY + "px"
		});
		var simgh = parseInt($(this).css("height"));
		var img = new Image();
		img.src = $(this).attr("src");
		var beishu = img.height / simgh;
		$("#fdj").css({
			"display": "block"
//			"background-position-x": -mouseX * beishu + "px",
//			"background-position-y": -e.offsetY * beishu + "px"
		});
		$(".bgdiv").css({
			"display": "block",
			"left":-mouseX * 7 + "px",
			"top":-e.offsetY * 9.48 + "px",
			"background":"url("+img.src+")",
			"background-size":"100%"
//			"background-position-x": -mouseX * beishu + "px",
//			"background-position-y": -e.offsetY * beishu + "px"
		});
	}).on("mouseleave", function() {
//		$("#zhezao,#fdj").css({
//			"display": "none"
//		});
		$("#zhezao").css({
			"display": "none"
		});
		$("#fdj").css({
			"display": "none"
		});
	});
});

/*选择颜色出现不尺寸*/
$(function() {
	$(".color div").on("click", function() {
		$(".size").removeClass("on");
		$(".color div").removeClass("on");
		$(this).addClass("on").parent().next().addClass("on");
		return false;
	});
	$(".size").on("click", "li", function() {
		$(".size li").removeClass("on");
		$(this).addClass("on");
	});
});

/*数量增减*/
$(function() {
	var num = $(".num b").text();
	$("#add").click(function() {
		num++;
		$(".num b").text(num);
	});
	$("#sub").click(function() {
		if(num-- > 1) {
			$(".num b").text(num);
		}
	});
});
/*右边栏hover出框*/
$(function() {
	$("#user").on("mouseover", function() {
		$("#user div").css({
			"display": "block"
		});
	}).on("mouseleave", function() {
		$("#user div").css({
			"display": "none"
		});
	});
	$("#right_cart").on("mouseover", function() {
		$("#right_cart div").css({
			"display": "block"
		});
	}).on("mouseleave", function() {
		$("#right_cart div").css({
			"display": "none"
		});
	});
});

/*加入购物车*/
$(function() {
	$("#addcart").click(function() {
		$(".jiaru").css("display", "block");
		$("#supernum").html($(".num b").text());
		var value={};
			value.goodsid=$(".share p").text().substring(5);
			value.goodsname = $(".center h2").text();
			value.money = $(".price b").text();
			value.color = $(".color div.on").text();
			value.size = $(".color div.on").closest("a").next().children(".on").children("span").text();
			value.num = $(".num b").text();
			value.imgsrc = $(".bg img").attr("src");
			var arr={};
			var shopping=JSON.stringify(value);
			arr[value.goodsid]=shopping;
			var shoppingArr=JSON.stringify(arr);
			console.log(arr);
			$.cookie("shopping",shopping);
			$.cookie("shoppingArr",shoppingArr);
	});
	$(".btn-close").click(function() {
		$(".jiaru").css("display", "none");
	});
	$(".jixumai").click(function() {
		$(".jiaru").css("display", "none");
	});
	$(".qujiesuan").click(function() {
		window.location.href = "shopcart.html";
	});
});
/*商品信息存入cookie*/
$(function() {

	$("#buynow").click(function() {
		// 创建一个空对象，用来保存商品信息
		if($.cookie("shoppingArr")!=undefined){
		/*var shoppingArr=JSON.parse($.cookie("shoppingArr"));
		$.each(shoppingArr, function(idx,ele) {
			var ele=JSON.parse(ele);
			var size=$(".color div.on").closest("a").next().children(".on").children("span").text()
			if(ele.size!=size){
				ele.size+=size;
				ele.num++;
			}
			console.log(ele);
			var arr={};
			var shopping=JSON.stringify(ele);
			var goodsid=$(".share p").text().substring(5);
			arr[goodsid]=shopping;
			var shoppingArr=JSON.stringify(arr);
			console.log(arr);
			$.cookie("shopping",shopping);
			$.cookie("shoppingArr",shoppingArr);*/
			window.location.href="shopcart.html";
			//window.location.href="shopcart.html";
		}else{
			var value={};
			value.goodsid=$(".share p").text().substring(5);
			value.goodsname = $(".center h2").text();
			value.money = $(".price b").text();
			value.color = $(".color div.on").text();
			value.size = $(".color div.on").closest("a").next().children(".on").children("span").text();
			value.num = $(".num b").text();
			value.imgsrc = $(".bg img").attr("src");
			var arr={};
			var shopping=JSON.stringify(value);
			arr[value.goodsid]=shopping;
			var shoppingArr=JSON.stringify(arr);
			console.log(arr);
//			$.cookie("shopping",shopping);
//			$.cookie("shoppingArr",shoppingArr);
//			window.location.href="shopcart.html";
//			addCookie(goodsid,shopping.goodsid,5);
//			addCookie(goodsname,shopping.goodsname,5);
//			addCookie(money,shopping.money,5);
//			addCookie(color,shopping.color,5);
//			addCookie(size,shopping.size,5);
//			addCookie(num,shopping.num,5);
//			addCookie(imgsrc,shopping.imgsrc,5);
//			var c=getCookie("goodsname");
//			console.log(c);
			
		}
		/*$.cookie("imgsrc",imgsrc, { expires: 7, path: '/' });*/
		
	});

});
