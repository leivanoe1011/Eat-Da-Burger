
// Dependencies
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll(function(res){
            cb(res);
        });
    },

    insertOne: function(insertVal,cb){
        orm.insertOne(insertVal, function(res){
            cb(res);
        });
    },

    updateOne: function(setVal, whereVal){
        orm.updateOne(setVal, whereVal, function(res){
            cb(res);
        })
    }
}

module.exports = burger;

