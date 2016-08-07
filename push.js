// git add -A
// git commit -m"dd"
// git push origin master
var exec = require('child_process').exec;
var async = require('async');
async.series([
    function (cb) {
        console.log('-a');
        exec('git add -A', cb);
    },
    function (cb) {
        console.log('-commit');
        exec('git commit -m"dd"', cb);
    }, function (cb) {
        console.log('-push');
        exec('git push origin master', function(err,stdout,stderr){
        console.log(arguments);
        });
    }
], function (err, result) {
  console.log('result',result);
})

