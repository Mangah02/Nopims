import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../components/ServiceCard';
import TestimonialCard from '../../components/TestimonialCard';
import { Service, Testimonial } from '../../types';
import './HomePage.css';

const HomePage: React.FC = () => {
  const services: Service[] = [
    {
      id: '1',
      title: 'Cleaning Services',
      description: 'Professional residential, commercial, and office cleaning solutions tailored to your needs.',
      icon: '🧹',
      features: [
        'Residential Cleaning',
        'Commercial Cleaning',
        'Office Maintenance',
        'Deep Cleaning Services',
        'Eco-friendly Products'
      ]
    },
    {
      id: '2',
      title: 'Consultancy Services',
      description: 'Expert business support, advisory services, and project assistance to help you grow.',
      icon: '💼',
      features: [
        'Business Strategy',
        'Project Management',
        'Financial Advisory',
        'Process Optimization',
        'Risk Assessment'
      ]
    },
    {
      id: '3',
      title: 'Data Collection & Research',
      description: 'Comprehensive field research and data collection services for informed decision-making.',
      icon: '📊',
      features: [
        'Market Research',
        'Field Surveys',
        'Data Analysis',
        'Report Generation',
        'Quality Assurance'
      ]
    },
    {
      id: '4',
      title: 'Technology Services',
      description: 'IT support, software solutions, and digital transformation for modern businesses.',
      icon: '💻',
      features: [
        'IT Support & Maintenance',
        'Software Development',
        'Digital Solutions',
        'Network Security',
        'Cloud Services'
      ]
    }
  ];

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      company: 'Ministry of Health',
      quote: 'Their consultancy services transformed our operations. Professional, reliable, and always delivering beyond expectations.',
      rating: 5
    },
    {
      id: '2',
      name: 'Michael Chen',
      company: 'TechStart Inc.',
      quote: 'Outstanding technology support and innovative solutions. They helped us modernize our entire infrastructure.',
      rating: 5
    },
    {
      id: '3',
      name: 'Grace Mwangi',
      company: 'Green Foundation NGO',
      quote: 'Their data collection services provided crucial insights for our community projects. Highly recommended!',
      rating: 4
    }
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Excellence in Service Delivery for Your Organization
              </h1>
              <p className="hero-description">
                Professional self-help group providing comprehensive cleaning, consultancy, 
                data collection, and technology services to businesses, government institutions, and NGOs.
              </p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn btn-primary">
                  Get a Quote
                </Link>
                <Link to="/services" className="btn btn-secondary">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-visual">
                <div className="visual-item visual-1">🧹</div>
                <div className="visual-item visual-2">💼</div>
                <div className="visual-item visual-3">📊</div>
                <div className="visual-item visual-4">💻</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive solutions tailored to meet your organization's unique needs
            </p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="services-cta">
            <Link to="/services" className="btn btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="trust-indicators">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-number">50+</div>
              <div className="trust-label">Happy Clients</div>
            </div>
            <div className="trust-item">
              <div className="trust-number">4+</div>
              <div className="trust-label">Years Experience</div>
            </div>
            <div className="trust-item">
              <div className="trust-number">100+</div>
              <div className="trust-label">Projects Completed</div>
            </div>
            <div className="trust-item">
              <div className="trust-number">24/7</div>
              <div className="trust-label">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Trusted by leading organizations across various sectors
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Organization?</h2>
            <p className="cta-description">
              Let us help you achieve your goals with our professional services and expertise.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">
                Contact Us Today
              </Link>
              <Link to="/projects" className="btn btn-outline btn-large">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
