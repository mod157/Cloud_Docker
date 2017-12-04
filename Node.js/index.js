var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Tpye': 'text/html'});
        res.end(`<h1>${reqconnection.localAddress}</h1>`);
}).listen(9999);
