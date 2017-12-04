var http = require('http');
var express = require('express');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'Lee',
  password : '32121849',
  port     : 3306,
  database : 'Profile'
});

var app = express();

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type' : 'text/plain' });
  res.end('Hello World');
}).listen(8080);

app.set('port', process.env.PORT || 8080);
app.get('/', function(req, res){
  connection.query('SELECT * from info', function(err, rows) {
    if(err) throw err;

    console.log('The solution is: ', rows);
    res.send(rows);
  });
});

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
