var express = require("express");
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : '129.150.126.241',
  user     : 'Lee',
  password : '32121849',
  port     : 3306,
  database : 'Profile'
});
var app = express();
connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... \n\n");
} else {
    console.log("Error connecting database ... \n\n");
}
});

app.get("/",function(request,response){
connection.query('SELECT * from info', function(err, rows, fields) {
connection.end();
  if (!err){
    response.send(rows);
  }
  else
    console.log('Error while performing Query.');
  });
});

app.listen(8080);
