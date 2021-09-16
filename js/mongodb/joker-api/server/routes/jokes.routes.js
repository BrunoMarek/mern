const JokeController = require("../controllers/jokes.controller")


module.exports = app => {
    app.get("/api/jokes", JokeController.AllJokes);
    app.post("/api/jokes", JokeController.createNewJoke);
    app.get("/api/jokes/:id", JokeController.findOneJoke);
    app.get("/api/jokes/random", JokeController.randomJoke);
    app.put("/api/jokes/:id", JokeController.updateExistingJoke);
    app.delete("/api/jokes/:id", JokeController.deleteJoke);

}