var dbNotes = require("../db/db.json");
const fs = require("fs");
var uniqid = require('uniqid');

module.exports = function(app) {
    // api GET request
    app.get("/api/notes", function(req, res) {
        res.send(dbNotes);
    });

    // api POST request
    app.post("/api/notes", function(req, res) {

        var id = uniqid();

        var newNote = {
            id: id, 
            title: req.body.title,
            text: req.body.text
        };

        fs.readFile("./db/db.json", "utf8", (err, data) => {
            if (err) throw err;
    
            var collectedNotes = JSON.parse(data);
    
            collectedNotes.push(newNote);
    
            fs.writeFile("./db/db.json", JSON.stringify(collectedNotes), err => {
                if(err) throw err; 
                res.send(dbNotes);
            })
        });
    });

    
    app.delete("/api/notes/:id", function(req, res) {
        var currentId = req.params.id;

        fs.readFile("./db/db.json", "utf8", (err, data) => {
            if (err) throw err;
    
            var collectedNotes = JSON.parse(data);
            

            //trying splice
            //if that doesnt work, we can try to filter it out
            var updatedCollectedNotes = collectedNotes.filter(note => note.id != currentId);
    
            fs.writeFile("./db/db.json", JSON.stringify(updatedCollectedNotes), err => {
                if(err) throw err; 
                res.send(dbNotes);
            })
        });

    });

    
}
