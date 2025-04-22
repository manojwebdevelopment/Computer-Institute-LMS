const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Controller for User Registration
const registerUser = async (req, res) => {
    const { firstName, middleName, lastName, email, mobileNumber, password, role, registrationId } = req.body;
    console.log("body-data",req.body);
    
    try {
        // Check if the email already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists with this email' });
        }

        // Check if the mobile number already exists
        user = await User.findOne({ mobileNumber });
        if (user) {
            return res.status(400).json({ message: 'User already exists with this mobile number' });
        }

        // Check if the registration ID already exists
        user = await User.findOne({ registrationId });
        if (user) {
            return res.status(400).json({ message: 'Registration ID already exists' });
        }

        // Create new user instance with provided registrationId
        user = new User({
            firstName,
            middleName,
            lastName,
            email,
            mobileNumber,
            password,
            role,
            registrationId, // Use the registrationId provided by admin
        });

        // Hash the password before saving to the database
        const salt = await bcrypt.genSalt(10); // Generate a salt with 10 rounds
        user.password = await bcrypt.hash(password, salt); // Hash the password

        // Save the user to the database
        await user.save();

        // Send response back
        res.status(201).json({
            message: 'User registered successfully!',
            user: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role,
                registrationId: user.registrationId
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { registerUser };
