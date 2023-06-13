var express = require("express");
var router = express.Router();
var path = require("path");

router.get('/', function(req,res){
    res.sendFile(path.resolve('./frontend/public/index.html'));
});

router.get('/shop', function(req,res){
    res.sendFile(path.resolve('./frontend/public/shop.html'));
});
module.exports = router;