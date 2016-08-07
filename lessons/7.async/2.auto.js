var async = require('async');
async.auto({
  water(callback){
      callback(null,'水');
  },
  flour(callback){
      callback(null,'面粉');
  },
  mix:['water','flour',function(result,callback){
      callback(null,result['water']+'+'+result['flour']+'+和面');
  }],
  steam:['mix',function(result,callback){
      callback(null,result['mix']+'+蒸');
  }]
},function(err,result){
    console.log(result);//3
});