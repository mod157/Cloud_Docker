var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type' : 'text/plain' });
  res.end('Hello World');
}).listen(8080);
