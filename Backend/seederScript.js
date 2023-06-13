require('dotenv').config();
const productsData = require ('./data/products');
var mongoose = require("mongoose");
const Product = require('./models/products');

// connect to db
mongoose.connect(config.database);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Cannot connect db'));
db.once('open', function(){
    console.log('Connected to MongoDB');
});


const importData = async() => {
try {
    await Product.deleteMany({});
    await Product.insertMany(productsData);
console.log("Data import success");
process.exit();
}
catch (error){
    console.error("error with data import");
    process.exit(1);
}

}