//request用于向一个网页发起请求并且得到响应
var request = require('request');
var fs = require('fs');
//可以实现GBK编码转成utf8编码
var iconv = require('iconv-lite');
request({url: 'http://top.baidu.com/buzz?b=618&c=9&fr=topcategory_c9', encoding: null}, function (err, response, body) {//错误处理 响应对象 响应体
    // decode可以把gbk的Buffer对象转成utf8字符串
    var content = iconv.decode(body,'gbk');
    //fs.writeFile('person.html',content);
    var result = content.match(/<a class="list-title".*?>(.+)<\/a>/g);
    console.log(result);
    //console.log(content);
});
