var http = require('http');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : '129.150.126.241',
  user     : 'Lee',
  password : '32121849',
  port     : 3306,
  database : 'Profile'
});


http.createServer(function (req, res) {
  console.log("server");
  connection.query('SELECT * from info', function(err, rows) {
    if(err) throw err;

    console.log('The solution is: ', rows);
    res.send(rows);
  });

  res.writeHead(200, { 'Content-Type' : 'text/plain' });
  res.end('Hello World');
}).listen(8080);
