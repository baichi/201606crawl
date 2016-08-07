var async = require('./async');
//waterfall 第一个函数的返回值会成为下一个函数的参数

async.waterfall([
    function(callback){
        setTimeout(callback,1000,null,'水')
    },
    function(data,callback){
        setTimeout(callback,1000,null,data+'+咖啡')
    },
    function(data,callback){
        setTimeout(callback,1000,null,data+'+糖')
    }
],function(err,result){
   console.log(result);
})

