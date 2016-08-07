// git add -A
// git commit -m"dd"
// git push origin master
var exec = require('child_process').exec;
var async = require('async');
async.series([
    function (cb) {
        exec('git add -A', cb);
    },
    function (cb) {
        exec('git commit -m"dd"', cb);
    }, function (cb) {
        exec('git push origin master', function(err,stdout,stderr){
        console.log(arguments);
        });
    }
], function (err, result) {
  console.log('result',result);
})

