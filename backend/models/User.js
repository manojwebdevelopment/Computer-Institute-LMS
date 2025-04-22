const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,  // First name is required
        trim: true
    },
    middleName: {
        type: String,
        trim: true,  // Middle name is optional
    },
    lastName: {
        type: String,
        required: true,  // Last name is required
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,  // Ensures email is unique
        lowercase: true,
        trim: true
    },
    mobileNumber: {
        type: String,
        required: true,  // Mobile number is required
        unique: true,  // Ensure the mobile number is unique
        match: [/^\d{10}$/, 'Please enter a valid 10-digit mobile number'],  // Match 10-digit mobile number
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'teacher', 'student', 'staff'],  // Restrict role to specific values
        default: 'student'
    },
    registrationId: {
        type: String,
        unique: true,  // Unique registration ID for each user
    },
    dateJoined: {
        type: Date,
        default: Date.now
    }
},{timestamps: true});  // Automatically manage createdAt and updatedAt timestamps

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
