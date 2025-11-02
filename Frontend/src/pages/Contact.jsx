import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { sendContactEmail } from '../services/emailService';
import { toast} from "react-toastify";

const Contact = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    message: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendContactEmail(formData);
      toast.success('Message sent successfully!');
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
      setFormData({ fullName: '', message: '', email: '', phone: '' });
      setTimeout(() => navigate("/"), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex pt-[2cm] md:items-center lg:items-center justify-center p-2">
      <div className="h-fit bg-gradient-to-r from-blue-500 via-blue-400 to-black p-[6px] rounded-lg w-full max-w-md">
        <Form className="bg-neutral-800 p-5" onSubmit={handleSubmit}>

          <div className='text-center'>
            <h2 className='text-3xl font-bold text-blue-500'>Contact Me</h2>
          </div>

          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label className="text-white">Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your full name"
              className="bg-white text-black pl-3 w-full rounded"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="message">
            <Form.Label className="text-white">Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your message here"
              className="bg-white text-black pl-3 w-full rounded"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label className="text-white">Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              className="bg-white text-black pl-3 w-full rounded"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-7" controlId="phone">
            <Form.Label className="text-white">Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter your phone number"
              className="bg-white text-black pl-3 w-full rounded"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <div className="text-center text-white">
            <Button style={{ backgroundColor: 'blue' }} type="submit" disabled={loading}>
              {loading ? 'Sending message...' : 'Submit'}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Contact;