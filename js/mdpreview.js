function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
var myurl=GetQueryString("url");
const contentEl = document.getElementById('content');
        const heroBodyEl = document.getElementById('hero-content');
        const switchToENBtn = document.getElementById('btn-to-en');
        const switchToCNBtn = document.getElementById('btn-to-cn');
        const loadMarkdown = (url) => {
            if (!window.fetch) {
                contentEl.innerHTML = '<div style="font-size: 24px"><p>Your browser outdated. Please use the latest version of Chrome or Firefox!</p><p>您的浏览器版本过低，请使用最新版的 Chrome 或 Firefox 浏览器！</p></div>';
            } else {
                contentEl.innerHTML = '<div style="font-size: 24px">Loading ... | 加载中。。。</div>';

                fetch(url, { method: 'GET' }).then((resp) => {
                    return Promise.all([resp.ok, resp.status, resp.text(), resp.headers]);
                }).then(([ok, status, data, headers]) => {
                    if (ok) {
                        return {
                            ok,
                            status,
                            data,
                            headers
                        }
                    } else {
                        throw new Error(JSON.stringify(json.error));
                    }
                }).then((resp) => {
                    let data = marked(resp.data);
                    contentEl.innerHTML = data;
                }).catch((error) => {
                    contentEl.innerHTML = '<div style="font-size: 24px"><p>There was a problem loading the MaekDown File！</p><p>加载md文件时出现问题！</p></div>';
                });
            }
        };


        loadMarkdown(GetQueryString("url"));
