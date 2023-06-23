require('dotenv').config();
var express = require("express");
var path = require("path");
var connectDB = require("./backend/config/database");

// connect to db
connectDB();

// Init app
app = express();

// set ejs engine
app.set("frontend", path.join(__dirname, "frontend"));
app.set("view engine", "ejs");

// Set folders
app.use(express.static(__dirname + '/views/public'));
// Set Routers
var pages = require('./backend/config/routePages');
app.use('/', pages);
// Start Server
const port = 3300;
app.listen(port,function(){
    console.log("Server started on port", port);
});
