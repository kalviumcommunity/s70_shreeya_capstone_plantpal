//plant schema

const mongoose = require('mongoose')

const plantSchema = new mongoose.Schema({
    plantName : String,
    plantSpecies : String,
    description : String,
    addedOn : {type : Date, default : Date.now()}
});


const Plant = mongoose.model("Plant", plantSchema)
module.exports = Plant