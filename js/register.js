$(function(){
	
	/*****邮箱判定*****/
	$(".content .right .formB .email").blur(function(){
		var $value = $(this).val();
		
		if(/^([a-z0-9_]{3,11})@{1}([a-z]{2})\.([a-z]{3})$/.test($value) == false){
			$(this).next(".p1").css("display","block");
			$(this).next(".p1").find("span").html("邮箱格式错误!");
			$(this).css({"background":"none","border":"1px solid #E60065"});
		}
		if(/^([a-z0-9_]{3,11})@{1}([a-z]{2})\.([a-z]{3})$/.test($value) == true){
			$(this).next(".p1").css("display","none");
			$(this).css({
				"background": "url(../img/gou.jpg) no-repeat 300px 12px",
				"border": "1px solid #C9C9C9"
			})
			$(".content .right .formB .tel").next(".p1").css("display","none");
			
			$(".content .right .formB .tel").css({"border":"1px solid #C9C9C9"});
		}
		if($value == ""){
			$(this).next(".p1").css("display","none");
			$(this).css("border","1px solid #C9C9C9");
		}
	})
	/*****邮箱判定*****/
	
	/*****手机判定*****/
	$(".content .right .formB .tel").blur(function(){
		
		var $value = $(this).val();
		var $email = $(".content .right .formB .email").val();

		if(/^1{1}$/.test($value) == false){
			$(this).next(".p1").css("display","block");
			$(this).next(".p1").find("span").html("第1位必须以 1 开头!");
			$(this).css({"background":"none","border":"1px solid #E60065"});
		}
		if(/^([0-9]{11})$/.test($value) == false){
			$(this).next(".p1").css("display","block");
			$(this).next(".p1").find("span").html("请填写11位有效手机号码!");
			$(this).css("background","none");
		}
		if(/^1{1}([0-9]{10})$/.test($value) == true){
			$(this).next(".p1").css("display","none");
			$(this).css({
				"background": "url(img/注册登录页/gou.jpg) no-repeat 300px 12px",
				"border": "1px solid #C9C9C9"
			})
			$(".content .right .formB .email").css({"background":"none","border":"1px solid  #C9C9C9"});
		}
		/****因为邮箱和电话只需注册一个所以需要添加邮箱的有无****/
		if(($value == "")&&($email == "")){
			$(this).next(".p1").css("display","block");
			$(this).next(".p1").find("span").html("邮箱和手机必须填写一个!");
			$(this).css({"background":"none","border":"1px solid #E60065"});
			$(".content .right .formB .email").css({"background":"none","border":"1px solid #E60065"});
		}
		if(/^([a-z0-9_]{3,11})@{1}([a-z]{2})\.([a-z]{3})$/.test($email) == true){
			
			$(this).next(".p1").css("display","none");
			$(this).css("border","1px solid #C9C9C9");
			$(".content .right .formB .email").css("background","url(img/注册登录页/gou.jpg) no-repeat 300px 12px")
		}
		
	})
	
	/*****手机判定*****/
	
	/*****密码框*****/
	$(".content .right .formB .code").blur(function(){
		/***首先得判定邮箱和手机是否填写***/
		if(($(".content .right .formB .tel").val() == "")&&($(".content .right .formB .email").val() == "")){
			$(".content .right .formB .tel").next(".p1").css("display","block");
			$(".content .right .formB .tel").next(".p1").find("span").html("邮箱和手机必须填写一个!");
			$(".content .right .formB .tel").css({"background":"none","border":"1px solid #E60065"});
			$(".content .right .formB .email").css({"background":"none","border":"1px solid #E60065"});
		}
	
		var $value = $(this).val();
		if(/^\w$/.test($value) == false){
			
			$(this).next(".p1").css("display","block");
			$(this).next(".p1").find("span").html("含有非法字符，请重新填写！");
			$(this).css({"background":"none","border":"1px solid #E60065"});
		}
		if(/^(\w|\W){6,12}$/.test($value) == false){
			$(this).next(".p1").css("display","block");
			$(this).next(".p1").find("span").html("密码个数6~12！");
			$(this).css({"background":"none","border":"1px solid #E60065"});
		}
		if(/^(\w{6,12})$/.test($value) == true){
			
			$(this).next(".p1").css("display","none");
			$(this).css({
				"background": "url(img/注册登录页/gou.jpg) no-repeat 300px 12px",
				"border": "1px solid #C9C9C9"
			})
		}
		if($value == ""){
			$(this).next(".p1").css("display","block");
			$(this).css("border","1px solid #E60065");
			$(this).next(".p1").find("span").html("密码不能为空！");
		}
	})
	/*****密码框*****/
	
	/*****确认密码*****/
	$(".content .right .formB .sureCode").blur(function(){
		var $value = $(this).val();
		if($value != $(".content .right .formB .code").val()){
			$(this).next(".p1").css("display","block");
			$(this).css("border","1px solid #E60065");
			$(this).next(".p1").find("span").html("两次输入的密码不一致！");
			$(".content .right .formB .code").css({"background":"none","border":"1px solid #E60065"})
		}else{
			$(this).next(".p1").css("display","none");
			$(this).css({
				"background": "url(img/注册登录页/gou.jpg) no-repeat 300px 12px",
				"border": "1px solid #C9C9C9"
			})
			$(".content .right .formB .code").css({
				"background": "url(img/注册登录页/gou.jpg) no-repeat 300px 12px",
				"border": "1px solid #C9C9C9"
			})
		}		
		if($(".content .right .formB .code").val() == ''){
			$(".content .right .formB .code").next(".p1").css("display","block");
			$(".content .right .formB .code").css({"border":"1px solid #E60065","background":"none"});
			$(".content .right .formB .code").next(".p1").find("span").html("密码不能为空！");
			$(this).css({"background":"none","border":"1px solid #E60065"});
			
		}
		
	})
	
	/*****确认密码*****/
	
	/*******验证码********/
	var index = 0;
	var arryPic = ["../img/login20.gif","../img/login21.gif","../img/login22.gif",
		"../img/login23.gif","../img/login24.gif"];
	var arryWord = ["ciep","ucfd","gybc","rptt","awlp"];
	$(".content .right .formTwo .one").blur(function(){
		var $value = $(this).val();
		if($value != arryWord[index]){
			$(".content .right .formTwo .p1").css("display","block");
			$(this).css({
				"border":"1px solid #E60065",
				"background":"none"
			});
			
		}else{
			$(".content .right .formTwo .p1").css("display","none");
			$(this).css({
				"background": "url(../img/gou.jpg) no-repeat 90px 12px",
				"border": "1px solid #C9C9C9"
			});
		}
	
	})
	
	$(".content .right .formB .formTwo span").on("click",function(){
		if(index == 4){
			index = -1;
		}
		$(".content .right .formB .formTwo h1 img").attr("src",arryPic[index+1]);
		index++;
		$(".content .right .formTwo .p1").css("display","none");
		$(".content .right .formTwo .one").val('');
		$(".content .right .formTwo .one").css({
			"background": "none",
				"border": "1px solid #C9C9C9"
		});
	})

	/*******验证码********/
	
	/******提交部分*******/
	
	/****变量初始化，在这里先定义三个变量分别是用户名（手机号），密码，和登录状态****/
	var myUserName = "myUserName";
	var myPwd = "myPwd";
	var isLogin = "isLogin";
 
	$(".content .right .formB .btn").on("click",function(){
		/******设置手机号作为用户名******/
		var userName = $(".content .right .formB .tel").val();	
		var pwd = $(".content .right .formB .code").val();
		if(userName == ""){
			alert("用户名不能为空");
		}else{
			if(pwd == ""){
				alert("密码不能为空");
			}else{
				register(userName,pwd);

			}
		}
	
	
	})
	
	/******提交部分*******/
/*****创建cookie名*****/
function register(userName,pwd){
		/*****自己填写的用户名在cookie中已存在******/
		if(getCookie(myUserName) == userName){
			alert("此用户已经注册，请直接登录")
		}else{
			addCookie(myUserName,userName,5);
			addCookie(myPwd,pwd,5);
			addCookie(isLogin,"0",5);
		}
	}
/*****创建cookie名*****/
	
})













