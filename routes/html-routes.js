var express = require("express");
var exphbs = require('express-handlebars');
var app = express();
const isAuthenticated = require("../config/middleware/isAuthenticated")

module.exports = function (app, express) {
    app.get("/", (req, res) => {
        console.log(req.user)
        res.render("index", req.user)
    })

    app.get("/game/:id", (req, res) => {
        res.render("game", req.user)
    })

    app.get("/collection", isAuthenticated, (req, res) => {
        res.render("collection", req.user)
    })

    app.get("/users", (req, res) => {
        res.render("users", req.user)
    })

    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });
} 