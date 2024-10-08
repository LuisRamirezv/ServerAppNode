// This is the framework
// we will be using this framework to create
// some logic to handle the process
// of sending and recieving information
// from the client to the server application


// Import the express framework
var express = require("express");



// Create the instance of the object
// this will allow us to access the methds

var app = express();

// Now that the port is stablished we can create a response to the client
// this get method will recieve or get the response and send it to the client

app.get("/", function(req, res){

    res.send("port is working ok!");
})

// create a port to establis a pathway for communication

var port = 3000;

// this port will handle the traffic to and from the server application and client

// to open a port we will acces the app variable

app.listen(port, function(){

    // Send a message and check if the message is recieve by the client
    console.log("App connected to port " + port); // Terminal response

});



