# SERVER APPLICATION

This is a project made in class of Server-Side Programming. the idea is create a server connected with a database in MySQL.

## Technologies used

- Node.js
- JavaScript
- MySQL Workbench

## SERVERS SIDE

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
## CLIENT SIDE

-

























