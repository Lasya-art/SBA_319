const mongoose = require('mongoose');

// Comment Schema
const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    
    
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', // Reference to the User collection
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Comment', commentSchema);
