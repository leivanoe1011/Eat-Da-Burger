
// Dependencies
var mysql = require("mysql");

// Connection String
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "password",
    database: "burgers_db"
});

// Make Connection
connection.connect(err=>{
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log(`Successful Connection as ID ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;