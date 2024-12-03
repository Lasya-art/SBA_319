const express = require('express');
const router = express.Router();
const Comment = require('../models/comments');
const User = require('../models/users');

// Create a Comment
router.post('/', async (req, res) => {
    const comment = new Comment({
        text: req.body.text,
     alienId: req.body.alienId, 
        userId: req.body.userId  // Link to the User collection
    });

    try {
        const savedComment = await comment.save();
        res.status(201).json(savedComment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


router.get('/:alienId', async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.alienId }).populate('userId', 'name email');
        res.status(200).json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
