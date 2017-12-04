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

app.set('port', process.env.PORT || 8080);
app.get('/', function(req, res){
  res.send('Root');
});

app.get('/persons', function(req, res){

  connection.query('SELECT * from Profile', function(err, rows) {
    if(err) throw err;

    console.log('The solution is: ', rows);
    res.send(rows);
  });
});

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
