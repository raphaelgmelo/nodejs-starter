'use strict';

var express = require('express');
var http = require('http');
var app = express();

app.get('/add/:first/:second', function (req, res) {
  // convert the two values to floats and add them together
  var sum = parseFloat(req.params.first) + parseFloat(req.params.second);
  res.status(200).send(String(sum));
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


var server = http.createServer(app);
module.exports = server;
