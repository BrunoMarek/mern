const express = require("express");
const cors = require("cors")
const app = express();
const port = 8000;
app.use( express.json() ); //tells my app that it can parse json
app.use( express.urlencoded({ extended: true }) ); //tells my app that it can gather form information
app.use(cors()); // share with react

require("./server/config/config");

//require the routes
const AllJokesRoutes = require("./server/routes/jokes.routes");
AllJokesRoutes(app);

//app.listen needs to be at the end of the file
app.listen(8000, () => console.log("The server is all fired up on port 8000"));