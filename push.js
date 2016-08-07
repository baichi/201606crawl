// git add -A
// git commit -m"dd"
// git push origin master
var exec = require('child_process').exec;
var async = require('async');
//可以在控制台监听用户的输入，输入内容之后会触发此事件
process.stdin.on('data',function(data){
    async.series([
        function (cb) {
            exec('git add -A', cb);
        },
        function (cb) {
            exec('git commit -m"'+data.toString()+'"', cb);
        }, function (cb) {
            exec('git push origin master',cb);
        }
    ], function (err, result) {
        console.log('result',result);
    })
});



