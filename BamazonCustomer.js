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
		message: "Which product would you like to purchase? [Type Product Name or Quit with Q]"
	}]).then(function(answer){
var correct = false;
	if(answer.choice.toUpperCase()=="Q"){
		process.exit();
	}
for (var i = 0; i <res.length; i++) {
	if(res[i].ProductName==answer.choice){
		correct=true;
var product=answer.choice;
var id=i;
	inquirer.prompt({
		type:"input",
		name:"quant",
		message:"How many units of this product would you like to purchase?",
		validate: function(value){
			if(isNaN(value)==false){
				return true;
			} else {
				return false;
			}
		}
	}).then(function(answer){
		if((res[id].StockQuantity-answer.quant)>0){
			connection.query("UPDATE products SET StockQuantity='"+(res[id].StockQuantity-answer.quant)+"' WHERE ProductName='"+product+"'", function(err,res2){
			console.log("Product Purchased!");
			makeTable();
			})
		} else {
			console.log("Sorry, insufficient quantity in stock at this time.");
			promptCustomer(res);
					}
				})
			}
		}
		if(i==res.length && correct==false){
			console.log("Not a valid selection!");
			promptCustomer(res);
		}
	})
}	
// The README file outlines the creation steps and application's functions. It also states the url of the application's image.