const express = require('express');
const { registerUser } = require('../controllers/userController'); 
const router = express.Router();

// Route for User Registration
router.post('/register', registerUser);

module.exports = router;
