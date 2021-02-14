var { Collection } = require("../models");
// Routes
// =============================================================
module.exports = function (app) {
    // GET route for getting a collection
    app.get("/api/collection", function (req, res) {
        // Write code here to retrieve all of the todos from the database and res.json them
        // back to the user
        Collection.findAll({}).then(function (results) {
            // results are available to us inside the .then
            res.json(results);
        });
    });
    // // POST route for saving a new todo. We can create todo with the data in req.body
    // app.post("/api/todos", function (req, res) {
    //     // Write code here to create a new todo and save it to the database
    //     // and then res.json back the new todo to the user
    //     db.Todo.create(
    //         req.body

    //     ).then(function (results) {
    //         // `results` here would be the newly created chirp
    //         res.end();
    //     });
    // });
    // // DELETE route for deleting todos. We can get the id of the todo to be deleted from
    // // req.params.id
    // app.delete("/api/todos/:id", function (req, res) {
    //     let id = req.params.id;
    //     db.Todo.destroy({
    //         where: { id }
    //     }).then(res.end());
    // });
    // // PUT route for updating todos. We can get the updated todo data from req.body
    // app.put("/api/todos", function (req, res) {
    //     console.log(req.body);
    //     db.Todo.update(
    //         { complete: req.body.complete },
    //         { where: { id: req.body.id } }
    //     ).then(function (result) {
    //         res.json(result)
    //     })
    // });
};