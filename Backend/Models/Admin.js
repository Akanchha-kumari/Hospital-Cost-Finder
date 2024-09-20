const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, 'Name is required'], 
        trim: true 
    },
    email: { 
        type: String, 
        required: [true, 'Email is required'], 
        unique: true, 
        match: [/.+\@.+\..+/, 'Please enter a valid email address']
    },
    age: { 
        type: Number, 
        required: [true, 'Age is required'], 
        min: [18, 'Admin must be at least 18 years old'] 
    },
    password: { 
        type: String, 
        required: [true, 'Password is required'], 
        minlength: [6, 'Password must be at least 6 characters long'] 
    }
}, { timestamps: true });
const AdminModel = mongoose.model('Admin', AdminSchema);

module.exports = AdminModel;
