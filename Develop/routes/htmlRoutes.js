var path = require("path");

module.exports = function(app) {

    
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    

   /*app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "Develop/public/notes.html"));
    });
    */
/*
   app.get("../public/notes.html", function(req, res) {
    res.sendFile(path.join(__dirname, "/notes"));
    
});*/

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};
