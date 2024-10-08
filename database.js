// Give the database information
// This is the localhost database

var mysql = require("mysql");

// Create a connection to the database using the db info

var connection = mysql.createConnection({

    // The connection will ask for the database information

    host: "localhost",
    database: "mysql_db",
    user: "root",
    password: "password"


});

// Import the database information throught the connection var
// To enable tjhis we will export the conenction

module.exports = connection; // This variable contains the info about 