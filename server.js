// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/about", function(req, res){
    res.sendFile(path.join(__dirname, "./public/about.html"));
});

app.get("/portfolio", function(req, res){
    res.sendFile(path.join(__dirname, "./public/portfolio.html"));
});

app.get("/contact", function(req, res){
    res.sendFile(path.join(__dirname, "./public/contact.html"))
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });