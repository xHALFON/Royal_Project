var express = require("express");
var router = express.Router();
var path = require("path");
var app = express();
var products;
//shop
// var cors = require('cors');
var modelproduct = require('../models/products');

router.get('/', async function(req,res){
    res.sendFile(path.resolve('./views/index.html'));
});

router.get('/api', async function(req,res){
    products = await modelproduct.find();
    res.json(products);
});

router.get('/shop', async function(req,res){
    res.sendFile(path.resolve('./views/shop.html'));
    // products = await modelproduct.find();
    // console.log(products);
});

module.exports = router;