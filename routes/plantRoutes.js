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
        const {name,species,description} = (req.body)
        const newPlant = new Plant({name,species,description})
        const savedPlant = await newPlant.save()
        res.status(201).json(savedPlant)
    }
    catch(error){
        res.status(500).json({message : error.message})
    }
});


module.exports = router;
