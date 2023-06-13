require('dotenv').config();
var express = require("express");
var path = require("path");
var mongoose = require("mongoose");
var config = require("./Backend/config/database");

// connect to db
mongoose.connect(config.database);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Cannot connect db'));
db.once('open', function(){
    console.log('Connected to MongoDB');
});

// Init app
app = express();

// Set folders
app.use(express.static(__dirname + '/public'));

// Set Router
var pages = require('./Backend/config/pages');
var adminPages = require('./Backend/config/admin_pages');

app.use('/admin/pages', adminPages);
app.use('/', pages);

// Start Server
const port = 3300;
app.listen(port,function(){
    console.log("Server started on port", port);
});