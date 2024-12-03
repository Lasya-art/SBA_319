const mongoose = require('mongoose')


const alienSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'], 
        minlength: [3, 'Name must be at least 3 characters long'], 
        maxlength: [50, 'Name cannot exceed 50 characters'] 
    },
    
    tech: {
        type: String,
        required: [true, 'Technology is required'],
        enum: ['JavaScript', 'Python', 'Java', 'C++', 'Other'], 
    },
    
    sub: {
        type: Boolean, 
        required: true, 
        default: false 
    },
    
    channel: {
        type: String, 
        required: true 
    },
    // Number of subscribers to the channel
    subscriber: {
        type: Number, 
        required: false, 
        min: 0, 
        default: 0 
    },
    // Country of origin
    country: {
        type: String, 
        required: false, 
        default: "Unknown" 
    }
});
module.exports = mongoose.model('Alien',alienSchema)


