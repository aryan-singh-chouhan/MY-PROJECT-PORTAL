// server/controllers/clientController.js

const Client = require('../models/Client');

// Get all clients
exports.getAllClients = async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.json(clients);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch clients' });
  }
};

// Create a new client
exports.createClient = async (req, res) => {
  try {
    const { name, designation, description, imageUrl } = req.body;
    const newClient = new Client({ name, designation, description, imageUrl });
    await newClient.save();
    res.status(201).json(newClient);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create client' });
  }
};

// Update a client
exports.updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, designation, description, imageUrl } = req.body;

    const updatedClient = await Client.findByIdAndUpdate(
      id,
      { name, designation, description, imageUrl },
      { new: true }
    );

    if (!updatedClient) {
      return res.status(404).json({ error: 'Client not found' });
    }

    res.json(updatedClient);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update client' });
  }
};

// Delete a client
exports.deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedClient = await Client.findByIdAndDelete(id);

    if (!deletedClient) {
      return res.status(404).json({ error: 'Client not found' });
    }

    res.json({ message: 'Client deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete client' });
  }
};
