var express = require("express");
var { sequelize } = require("./models");
var exphbs = require('express-handlebars');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
app.get("/", (req, res) => {
    res.render("index")
})

// Starting our Express app
// =============================================================


sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("Server listening on http://localhost:" + PORT);
    });
})
//insert into sync() to clear DB
// { force: true }