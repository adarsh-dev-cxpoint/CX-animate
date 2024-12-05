import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/email';

interface FormData {
  name: string;
  email: string;
  phone: string;
  interestedIn: string[];
  licenseType: string;
  projectDetails: string;
}

export default function ContactFormReact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    interestedIn: [],
    licenseType: '',
    projectDetails: ''
  });

  const interestOptions = ['AX', 'BX', 'CX', 'DX'];
  const licenseOptions = ['Free Trial', 'CX1', 'CX2'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interestedIn: prev.interestedIn.includes(interest)
        ? prev.interestedIn.filter(item => item !== interest)
        : [...prev.interestedIn, interest]
    }));
  };

  const handleLicenseSelect = (license: string) => {
    setFormData(prev => ({ ...prev, licenseType: license }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        interested_in: formData.interestedIn.join(', '),
        license_type: formData.licenseType,
        project_details: formData.projectDetails
      };
      const result = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      );
      if (result.status === 200) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          interestedIn: [],
          licenseType: '',
          projectDetails: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
    }
  };

  return (
    <>
      <section className="contact-section" id="contact">
        <div className="container">
          <h2 className="akira">Ready to stand out and grow?</h2>
          <p className="text-gray-500 akira font-semibold">
            Share your goals and ideas with us, and we'll get back to you within 24-48 hours. We're excited to dive into your project and discuss how we can help bring your vision to life. Let's get started on your path to success!
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-group">
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="form-group">
              <label>What are you interested in?</label>
              <div className="button-group">
                {interestOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleInterestToggle(option)}
                    className={formData.interestedIn.includes(option) ? 'active' : ''}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label>Select your License type</label>
              <div className="button-group">
                {licenseOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleLicenseSelect(option)}
                    className={formData.licenseType === option ? 'active' : ''}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="projectDetails">Project Details</label>
              <textarea
                name="projectDetails"
                id="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                placeholder="Briefly describe your project or needs"
                required
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className={`submit-button ${status === 'sending' ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {status === 'sending' ? 'Sending...' : 'Submit Request'}
            </button>
            {status === 'success' && (
              <p className="text-green-600 font-medium text-center p-3">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 font-medium text-center p-3">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
        <style>
          {`
            .contact-section {
              padding: 4rem 0;
              background: #fafafa;
            }
            .container {
              max-width: 768px;
              margin: 0 auto;
              padding: 0 1.5rem;
            }
            .form-group {
              margin-bottom: 1.5rem;
            }
            .form-group label {
              display: block;
              margin-bottom: 0.5rem;
              font-weight: 500;
              color: #1a1a1a;
            }
            .form-group input,
            .form-group textarea {
              width: 100%;
              padding: 0.75rem 1rem;
              border: 1px solid #e5e7eb;
              border-radius: 8px;
              background: white;
              font-size: 1rem;
              transition: all 0.2s ease;
            }
            .form-group input:focus,
            .form-group textarea:focus {
              outline: none;
              border-color: #ff6d00;
              box-shadow: 0 0 0 3px rgba(255, 109, 0, 0.1);
            }
            .button-group {
              display: flex;
              flex-wrap: wrap;
              gap: 0.75rem;
            }
            .button-group button {
              padding: 0.6rem 1.2rem;
              border: 2px solid #e5e7eb;
              border-radius: 25px;
              background: white;
              font-size: 0.9rem;
              font-weight: 500;
              color: #4b5563;
              transition: all 0.2s ease;
            }
            .button-group button:hover {
              border-color: #ff6d00;
              color: #ff6d00;
            }
            .button-group button.active {
              background-color: #ff6d00;
              border-color: #ff6d00;
              color: white;
            }
            .submit-button {
              background-color: #ff6d00;
              color: white;
              font-weight: 600;
              padding: 1rem 2rem;
              border-radius: 8px;
              cursor: pointer;
              font-size: 1rem;
              width: 100%;
              border: 2px solid #ff6d00;
              transition: all 0.2s ease;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .submit-button:hover:not(:disabled) {
              background-color: #ff8533;
              border-color: #ff8533;
              transform: translateY(-1px);
              box-shadow: 0 4px 6px rgba(255, 109, 0, 0.1);
            }
            .submit-button:disabled {
              opacity: 0.7;
              cursor: not-allowed;
            }
            @media (min-width: 640px) {
              .submit-button {
                width: auto;
                min-width: 200px;
              }
            }
            .text-green-600 {
              background-color: #dcfce7;
              color: #16a34a;
              border-radius: 6px;
              padding: 1rem;
            }
            .text-red-600 {
              background-color: #fee2e2;
              color: #dc2626;
              border-radius: 6px;
              padding: 1rem;
            }
          `}
        </style>
      </section>
    </>
  );
}