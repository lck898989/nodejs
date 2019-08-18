
function JsHelper_CloseWeb() {
    console.log("JsHelper_CloseWeb");
    wx.miniProgram.navigateBack({
        delta: 1
    })
};

/** 
 * 获取指定的URL参数值 
 * URL:http://www.quwan.com/index?name=tyler 
 * 参数：paramName URL参数 
 * 调用方法:getParam("name") 
 * 返回值:tyler 
 */ 
function JsHelper_GetUrlParam(paramName) { 
    var reg = new RegExp('(^|&)' + paramName + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
} 

function GetQueryString(name) { 
var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
var context = ""; 
if (r != null) 
context = r[2]; 
reg = null; 
r = null; 
return context == null || context == "" || context == "undefined" ? "" : context; 
}

function JsHelper_GetCookie(c_name)
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

function JsHelper_SetCookie(c_name, value, expiredays)
{
    document.cookie = c_name + "=" + value +";expires="+expiredays;  //设置cookie
}

function JsHelper_DeleteCookie(c_name)
{
    document.cookie = c_name + "=;expires=-1";  //设置cookie
}