import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { sendHiringForm } from '../services/emailService';

const Hiring = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    jobRole: '',
    workType: '',
    jobType: '',
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
      await sendHiringForm(formData);
      alert('Hiring request submitted successfully!');
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Failed to submit. Please try again.');
    } finally {
      setLoading(false);
      setFormData({
        fullName: '',
        companyName: '',
        jobRole: '',
        workType: '',
        jobType: '',
        email: '',
        phone: '',
      });
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex pt-[2cm] lg:pt-0 md:items-center lg:items-center justify-center p-2">
      <div className="h-fit bg-gradient-to-r from-blue-500 via-blue-400 to-black p-[6px] rounded-lg w-full max-w-md">
        <Form className="bg-neutral-800 p-5" onSubmit={handleSubmit}>
          
          <div className='flex justify-center mb-4'>
            <h2 className='text-3xl font-bold text-blue-500'>Hire Me</h2>
          </div>
          
          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label className="text-white">Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your full name"
              className="bg-white text-black pl-3 w-full rounded"
              required
              value={formData.fullName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="companyName">
            <Form.Label className="text-white">Company Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter company name"
              className="bg-white text-black pl-3 w-full rounded"
              required
              value={formData.companyName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="jobRole">
            <Form.Label className="text-white">Job Role</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter job role"
              className="bg-white text-black pl-3 w-full rounded"
              required
              value={formData.jobRole}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="workType">
            <Form.Label className="text-white">Work Type</Form.Label>
            <Form.Select
              className="bg-white text-black pl-3 w-full rounded"
              required
              value={formData.workType}
              onChange={handleChange}
            >
              <option value="">Select work type</option>
              <option value="remote">Remote</option>
              <option value="on-site">On-site</option>
              <option value="hybrid">Hybrid</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="jobType">
            <Form.Label className="text-white">Job Type</Form.Label>
            <Form.Select
              className="bg-white text-black pl-3 w-full rounded"
              required
              value={formData.jobType}
              onChange={handleChange}
            >
              <option value="">Select job type</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label className="text-white">Email Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your email"
              className="bg-white text-black pl-3 w-full rounded"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-7" controlId="phone">
            <Form.Label className="text-white">Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your phone number"
              className="bg-white text-black pl-3 w-full rounded"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </Form.Group>

          <div className="text-center">
            <Button style={{ backgroundColor: 'blue' }} type="submit" disabled={loading}>
              {loading? 'Sending message... ' : 'Submit'}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Hiring;