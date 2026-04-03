import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../components/ServiceCard';
import { Service } from '../../types';
import './ServicesPage.css';

const ServicesPage: React.FC = () => {
  const services: Service[] = [
    {
      id: '1',
      title: 'Cleaning Services',
      description: 'Professional cleaning solutions for residential, commercial, and office spaces. We use eco-friendly products and modern equipment to ensure pristine environments.',
      icon: '🧹',
      features: [
        'Residential House Cleaning',
        'Commercial Office Cleaning',
        'Industrial Facility Maintenance',
        'Deep Cleaning and Sanitization',
        'Carpet and Upholstery Cleaning',
        'Window Cleaning Services',
        'Post-Construction Cleaning',
        'Eco-friendly Cleaning Products',
        'Regular Maintenance Plans',
        'Emergency Cleaning Services'
      ]
    },
    {
      id: '2',
      title: 'Consultancy Services',
      description: 'Expert business advisory and project management services to help organizations optimize operations, implement strategies, and achieve sustainable growth.',
      icon: '💼',
      features: [
        'Business Strategy Development',
        'Project Management Support',
        'Financial Planning and Advisory',
        'Process Optimization',
        'Risk Assessment and Management',
        'Organizational Development',
        'Market Research and Analysis',
        'Compliance and Regulatory Support',
        'Performance Improvement',
        'Change Management Consulting'
      ]
    },
    {
      id: '3',
      title: 'Data Collection & Field Research',
      description: 'Comprehensive data collection and field research services providing accurate insights for informed decision-making and strategic planning.',
      icon: '📊',
      features: [
        'Market Research Surveys',
        'Field Data Collection',
        'Quantitative and Qualitative Research',
        'Data Analysis and Interpretation',
        'Report Generation and Visualization',
        'Impact Assessment Studies',
        'Baseline and Endline Surveys',
        'Focus Group Discussions',
        'Key Informant Interviews',
        'Quality Assurance and Validation'
      ]
    },
    {
      id: '4',
      title: 'Technology Services',
      description: 'Complete IT solutions including support, software development, and digital transformation to modernize your organization\'s technology infrastructure.',
      icon: '💻',
      features: [
        'IT Support and Maintenance',
        'Custom Software Development',
        'Web and Mobile App Development',
        'Network Infrastructure Setup',
        'Cybersecurity Solutions',
        'Cloud Services Integration',
        'Database Management',
        'Digital Transformation Consulting',
        'Technology Training and Support',
        'Hardware and Software Procurement'
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="header-content">
            <h1 className="page-title">Our Services</h1>
            <p className="page-subtitle">
              Comprehensive professional services designed to meet the diverse needs of businesses, 
              government institutions, and NGOs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-intro">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2>Professional Services You Can Trust</h2>
              <p>
                With over a decade of experience, we deliver excellence across four core service areas. 
                Our team of skilled professionals is committed to providing solutions that drive success 
                and create lasting value for our clients.
              </p>
              <div className="intro-stats">
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Support Available</div>
                </div>
              </div>
            </div>
            <div className="intro-visual">
              <div className="service-icons">
                <div className="service-icon-large">🧹</div>
                <div className="service-icon-large">💼</div>
                <div className="service-icon-large">📊</div>
                <div className="service-icon-large">💻</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="services-detailed">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Service Categories</h2>
            <p className="section-subtitle">
              Explore our comprehensive range of professional services
            </p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="service-process">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How We Work</h2>
            <p className="section-subtitle">
              Our proven process ensures successful project delivery
            </p>
          </div>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>We begin by understanding your specific needs and requirements through detailed consultation.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Planning</h3>
              <p>Our team develops a comprehensive plan tailored to your objectives and timeline.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Implementation</h3>
              <p>We execute the plan with precision, maintaining clear communication throughout the process.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Review & Support</h3>
              <p>We ensure quality delivery and provide ongoing support to maintain optimal results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Contact us today for a free consultation and quote tailored to your specific needs.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Get a Quote
              </Link>
              <Link to="/projects" className="btn btn-outline">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
