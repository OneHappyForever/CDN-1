
var text = document.getElementById('noraml_show').innerText;
var result = JSON.stringify(JSON.parse(text), null, 2);
var data = result ;
    // 方法1：textarea + JSON.stringify
    function parse1(str) {
        return JSON.stringify(JSON.parse(str), null, "\t");
    }
    $('#jsonTextarea').text(parse1(data));
 
    // 方法2：pre + JSON.stringify
    function parse2(str) {
        // 设置缩进为2个空格
        str = JSON.stringify(JSON.parse(str), null, 2);
        str = str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
        return str.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
            var cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    cls = 'string';
                }
            } else if (/true|false/.test(match)) {
                cls = 'boolean';
            } else if (/null/.test(match)) {
                cls = 'null';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
    }
    $('#jsonPre').html(parse2(data));
