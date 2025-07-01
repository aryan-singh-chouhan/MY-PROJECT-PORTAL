// server/controllers/subscriberController.js

const Subscriber = require('../models/Subscriber');

// Subscribe to newsletter
exports.subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if already subscribed
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(400).json({ error: 'Email is already subscribed' });
    }

    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();
    res.status(201).json({ message: 'Subscribed successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Subscription failed' });
  }
};

// Get all subscribers (for admin)
exports.getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find().sort({ subscribedAt: -1 });
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch subscribers' });
  }
};
