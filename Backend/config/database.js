require("dotenv").config();
var mongoose = require("mongoose");
const connectDB = async() =>{
    try{
        mongoose.connect("mongodb+srv://royal-main-db-059fe39a16c:TCA4ezvEMbHAmtFkH96s3DRX7RHNdE@prod-us-central1-2.ih9la.mongodb.net/royal-main-db-059fe39a16c");
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
