


const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
    
    email: {
        type: String,
        required: true,
        unique: true // Ensures each email is unique
    },
    age: {
        type: Number,
        required: true
    },
    alienId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Alien', // Reference to the Alien collection
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);
