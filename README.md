# Bamazon
Amazon-like store front created with MySQL, Inquirer and Node.js

The screenshots of the app and a written demo of how it functions are located in the Bamazon github project folder. 
The files can be viewed either by opening the three individual jpeg files: screenshot1.jpg, screenshot2.jpg and screenshot3.jpg or
by viewing all three pages and the written demo contained in the Acrobat file titled Screenshot.pdf.

DETAILED STEPS USED TO BUILD THIS APP:

Created a Github Repository (set to "Public" and initialized with Readme file) and a Local Folder both named Bamazon
Built the app using the local bamazon folder and used the Git command line to push all local changes to the bamazon repository's origin master

NPM - mysql and inquirer packages installed

MySQL Bamazon database created with a Products table, 5 Columns and 10 products

Node.js application created as follows in the bamazonCustomer.js file:

Required the MySQL database

Added the createConnection code in order to access the specific MySQL database Bamazon

Added connection.connect function and tested
The console log shows connection and id number at this point

Added connection.query function and tested
The console log shows the bamazon database's products table with all columns and details of the 10 products

Added a for loop and line break so the console log only shows the column names and data for a more readable and cleaner look.

Used connection.end command to test then deleted it to perhaps use later.

Added a makeTable function as opposed to just the console.log commands.
Tested; the output displayed is the same.

Added prompts to ask the customer two questions, functions to look over user input, stock quantity, and if validated or not, responds to the customer either that the product was purchased, not a valid selection or that there was insufficient quantity.

After each successful purchase, the number ordered is subtracted from the stock quantity for the specific item.
The entire list refreshes reflecting the changed quantity and the customer is prompted again to begin the next item order.

The customer may quit the application by pressing the capital letter "Q."