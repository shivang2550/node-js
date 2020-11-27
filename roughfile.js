var express = require('express');
const app = express();
var port = 1234;
var hostname = "localhost";
var os = require('os');
var fs = require('fs');
var routes=require('./routes/index');
app.use('/',routes);






app.listen(port, hostname, () => {
    console.log("this server is running well");
});