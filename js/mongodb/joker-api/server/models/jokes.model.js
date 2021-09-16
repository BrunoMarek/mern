const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema ({
    setup:{
        type: String,
        required:[true,  "How you will tell a joke?"],
        minlength:[10, "and the joke is???"]
    },
    punchline:{
        type: String,
        required:[true,  "not funny?"],
        minlength:[3, "and the joke is???"]
    }
})

const Joke = mongoose.model("Joke", JokeSchema)

module.exports = Joke