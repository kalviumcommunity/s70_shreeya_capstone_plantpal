
const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
    plantName : {type : String, require : true},
    plantSpecies : {type : String},
    description : {type : String},
    addedOn : {type : Date, default : Date.now()},
    imageUrl : {type : String, require : true},
    wateringFrequency : {type : String, enum : ['Daily', 'Every few days', 'Weekly', 'Biweekly', 'Weekly Twice']},
    lastWatered : {type : Date, default : Date.now()},
    user : {type : mongoose.Schema.Types.ObjectId, ref : 'User', required : true}
});


const Plant = mongoose.model("Plant", plantSchema)  
module.exports = Plant