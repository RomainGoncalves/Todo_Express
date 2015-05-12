var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
require('./router')(app);

app.listen(port, function () {
console.log( app );
  console.log('Example app listening at http://%s:%s', app.host, port);

});