// src/components/ContactForm.jsx

import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    city: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');

    try {
      await axios.post('http://localhost:5000/api/contacts', formData);
      setStatus('success');
      setFormData({ fullName: '', email: '', mobile: '', city: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-white py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
          {status === 'success' && (
            <p className="text-green-600 text-sm text-center">Thank you! We’ll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-sm text-center">Something went wrong. Try again later.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
