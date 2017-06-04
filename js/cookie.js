/*检测是否有cookie存在*/

function checkCookie(name){
	var c = document.cookie.indexOf(name);
	if(c!=-1){
		 return true;
	}else{
		return false;
	}
}
/*添加一条cookie数据*/
function addCookie(name,value,time){
	/*escape() 函数可对字符串进行编码，这样就可以在所有的计算机上读取该字符串。*/
	var str = name+"="+escape(value);
	if(time>0){//time为0时不设定过期时间，浏览器关闭时cookie自动消失
		/*指定了coolie的生存期，默认情况下coolie是暂时存在的，
		 * 他们存储的值只在浏览器会话期间存在，
		 * 当用户退出浏览器后这些值也会丢失，
		 * 如果想让cookie存在一段时间，
		 * 就要为expires属性设置为未来的一个过期日期。
		 * 现在已经被max-age属性所取代，
		 * max-age用秒来设置cookie的生存期。*/
		var date = new Date();
		var ms = time*24*3600*1000;
		date.setTime(date.getTime()+ms);
		str += ";expires="+date.toGMTString()+";path=/"; 
		document.cookie = str;
	}
}
/*删除一条数据*/
function deleteCookie(name){
//			将时间设为负值，可删除一条cookie
		var exp = new Date();
   		exp.setTime(exp.getTime() - 1);
    	var cval=getCookie(name);
    	if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString()+";path=/";
}
/*更新一条数据*/
function updateCookie(name,value){
	var date = new Date();
		var ms = time*24*3600*1000;
		date.setTime(date.getTime()+ms);
	var str = name+"="+escape(value);
	document.cookie = str;
}
/*更新数据并且更新了时间*/
function updateCookie(name,value,time){
	var str = name+"="+escape(value);
	var date = new Date();
	var ms = time*24*3600*1000;
	date.setTime(date.getTime()+ms);
	str += ";expires="+date.toGMTString()+";path=/"; 
	document.cookie = str;
}

/*查询所有cookie数据*/
function queryAllCookie(){
	var str = document.cookie;
   if(str == ""){
    str = "没有保存任何cookie";
   }
  return str;
}
/*查询某一条数据*/
function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=")
  if (c_start!=-1)
    { 
    c_start=c_start + c_name.length+1 
    c_end=document.cookie.indexOf(";",c_start)
    if (c_end==-1) c_end=document.cookie.length
    return unescape(document.cookie.substring(c_start,c_end))
    } 
  }
return ""
}
