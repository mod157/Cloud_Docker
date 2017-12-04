var http = require('http');
var express = require('express');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : '129.150.126.241',
  user     : 'Lee',
  password : '32121849',
  port     : 3306,
  database : 'Profile'
});

var app = express();

app.set('port', process.env.PORT || 8080);
app.get('/', function(req, res){
  res.send('Hello World');
  connection.query('SELECT * from info', function(err, rows) {
    if(err) throw err;

    res.send(rows);
  });
});

app.listen(app.get('port'), function () {
  res.send('Express server listening on port ' + app.get('port'));
});
