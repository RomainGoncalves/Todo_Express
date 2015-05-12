var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var cors = require("express-cors");

app.use(cors({
  allowedOrigins: ["localhost:*", "192.168.0.10:*", "0.0.0.0:*", "*"]
}));

require('./router')(app);

app.listen(port);