
// Dependencies
var express = require("express");

// Router will read the URL and re-route the appropriate function
var router = express.Router();

// The burger data model
var burger = require("../models/burger.js");

// Below we are going to query all the rows in the Burgers table.
// then we going to return and load it to the "data" parameter.
// After we going to pass the "data" result to the Index View to get parsed
router.get("/", function(req,res){
    burger.selectAll(function(data){
        var obj = {
            burgers: data
        };
        console.log(obj);
        res.render("index" obj);
    });
});

// router.get("/", function(req,res){

// })


// router.post("/api/cats", function(req, res) {
//     cat.create([
//       "name", "sleepy"
//     ], [
//       req.body.name, req.body.sleepy
//     ], function(result) {
//       // Send back the ID of the new quote
//       res.json({ id: result.insertId });
//     });
//   });
  
//   router.put("/api/cats/:id", function(req, res) {
//     var condition = "id = " + req.params.id;
  
//     console.log("condition", condition);
  
//     cat.update({
//       sleepy: req.body.sleepy
//     }, condition, function(result) {
//       if (result.changedRows == 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
//   });

module.exports = router;

