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

var connection = require("./database")

// now we need to give access to the styling and other associated

app.use(express.static(__dirname));

// Establish a ,ethpd tp serve the communication



// Now that the port is stablished we can create a response to the client
// this get method will recieve or get the response and send it to the client

app.get("/", function(req, res){

    // Get the database info
    // Create a variable that will contain the query

    let sql = "SELECT * FROM mysql_table"; // This will be ran in mysql workbench
    // passing the connection and send the information to rescieve the response

    connection.query(sql, function(err, results){
        // Catch errors and throw them
        if(err) throw err;
        res.send() // otherwise send the results
    })
})

// create a port to establis a pathway for communication

var port = 3000;

// this port will handle the traffic to and from the server application and client

// to open a port we will acces the app variable

app.listen(port, function(){

    // Connect to a database adn give a status
    connection.connect(function(err){
        // catch the error if error
        if(err) throw err;
        
        console.log("Database connected")
    })

    // Send a message and check if the message is recieve by the client
    console.log("App connected to port " + port); // Terminal response

});



