
function JsHelper_CloseWeb() {
    console.log("JsHelper_CloseWeb");
    window.webkit.messageHandlers.backAction.postMessage(null);
};

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
    console.log("====document.cookie=="+document.cookie)
}

function JsHelper_DeleteCookie(c_name)
{
    document.cookie = c_name + "=;expires=-1";  //设置cookie
    console.log("====document.cookie=="+document.cookie)
}

/** 
 * 获取指定的URL参数值 
 * URL:http://www.quwan.com/index?name=tyler 
 * 参数：paramName URL参数 
 * 调用方法:getParam("name") 
 * 返回值:tyler 
 */ 
function JsHelper_GetUrlParam(paramName) { 
    paramValue = "", isFound = !1; 
    if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) { 
        arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"), i = 0; 
        while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++ 
    } 
    return paramValue == "" && (paramValue = null), paramValue ;
} 