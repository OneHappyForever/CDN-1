var titleTime;  
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
var myurl=GetQueryString("url");
titleTime = setTimeout(function() {  
if(myurl !=null && myurl.toString().length>1)
{
window.location.href=GetQueryString("url");
}
else
{
window.location.href="/";
}
  }, 3000);
