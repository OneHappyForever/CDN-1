(async()=>{var a=document.getElementById("pv-counter");var b=document.getElementById("post-meta-views");var c=document.location.toString();var d=c.split("//");var e=d[1].indexOf("/");var f=d[1].substring(e);if(f.indexOf("?")!=-1){f=f.split("?")[0]}const g=await fetch(`${window.post_views_api}?page=${f}`).then((res)=>res.json());const h=g[0].hit;if(h!==undefined&&b!==null){a.innerHTML=`${h}`;b.hidden=false}})();