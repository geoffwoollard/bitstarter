var express = require('express');

var app = express.createServer(express.logger());

// INPUT = fs.readFileSync('index.html')
// INPUT_B = new Buffer(INPUT)
// INPUT_S = INPUT_B.toString()

app.get('/', function(request, response) {
  response.send('gw');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
