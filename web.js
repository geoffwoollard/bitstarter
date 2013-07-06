var express = require('express');

var app = express.createServer(express.logger());

INPUT = fs.readFileSync('index.html')
INPUTB = new Buffer(INPUT)
INPUTS = INPUTB.toString()
var MESSAGE = 'gw2'

app.get('/', function(request, response) {
  response.send(INPUTS);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
