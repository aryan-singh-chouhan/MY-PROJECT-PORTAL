// server/controllers/contactController.js

const Contact = require('../models/Contact');

// Submit contact form
exports.submitContact = async (req, res) => {
  try {
    const { fullName, email, mobile, city } = req.body;
    const newContact = new Contact({ fullName, email, mobile, city });
    await newContact.save();
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
};

// Get all contact submissions (for admin)
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ submittedAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch contact submissions' });
  }
};
