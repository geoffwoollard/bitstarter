var express = require('express');
var fs = require('fs')

var app = express.createServer(express.logger());

INPUT_BUF = fs.readFileSync('index.html')
// INPUT_B = new Buffer(INPUT)
INPUT_STR = INPUT_BUF.toString()

app.get('/', function(request, response) {
  response.send(INPUT_STR);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
