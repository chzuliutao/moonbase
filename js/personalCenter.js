var oTop=document.getElementsByClassName("top_li");
var oLnav=document.getElementsByClassName("left_nav")[0];
var oRnav=document.getElementsByClassName("right_nav")[0];
var lnbg=document.getElementsByClassName("lnbg");
var item=0;
oTop[0].onmouseover=function(){
	oTop[0].style.background="url(../img/i_index_nav1b.jpg)";
//	console.log("yes");
}
oTop[1].onmouseover=function(){
	oTop[1].style.background="url(../img/i_index_nav2b.jpg)";
//	console.log("yes");
}
oTop[2].onmouseover=function(){
	oTop[2].style.background="url(../img/i_index_nav3b.jpg)";
//	console.log("yes");
}
oTop[3].onmouseover=function(){
	oTop[3].style.background="url(../img/i_index_nav4b.jpg)";
//	console.log("yes");
}
oTop[4].onmouseover=function(){
	oTop[4].style.background="url(../img/i_index_nav5b.jpg)";
//	console.log("yes");
}
oTop[5].onmouseover=function(){
	oTop[5].style.background="url(../img/i_index_nav6b.jpg)";
//	console.log("yes");
}
oTop[6].onmouseover=function(){
	oTop[6].style.background="url(../img/i_index_nav7b.jpg)";
//	console.log("yes");
}
oTop[7].onmouseover=function(){
	oTop[7].style.background="url(../img/i_index_nav8b.jpg)";
//	console.log("yes");
}
oTop[8].onmouseover=function(){
	oTop[8].style.background="url(../img/i_index_nav9b.png)";
//	console.log("yes");
}



oTop[0].onmouseout=function(){
	oTop[0].style.background="url(../img/i_index_nav1.jpg)";
//	console.log("no");
}
oTop[1].onmouseout=function(){
	oTop[1].style.background="url(../img/i_index_nav2.jpg)";
//	console.log("no");
}
oTop[2].onmouseout=function(){
	oTop[2].style.background="url(../img/i_index_nav3.jpg)";
//	console.log("no");
}
oTop[3].onmouseout=function(){
	oTop[3].style.background="url(../img/i_index_nav4.jpg)";
//	console.log("no");
}
oTop[4].onmouseout=function(){
	oTop[4].style.background="url(../img/i_index_nav5.jpg)";
//	console.log("no");
}
oTop[5].onmouseout=function(){
	oTop[5].style.background="url(../img/i_index_nav6.jpg)";
//	console.log("no");
}
oTop[6].onmouseout=function(){
	oTop[6].style.background="url(../img/i_index_nav7.jpg)";
//	console.log("no");
}
oTop[7].onmouseout=function(){
	oTop[7].style.background="url(../img/i_index_nav8.jpg)";
//	console.log("no");
}
oTop[8].onmouseout=function(){
	oTop[8].style.background="url(../img/i_index_nav9.png)";
//	console.log("no");
}

$(function(){
		/****cookie部分***/
		var myUserName = "myUserName";
		var myPwd = "myPwd"
		var isLogin = "isLogin";
		//alert(getCookie(isLogin));
		if(getCookie(isLogin) == 1){
			var userName = getCookie(myUserName);
			$("#useInfo").html('欢迎您,' +'<a href="personalCenter.html">'+ userName +'</a>'+ '|<a href="javascript:void(0)" id="cancel">退出</a>');
			$("#userPwd").show();
			
			$(".uname").html("用户："+userName);
		}else{
			$("#useInfo").html('<a href="login.html">登录</a>|<a href="register.html">注册</a>');
			$("#userPwd").hide();
		}
		$("#cancel").on("click",function(){
			if(getCookie(isLogin) == 1){
				
				updateCookie(isLogin,"0");
				window.location = "../index.html"
			}
		})
	/****cookie部分***/
})