// server/routes/contactRoutes.js

const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Public route for contact form submission
router.post('/', contactController.submitContact);

// Admin route to fetch all contact submissions
router.get('/', contactController.getAllContacts);

module.exports = router;