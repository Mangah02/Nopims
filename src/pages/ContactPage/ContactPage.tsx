import React, { useState } from 'react';
import { ContactForm } from '../../types';
import axios from 'axios';
import './ContactPage.css';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services = [
    'Cleaning Services',
    'Consultancy Services',
    'Data Collection & Research',
    'Technology Services',
    'General Inquiry'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Prepare form data for Web3Forms
      const formDataToSend = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service || 'General Inquiry',
        message: formData.message,
        access_key: 'e25526b0-7443-47fa-8961-d792e5280bc4'
      };

      // Send email using Web3Forms API
      const response = await axios.post('https://api.web3forms.com/submit', formDataToSend);
      
      console.log('Email sent successfully:', response.data);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: ''
      });
      
    } catch (error) {
      console.error('Failed to submit form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      details: ['nopimsyouthgroup@gmail.com']
    },
    {
      icon: '📞',
      title: 'Phone',
      details: ['+254 757 076 664']
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      details: ['+254 757 076 664', 'Available 24/7']
    },
    {
      icon: '📍',
      title: 'Office Location',
      details: ['Nyahururu', 'Laikipia, Kenya']
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
    { day: 'Emergency', hours: '24/7 Available' }
  ];

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="header-content">
            <h1 className="page-title">Contact Us</h1>
            <p className="page-subtitle">
              Get in touch with us for professional services, quotes, or any inquiries
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-header">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and your message will be sent directly to our email inbox.</p>
              </div>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+254 700 000 000"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service Interest</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className="form-message success">
                    ✅ Message sent successfully! We'll get back to you within 24 hours.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="form-message error">
                    ❌ Something went wrong. Please try again later.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <div className="info-header">
                <h2>Get in Touch</h2>
                <p>Multiple ways to reach us for your convenience</p>
              </div>

              <div className="contact-cards">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-card">
                    <div className="contact-icon">{info.icon}</div>
                    <div className="contact-details">
                      <h3>{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex}>{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="business-hours">
                <h3>Business Hours</h3>
                <div className="hours-list">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="hours-item">
                      <span className="hours-day">{schedule.day}</span>
                      <span className="hours-time">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="quick-actions">
                <h3>Quick Actions</h3>
                <div className="action-buttons">
                  <a
                    href="tel:+254757076664"
                    className="action-btn primary"
                  >
                    📞 Call Now
                  </a>
                  <a
                    href="https://wa.me/254757076664"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn whatsapp"
                  >
                    💬 WhatsApp
                  </a>
                  <a
                    href="mailto:nopimsyouthgroup@gmail.com"
                    className="action-btn email"
                  >
                    📧 Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions about our services</p>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What services do you offer?</h3>
              <p>
                We offer four main service categories: Cleaning Services, Consultancy Services, 
                Data Collection & Field Research, and Technology Services. Each category includes 
                multiple specialized services tailored to your needs.
              </p>
            </div>
            <div className="faq-item">
              <h3>How quickly can you respond to inquiries?</h3>
              <p>
                We typically respond to all inquiries within 24 hours during business days. 
                For urgent matters, you can reach us via phone or WhatsApp for immediate assistance.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you serve clients outside Nairobi?</h3>
              <p>
                Yes, we serve clients across Kenya and can arrange services in multiple counties. 
                Contact us to discuss your specific location requirements.
              </p>
            </div>
            <div className="faq-item">
              <h3>How do I get a quote for your services?</h3>
              <p>
                You can get a quote by filling out the contact form, calling us directly, 
                or sending us an email with your requirements. We'll provide a detailed quote 
                within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-header">
            <h2>Visit Our Office</h2>
            <p>Conveniently located in the heart of Nairobi's business district</p>
          </div>
          <div className="map-placeholder">
            <div className="map-content">
              <div className="map-icon">🗺️</div>
              <h3>Interactive Map</h3>
              <p>123 Business Center, Nairobi, Kenya</p>
              <p>Find us easily with Google Maps or Waze</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
