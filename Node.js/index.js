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
    res.end(rows);
    res.end(rows[0]);
    res.end(rows[1]);
    res.end(rows[2]);
    res.end(rows[3]);
  });
}).listen(8080);
