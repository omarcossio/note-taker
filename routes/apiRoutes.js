var dbNotes = require("../db/db.json");
const fs = require("fs");
var uniqid = require('uniqid');

module.exports = function (app) {
    // api GET request
    app.get("/api/notes", function (req, res) {
        res.send(dbNotes);
    });

    // api POST request
    app.post("/api/notes", function (req, res) {

        var id = uniqid();

        var newNote = {
            id: id,
            title: req.body.title,
            text: req.body.text
        };

        dbNotes.push(newNote);

        fs.writeFile("./db/db.json", JSON.stringify(dbNotes), err => {
            if (err) throw err;
            res.send(dbNotes);
        });

    });


    app.delete("/api/notes/:id", function (req, res) {
        var currentId = req.params.id;
        for (var i = 0; i < dbNotes.length; i++) {
            if (currentId == dbNotes[i].id) {
                dbNotes.splice(i, 1);

                fs.writeFile("./db/db.json", JSON.stringify(dbNotes), err => {
                    if (err) throw err;
                    res.send(dbNotes);
                });
            }
            else {
                console.log("That note Id was not found");
            }
        }


    });


}
