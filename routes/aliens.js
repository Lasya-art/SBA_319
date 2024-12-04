const express = require('express')
const router = express.Router()
const Alien = require('../models/aliens')


router.get('/', async(req,res) => {
    try{
           const aliens = await Alien.find()
           res.json(aliens)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const alien = await Alien.findById(id); // Try to find the alien by its ID

        if (alien) {
            res.status(200).json(alien); 
        } else {
            res.status(404).json({ message: "Alien not found in the database." }); 
        }
    } catch (err) {
        
        res.status(500).json({ message: "An error occurred while searching for the alien.", error: err.message });
    }
});

router.post('/', async(req,res) => {
    const alien = new Alien({
        
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub,
        channel: req.body.channel,
        subscriber: req.body.subscriber,
        country: req.body.country,
        comments: req.body.comments
    });
    

    try{
        const a1 =  await alien.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const alien = await Alien.findById(req.params.id) 
        alien.name = req.body.name
        
        const a1 = await alien.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})


router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        // Attempt to delete the alien by ID
        const deletedAlien = await Alien.findByIdAndDelete(id);

        if (deletedAlien) {
            res.status(200).json({ message: "Alien deleted successfully.", deletedAlien });
        } else {
            res.status(404).json({ message: "Alien not found in the database." });
        }
    } catch (err) {
        // Handle errors like invalid ID format
        res.status(500).json({ message: "An error occurred while deleting the alien.", error: err.message });
    }
});

module.exports = router