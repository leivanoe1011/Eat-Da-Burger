
// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Giving access to our controllers. This will control the route of our URL
var routes = require("./controllers/burgers_controller.js");

var PORT = process.env.PORT || 8080;

// Initialize the express package
var app = express();

// Server Static content for the app from the "public" directory in the app directory
app.use(express.static("public"));

// This will allow me to access the image folder and render images
app.use(express.static('public/assets/images')); 


// Parse application body as JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Set handlebars
// Main Handlebars page will handle all the other views
app.engine("handlebars", exphbs({defaultLayout: "main"}));

// We going to use handlebars to render our view objects
app.set("view engine", "handlebars");

// Now the app will use the Controllers file to route the URL
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function(){
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});





