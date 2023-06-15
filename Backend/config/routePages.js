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

router.get('/api', async function(req,res){ //gets products from db
    products = await modelproduct.find();
    res.json(products);
});

router.get('/login', async function(req,res){
    res.sendFile(path.resolve('./views/login.html'));
});

/*-------------Shop-----------------*/ 
router.get('/shop', async function(req,res){
    res.sendFile(path.resolve('./views/shop.html'));
});

router.get('/shop_ring', async function(req,res){
    res.sendFile(path.resolve('./views/shop.html'));
});

router.get('/shop_necklace', async function(req,res){
    res.sendFile(path.resolve('./views/shop.html'));
});

router.get('/shop_brace', async function(req,res){
    res.sendFile(path.resolve('./views/shop.html'));
});

router.get('/shop_earrings', async function(req,res){
    res.sendFile(path.resolve('./views/shop.html'));
});

router.get('/shop_clock', async function(req,res){
    res.sendFile(path.resolve('./views/shop.html'));
});

router.get('/shop_SortByPrice', async function(req,res){
    res.sendFile(path.resolve('./views/shop.html'));
});

router.get('/shop_SortByCategory', async function(req,res){
    res.sendFile(path.resolve('./views/shop.html'));
});

router.get('/shop_SortByName', async function(req,res){
    res.sendFile(path.resolve('./views/shop.html'));
});

router.get('/shop_brands', async function(req,res){
    res.sendFile(path.resolve('./views/shop.html'));
});

/*----------admin--------*/
router.get('/hUKEwi5irXX48T_AhXiVaQEHYaqDy8Q4dUDCAk&uact=5&oq=dsa&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgsILhCvARDHARCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQguEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6CAgAEIAEELEDOgsIABCABBAKEAEQKjoLCC4QgAQQxwEQ0QNQAFhqYLsCaABwAHgAgAGfAYgBzAOSAQMwLjOYAQ', function(req,res){
    res.sendFile(path.resolve('./views/adminindex.html'));
});
router.get('/adminshophUKEwi5irXX48T_AhXiVaQEHYaqDy8Q4dUDCAk&uact=5&oq=dsa&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgsILhCvARDHARCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQguEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6CAgAEIAEELEDOgsIABCABBAKEAEQKjoLCC4QgAQQxwEQ0QNQAFhqYLsCaABwAHgAgAGfAYgBzAOSAQMwLjOYAQ', function(req,res){
    res.sendFile(path.resolve('./views/adminshop.html'));
});

router.get('/adminaddproducthUKEwi5irXX48T_AhXiVaQEHYaqDy8Q4dUDCAk&uact=5&oq=dsa&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgsILhCvARDHARCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQguEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6CAgAEIAEELEDOgsIABCABBAKEAEQKjoLCC4QgAQQxwEQ0QNQAFhqYLsCaABwAHgAgAGfAYgBzAOSAQMwLjOYAQ', function(req,res){
    res.sendFile(path.resolve('./views/adminaddproduct.html'));
});
module.exports = router;