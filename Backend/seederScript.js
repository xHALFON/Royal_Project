require('dotenv').config();
const productsData = require ('./data/products');
const Product = require('./models/products');
var connectDB = require("./config/database");

// connect to db
connectDB();

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
};

importData();