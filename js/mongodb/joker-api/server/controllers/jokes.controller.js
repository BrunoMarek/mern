const Joke = require("../models/jokes.model")

module.exports.AllJokes =(req,res)=>{
    Joke.find()
        .then(AllJokes=>{
            res.json({results: AllJokes})
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.createNewJoke = (req,res)=>{
    Joke.create(req.body)
        .then(newJokeObj=>{
            res.json({results: newJokeObj })
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.findOneJoke = (req,res)=>{
    
    Joke.findOne({_id:req.params.id})
        .then(foundJoke=>{
            res.json({results: foundJoke })
        })
        .catch(err=>{
            res.json({err:err})
        })
}
module.exports.randomJoke = (req,res)=>{
    
    Joke.findOne({})
        .then(randomJoke=>{
            res.json({results: randomJoke })
        })
        .catch(err=>{
            res.json({err:err})
        })
}


module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id }, //find the objects whose _id == req.params.id
        req.body, //req.body is the information from the form to update with
        { new: true, runValidators: true } //new:true means return the newly updated info. 
    )
        .then(updatedJoke => {
            res.json({ results: updatedJoke })
        })
        .catch(err=>{
            res.json({err:err})
        })
        
}

module.exports.deleteJoke = (req,res)=>{
    Joke.deleteOne({_id: req.params.id})
        .then(deletedJoke =>{
            res.json({results: deletedJoke})
        })
        .catch(err=>{
            res.json({err:err})
        })
}
