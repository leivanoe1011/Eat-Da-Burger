
// Import Mysql Connection
var connection = require("../config/connection.js");

var orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers;";

        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    // Need to be sure to include Double Quotes when necessary
    insertOne: function(insertVal, cb) {

        var queryString = `INSERT INTO burgers (burger_name, devoured) VALUES(${insertVal})`;

        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        })
    },

    updateOne: function(setVal, whereVal, cb){
        var queryString = `UPDATE burgers SET ${setVal} WHERE ${whereVal};`;
        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        })
    }
}


module.exports = orm;

