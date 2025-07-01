// server/routes/clientRoutes.js

const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

// Public route
router.get('/', clientController.getAllClients);

// Admin routes (can be protected later)
router.post('/', clientController.createClient);
router.put('/:id', clientController.updateClient);
router.delete('/:id', clientController.deleteClient);

module.exports = router;
