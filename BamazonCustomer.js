var mysql = require('mysql');
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306, // PORT Number
	user: "root", // Username
	password: "1faith!SQL", // Password
	database: "bamazon" // Database Name in mySQL.
})

connection.connect(function(err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId);
})

connection.query('SELECT * FROM products', function(err, res) {
    if (err) throw err;
    console.log(res);
});

connection.end();
