'use strict';

var express = require('express');

var app = express();
var PORT = process.env.port || 3000;

app.listen(PORT, function () {
  console.log('Server listening on port', PORT);
});