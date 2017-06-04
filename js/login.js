$(function(){
	$(".content .right .name").find("p").on("click",function(){
		var $index = $(this).index();
		$(".content .right .formAll").eq($index).css("display","block").siblings().not(".name").css("display","none");
		$(this).find("span").css("display","block");
		$(this).siblings().find("span").css("display","none");
	})
	
	var myUserName = "myUserName";
	var myPwd = "myPwd";
	var isLogin = "isLogin";
	
	$(".content .right .formA .btn").on("click",function(){
		var userName = $(".content .right .formA .tel").val();
		var pwd = $(".content .right .formA .code").val();
		if(userName == ""){
			alert("用户名不能为空");
		}else{
			if(pwd == ""){
				alert("密码不能为空");
			}else{
				login(userName,pwd);
			}
		}
	});
	/****读取cookie***/
	function login(userName,pwd){
		var myUserName = "myUserName";
		var myPwd = "myPwd";
		if(getCookie(myUserName) != userName){
			alert("此用户不存在")
		}else{
			if(getCookie(myPwd) != pwd){
				alert("密码不正确")
			}else{
				updateCookie(isLogin,"1");
				window.location = "../index.html";
			}
		}
	}
	
	/****读取cookie***/
	
	
})
