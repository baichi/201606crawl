var express = require('express');
var app = express();
var models = require('./tasks/models');
app.set('view engine', 'html');
app.set('views', __dirname);
app.engine('html', require('ejs').__express);
app.get('/', function (req, res) {
    models.Category.find({},function(err,categories){
        //先读取查询字符串参数中的cid
        var cid = req.query.cid;
        //如果 没有传入cid 那么取默认的第一个分类的cid
        if(!cid){
            var category = categories[0];
            cid = category._id;
        }
        if(cid){
            models.Tv.find({cid:cid},function(err,tvs){
                res.render('index', {categories:categories,tvs:tvs,cid:cid});
            });
        }
        else
            res.render('index', {categories:categories,tvs:[],cid:cid});
    })

});

app.listen(9090);