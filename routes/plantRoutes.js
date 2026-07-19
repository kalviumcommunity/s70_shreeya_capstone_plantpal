const express = require('express')
const Plant = require('../models/Plant')
const User = require('../models/User')
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

router.get('/plants', async (req, res) => {
  try {
    const plants = await Plant.find().populate('user'); 
    res.status(200).json(plants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/users', async(req,res)=>{
  try{
    const users = await User.find();
    res.status(200).json(users)
  }
  catch(err){
    res.status(500).json({message : err.message})
  }
})

router.post('/createplant',async(req,res)=>{
    try{
        const {name,species,description,imageUrl,wateringFrequency,lastWatered,userId} = (req.body)
        const newPlant = new Plant({name,species,description,imageUrl,wateringFrequency,lastWatered, user : userId})
        const savedPlant = await newPlant.save()
        res.status(201).json(savedPlant)
    }
    catch(error){
        res.status(500).json({message : error.message})
    }
});

router.post('/newuser', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (err) {
    res.status(500).json({ message: err.message });
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
