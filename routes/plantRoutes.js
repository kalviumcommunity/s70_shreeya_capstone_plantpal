const express = require('express')
const Plant = require('../models/Plant')
const router = express.Router()

router.get('/get',async(req,res)=>{
    
    try{
        const plants = await Plant.find();
        res.status(200).json(plants)
    }
    catch(error){
        res.status(500).json({message : error.message})
    }
});

router.post('/createplant',async(req,res)=>{
    try{
        const {name,species,description,imageUrl,wateringFrequency,lastWatered} = (req.body)
        const newPlant = new Plant({name,species,description,imageUrl,wateringFrequency,lastWatered})
        const savedPlant = await newPlant.save()
        res.status(201).json(savedPlant)
    }
    catch(error){
        res.status(500).json({message : error.message})
    }
});

router.put('/updateplant/:id', async(req,res)=>{
    try{
        const updatedPlant = await Plant.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!updatedPlant){
            res.status(404).json({message : 'Plant not found'})
        }
        res.status(200).json(updatedPlant);
    }
    catch(err){
        res.status(500).json({message : err.message});
    }
});

module.exports = router;
