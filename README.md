# SERVER APPLICATION

This is a project made in class of Server-Side Programming. the idea is create a server connected with a database in MySQL.

## Technologies used.

- Node.js
- JavaScript
- MySQL Workbench

## SERVERS SIDE.

- Initialize the Node location using the following command:

```js
npm init
```
- Install Express:

```js
npm install express
```
- Create the Express.js file inside the folder.
- Import the express framework.
```js
var express = require("express");
```
- Create the instance of the object. This will allow me to access thew methods.
```js
var app = express();
```
- Create a port to stablish a pathway for communication, using the app variable.
```js
var port = 3000;
```
- Usding the method .listen we are going to be able to listeingn for messages.
```js
app.listen(port, function());
```
- Create a testing message, a terminal response.
```js
console.log("App connected to port " + port);
```
## CREATING AND CONNECTING A DATABASE.

- install MySQL Workbench app.
- Creatre an schema adn then create a table.
- Choose a namefor the table and add some columns name.
- Create ID, first_name, second_name, role, and password columns.
- Populated the tables with random information.
- write the following code, and run it:

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
```
- This code are going to change the password for "password".

## CREATE A CONNECTION.

- Create a database.js file tostore the localhost database.
- Create the variable and install the mysql module to utilize some methods.
```js
npm install mysql
```
- Import the database into the Express.js file.
```js
var connection = require("./database")
```
- Use the relative path for the connection, in this case the database file is in the same folder as Express.
- In the Express.js file, we have to update the app.get code, creating a variable to store a mysql code choosing the table inside.
```js
 let sql = "SELECT * FROM mysql_table"; 
```
- After that, we have to catch any error.
```js
connection.query(sql, function(err, results){
    // Catch errors and throw them
    if(err) throw err;
    res.send() // otherwise send the results
})
```
## CONNECT TO THE DATABASE
- Connect to a database adn give a status.
```js
connection.connect(function(err){
    // catch the error if error
    if(err) throw err;
    
    console.log("Database connected")
})
```
- The port are going to connect with the database, the server app are gogint to read what is in the database  and the port is going to take that information and sen it back. The port check staus of the traffic.




## GET THE FORM FORM THE SERVER APP

- 




