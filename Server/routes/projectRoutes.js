// server/routes/projectRoutes.js

const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Public routes
router.get('/', projectController.getAllProjects);

// Admin routes (can later be protected by auth middleware)
router.post('/', projectController.createProject);
router.put('/:id', projectController.updateProject);
router.delete('/:id', projectController.deleteProject);

module.exports = router;