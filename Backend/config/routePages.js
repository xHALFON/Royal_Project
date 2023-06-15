var express = require("express");
var router = express.Router();
var path = require("path");
var app = express();
var products;
//shop
// var cors = require('cors');
var modelproduct = require('../models/products');

// adding product
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/add', async function(req, res) {
    try {
      var newProduct = new modelproduct({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        countInStock: req.body.countInStock,
        imageUrl: req.body.imageUrl,
        category: req.body.category,
        id: req.body.id
      });
  
      await newProduct.save();
  
      console.log('Product added to the database');
      res.redirect('/adminaddproducthUKEwi5irXX48T_AhXiVaQEHYaqDy8Q4dUDCAk&uact=5&oq=dsa&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgsILhCvARDHARCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQguEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6CAgAEIAEELEDOgsIABCABBAKEAEQKjoLCC4QgAQQxwEQ0QNQAFhqYLsCaABwAHgAgAGfAYgBzAOSAQMwLjOYAQ');
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  });
  // remove product
  router.post('/remove', async function(req, res) {
    try {
      var productId = req.body.id;
      await modelproduct.deleteOne({ id: productId });
      console.log('Product removed from the database');
      res.redirect('/adminshophUKEwi5irXX48T_AhXiVaQEHYaqDy8Q4dUDCAk&uact=5&oq=dsa&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgsILhCvARDHARCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQguEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6CAgAEIAEELEDOgsIABCABBAKEAEQKjoLCC4QgAQQxwEQ0QNQAFhqYLsCaABwAHgAgAGfAYgBzAOSAQMwLjOYAQ');
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  });
// routing
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

router.get('/about', async function(req,res){
    res.sendFile(path.resolve('./views/about.html'));
});

router.get('/customers', async function(req,res){
    res.sendFile(path.resolve('./views/customers.html'));
});

router.get('/locations', async function(req,res){
    res.sendFile(path.resolve('./views/locations.html'));
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