const mongoose = require('mongoose');

const test = new mongoose.Schema({
    //fields that a quote table can have
    content: {
        type: String,
        required:[true, "Quote content is required!"],
        min: [5, "Quote content must be at least 5 characters long"]
    },
    author: {
        type: String,
        required:[true, "Author is required!"]
    },
    rating: {
        type: Number
    }

})

//register the above code at a table in mongodb
const Quote = mongoose.model("Quote", test )



module.exports = Quote;