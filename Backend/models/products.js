var mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    countInStock:{
        type: Number,
        required: true
    },
    imageUrl:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    id:{
        type: Number,
        required: true
    },
    purchased:{
        type: Number,
        required: true
    }
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;
