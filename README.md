# Bamazon
Amazon-like store front created with MySQL, Inquirer and Node.js

NPM - mysql and inquirer packages installed

MySQL Bamazon database created with a Products table, 5 Columns and 10 products

Node.js application created as follows in the bamazonCustomer.js file:

Required the MySQL database

Added the createConnection code in order to access the specific MySQL database Bamazon

Added connection.connect function and tested
The console log shows connection and id number

Added connection.query function and tested
The console log shows the bamazon database's products table with all columns and details of the 10 products

Added a for loop and line break so the console log only shows the column names and data for a more readable and cleaner look.

Used connection.end command to test then deleted to perhaps use later.

The screenshot is located at this Markdown path - link:
![Image of Bamazon](https://github.com/JulieH2016/Bamazon/blob/master/Screenshots.pdf)

Added a makeTable function as opposed to just the console.log commands.
Tested; the output displayed is the same.

Added prompts to ask the customer two questions, functions to look over user input, stock quantity, and if validated or not, responds to the customer either that the product was purchased, not a valid selection or that there was insufficient quantity.

After each successful purchase, the number ordered is subtracted from the stock quantity for the specific item.
The entire list refreshes reflecting the changed quantity and the customer is prompted again to begin the next item order.

The customer may quit the application by pressing the capital letter "Q."
