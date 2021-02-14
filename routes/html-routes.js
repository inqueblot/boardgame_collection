var express = require("express");
var exphbs = require('express-handlebars');
var app = express();

module.exports = function (app, express) {
    app.get("/", (req, res) => {
        res.render("index")
    })
}