process.env.DEBUG = 'crawl:*';
var debug = require('debug')('crawl:save');
var async = require('async');
var models = require('./models');
//保存分类列表
exports.category = function(categories,callback){
   async.forEach(categories,function(category,next){
       models.Category.create(category,function(){
           debug('保存分类:'+category.name);
           next();
       })
   },callback)
}
//保存电视剧
exports.tv = function(tvs,callback){
    async.forEach(tvs,function(tv,next){
        models.Tv.create(tv,function(){
            debug('保存电视剧:'+tv.name);
            next();
        })
    },callback)
}