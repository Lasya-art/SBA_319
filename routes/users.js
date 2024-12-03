const express = require('express');
const router = express.Router();
const User = require('../models/users');

// Create a User
router.post('/', async (req, res) => {
    const user = new User({
        
        email: req.body.email,
        age: req.body.age,
        alienId: req.body.alienId // The ID of the alien user is associated with
    });

    try {
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get All Users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
