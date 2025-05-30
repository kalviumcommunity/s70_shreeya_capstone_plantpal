
const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
    plantName : {type : String, require : true},
    plantSpecies : String,
    description : String,
    addedOn : {type : Date, default : Date.now()},
    imageUrl : {type : String, require : true},
    wateringFrequency : {type : String, enum : ['Daily', 'Every few days', 'Weekly', 'Biweekly'], default : 'Weekly'},
    lastWatered : {type : Date, default : Date.now()},
});


const Plant = mongoose.model("Plant", plantSchema)  
module.exports = Plant