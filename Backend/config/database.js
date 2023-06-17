require("dotenv").config();
var mongoose = require("mongoose");
const connectDB = async() =>{
    try{
        mongoose.connect("mongodb://127.0.0.1:27017/RoyalDB");
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'Cannot connect db'));
        db.once('open', function(){
            console.log('Connected to MongoDB');
        });
    } catch(error){
        console.log("Cannot connect db");
        process.exit(1);
    }
    
}
module.exports = connectDB;
