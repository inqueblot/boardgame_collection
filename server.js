
var express = require("express");
var session = require("express-session");
var exphbs = require('express-handlebars');
var passport = require("passport")

// Sets up the Express App
// =============================================================
var PORT = process.env.PORT || 8080;
var { sequelize } = require("./models");

// Sets up the Express app to handle data parsing
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));
app.engine('handlebars', exphbs({}));
app.set('view engine', 'handlebars');
app.use(
    session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);
// app.get("/", (req, res) => {
//     res.render("index")
// })

// Starting our Express app
// =============================================================


sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("Server listening on http://localhost:" + PORT);
    });
})
//insert into sync() to clear DB
// { force: true }