var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var cors = require("express-cors");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todos');
var db = mongoose.connection;

db.on("error", function () {
  throw new Error("unable to connect to database at mongodb//localhost/todos");
});

app.use(cors({
  allowedOrigins: ["localhost:*", "192.168.0.10:*", "0.0.0.0:*", "*"]
}));

app.use(bodyParser.json());

require('./router')(app, mongoose);

app.listen(port);