var express = require("express");
var router = express.Router();
var path = require("path");
var app = express();
var products;
var products2;
var EmptyArr = [];

//require bodyparser for json format - important do not delete
var modelproduct = require('../models/products');
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


//------------------shop------------------------
// search product
router.post('/api/search', async function(req, res) {
  var query = req.body; // Get the search query from the request body
  console.log(query.name);
  console.log("A search has been executed.");

  try {
      products2 = await modelproduct.find({ name: { $regex: `${query.name}`, $options: 'i' } });
      console.log(products2);
      if (products2 == [])
      {
          res.json(EmptyArr);
      }
      else{
      res.json(products2);
      products2=[];
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while performing the search." });
  }
});

// adding product
router.post('/add', async function(req, res) {
    try {
      var newProduct = new modelproduct({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        countInStock: req.body.countInStock,
        imageUrl: req.body.imageUrl,
        category: req.body.category,
        id: req.body.id,
        purchased: req.body.purchased
      });
  
      await newProduct.save();
  
      console.log('Product added to the database');
      res.redirect('/adminaddproducthUKEwi5irXX48T_AhXiVaQEHYaqDy8Q4dUDCAk&uact=5&oq=dsa&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgsILhCvARDHARCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQguEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6CAgAEIAEELEDOgsIABCABBAKEAEQKjoLCC4QgAQQxwEQ0QNQAFhqYLsCaABwAHgAgAGfAYgBzAOSAQMwLjOYAQ');
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  });

//purchase
var Passed_value = [];
router.post('/prepurchase', async function(req,res) {
    Passed_value = req.body;
});
// delete all products
router.post('/deleteall', async function(req,res) {
  try {

  await modelproduct.deleteMany();
  console.log("All Products deleted.");
  

  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

router.post('/purchase', async function(req,res) {
    console.log("Client Buy: " + Passed_value + " Product ID");
        for(i = 0; i < Passed_value.length; i++){
       await modelproduct.updateMany({ id: Passed_value[i] },
        { $inc: { purchased: +1, countInStock: -1 } }
        )
    }
    Passed_value = [];
});


  // remove product
  router.post('/remove', async function(req, res) {
    try {
      var productId = 0;
      productId = req.body.id;
      await modelproduct.deleteOne({ id: productId });
      if(productId != 0){
      console.log('Product removed from the database');
      }
      res.redirect('/adminshophUKEwi5irXX48T_AhXiVaQEHYaqDy8Q4dUDCAk&uact=5&oq=dsa&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgsILhCvARDHARCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQguEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6CAgAEIAEELEDOgsIABCABBAKEAEQKjoLCC4QgAQQxwEQ0QNQAFhqYLsCaABwAHgAgAGfAYgBzAOSAQMwLjOYAQ');
      
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  });

  //payment paymentreached   paymentcancled
  router.get('/paymentcancled', async function(req, res) {
    Passed_value = [];
    res.send(`<h1>Payment Canceled <a href='/'>Back to Royal</a></h1>`)
  });
  router.get('/paymentreached', async function(req, res) {
    res.send(`<h1>Thank you for buying <a href='/'>Back to Royal</a></h1>`)
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

router.get('/payment', async function(req,res){
    res.sendFile(path.resolve('./views/payment.html'));
});

router.get('/shop', async function(req,res){
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