require('dotenv').config();
var express = require("express");
var path = require("path");
var connectDB = require("./Backend/config/database");

// connect to db
connectDB();

// Init app
app = express();

// Set folders
app.use(express.static(__dirname + '/frontend/public'));

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