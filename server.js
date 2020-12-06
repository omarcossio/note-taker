// Dependencies
const express = require("express");

// tells node we're creating an "express" server
const app = express();

// Creating a port
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extend: true}));
app.use(express.json());


require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);


app.listen(PORT, () => {
    console.log("you've connected at http://localhost" + PORT);
});




