$(function(){
	
	var myUserName = "myUserName";
	var myPwd = "myPwd"
	var isLogin = "isLogin";
	
	
	$("#content .text span i").html(getCookie(myUserName));
	$("#content .btn .btn1").on("click",function(){
		updateCookie(isLogin,"1");
	})	
	var timer = setInterval(function abc(){
		var $html = $("#content .welcome .text .getTime .time span").html();
		console.log($html);
		$("#content .welcome .text .getTime .time span").html($html-1);
		if($html <= 1){
			clearTimeout(timer);
			updateCookie(isLogin,"1");
			window.location = "personalCenter.html";
			
		}
	},1000)	
	
})
