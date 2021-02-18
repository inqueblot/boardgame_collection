var { Collection } = require("../models");
var { User } = require("../models");
const passport = require("../config/passport");

const { Op } = require("sequelize");
const util = require("util");
const db = require("../models");
// Routes
// =============================================================
module.exports = function (app) {
    // GET route for getting a collection
    app.get("/api/collection", function (req, res) {
        // Write code here to retrieve all of the todos from the database and res.json them
        // back to the user
        Collection.findAll({}).then(function (results) {
            res.json(results)

        });
    });
    // // POST route for saving a new todo. We can create todo with the data in req.body
    app.post("/api/game/", function (req, res) {
        let values = req.body;
        console.group(req.body);
        Collection.create({
            name: values.name,
            bg_id: values.id,
            minPlayers: values.min_players,
            maxPlayers: values.max_players,
            playTime: values.playTime,
            yearPub: values.year,
            publisher: values.primary_publisher.name,
            age: values.age,
            msrp: values.msrp,
            image: values.images.small,
            designer: values.primary_designer.name,
        }).then(function (results) {
            res.json(values.name);
        }).catch(function (err) {
            console.error(err);
            res.send(err)
        });
    });

    app.delete("/api/collection/:id", function (req, res) {
        Collection.destroy({
            where: {
                bg_id: req.params.id
            }
        }).then(() => res.send("success"))
    })


    app.post("/api/signup/", function (req, res) {
        let values = req.body;
        console.log(req.body);
        User.create({
            email: values.email,
            password: values.password

        }).then(() => res.send("success"))

    });

    app.post("/api/login", passport.authenticate("local"), (req, res) => {
        // Sending back a password, even a hashed password, isn't a good idea
        res.json({
          email: req.user.email,
          id: req.user.id
        });
      });

    app.get("/api/collection/players/:number", function (req, res) {
        console.log(req.params.number)
        Collection.findAll({
            where: {
                minPlayers: {
                    [Op.lte]: req.params.number
                },
                maxPlayers: {
                    [Op.gte]: req.params.number
                }
            }
        }).then(function (results) {
            // console.log(results)
            res.json(results)
        })
    });

    app.get("/api/collection/time/:number", function (req, res) {
        console.log(req.params.number)
        Collection.findAll({
            where: {
                playTime: {
                    [Op.lte]: req.params.number
                }
            }
        }).then(function (results) {

            res.json(results)
        })
    });

    app.get("/api/collection/designer/:designer", function (req, res) {
        console.log(req.params.designer)
        Collection.findAll({
            where: {
                designer: req.params.designer
            }
        }).then(function (results) {

            res.json(results)
        })
    });

};


//     // Write code here to create a new todo and save it to the database
//     // and then res.json back the new todo to the user
//     db.Todo.create(
//         req.body

//     ).then(function (results) {
//         // `results` here would be the newly created chirp
// res.end();
//     });

// .then(function () {
//   console.log("new game added");
// });
// .catch(function (err) {
//   console.log(err);
// });


