var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306, // PORT Number
	user: "root", // Username
	password: "1faith!SQL", // Password
	database: "bamazon" // Database Name in mySQL.
})

connection.connect(function(err) {
	if (err) throw err;
	//console.log("connected as id " + connection.threadId);
	makeTable();
})

var makeTable = function(){
	connection.query("SELECT * FROM products", function(err, res) {
    	for (var i = 0; i <res.length; i++) {  
    	   	console.log("Item ID" + " | " + res[i].ItemID);
        	console.log("Product Name:" + res[i].ProductName);
        	console.log("Department:" + res[i].DepartmentName);
			console.log("Price:" + res[i].Price);
			console.log("Stock Quantity:" + res[i].StockQuantity);
			console.log("--------------------------------------------------");
   		 }
   	promptCustomer(res);
    })
}
var promptCustomer = function(res){
	inquirer.prompt([{
		type:'input',
		name: 'choice',
		message: "What is the ID number of the product you would like to purchase?" }])
	.then(function(answer){
var correct = false;
for (var i = 0; i <res.length; i++) {
	if(res[i].ItemID==answer.choice){
		correct=true;
		var product=answer.choice;
		var id=i;
			} 
		}
	})
}	


//Perhaps use this code later. connection.end();