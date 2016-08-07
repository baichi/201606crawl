var async = require('./async');
//waterfall 第一个函数的返回值会成为下一个函数的参数

async.waterfall([
    function(next){
        setTimeout(function(){
            next(null,'水');// 一个是错误对象 一个是传给下一个函数的参数
        },1000);
    },
    function(data,next){
        setTimeout(next,1000,null,data+'+咖啡')
    },
    function(data,next){
        setTimeout(next,1000,null,data+'+糖')
    }
],function(err,result){
   console.log(result);
})

