const express = require('express');
const router = express.Router();
const subscriberController = require('../controllers/subscriberController');

// Public route to subscribe
router.post('/', subscriberController.subscribe);

// Admin route to get all subscribers
router.get('/', subscriberController.getAllSubscribers);

module.exports = router;