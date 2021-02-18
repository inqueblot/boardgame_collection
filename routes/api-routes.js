var { Collection } = require("../models");
var { Users } = require("../models");

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
        });
    });

    app.delete("/api/collection/:id", function (req, res) {
        Collection.destroy({
            where: {
                bg_id: req.params.id
            }
        }).then(() => res.send("success"))
    })


    app.post("/api/users/", function (req, res) {
        let values = req.body;
        console.log(req.body);
        Users.create({
            email: values.email,
            password: values.password
            
        }).then(() => res.send("success"))
        
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


