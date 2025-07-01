const Project = require('../models/Project');

// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
};

// Create a new project
exports.createProject = async (req, res) => {
  try {
    const { name, description, imageUrl } = req.body;
    const newProject = new Project({ name, description, imageUrl });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create project' });
  }
};

// Update a project
exports.updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, imageUrl } = req.body;

    const updatedProject = await Project.findByIdAndUpdate(
      id,
      { name, description, imageUrl },
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json(updatedProject);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update project' });
  }
};

// Delete a project
exports.deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json({ message: 'Project deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete project' });
  }
};
