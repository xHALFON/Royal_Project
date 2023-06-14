var express = require("express");
var router = express.Router();
var path = require("path");
var app = express();

router.get('/', function(req,res){
    res.render('index');
});

router.get('/shop', function(req,res){
    res.render('shop.ejs')
});
module.exports = router;