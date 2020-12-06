// Dependencies
const express = require("express");

// tells node we're creating an "express" server
const app = express();

// Creating a port
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  //  res.send('Hello!');
  res.sendFile('/Users/omarmcossio/Desktop/Bootcamp/Homework/hw9/note-taker/Develop/public/index.html');
});


app.use(express.urlencoded({ extend: true}));
app.use(express.json());


require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);


app.get("/api/index", function(req, res) {
    res.json(index);
});


app.listen(PORT, () => {
    console.log("you've connected at http://localhost" + PORT);
});

var db = [
    {
        title: "Test Title",
        text: "Test text"
    }
];

// Routing
//require("Develop/routes/apiRoutes.js")(app);




