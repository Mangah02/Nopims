import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

const AboutPage: React.FC = () => {
  const values = [
    {
      title: 'Professional Excellence',
      description: 'We deliver the highest standards of quality and professionalism in every service we provide.',
      icon: '⭐'
    },
    {
      title: 'Community Impact',
      description: 'We are committed to creating positive change and sustainable development in the communities we serve.',
      icon: '🤝'
    },
    {
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical principles in all our business dealings.',
      icon: '🛡️'
    },
    {
      title: 'Innovation',
      description: 'We embrace creative solutions and modern approaches to solve complex challenges.',
      icon: '💡'
    },
    {
      title: 'Reliability',
      description: 'We consistently deliver on our promises and exceed client expectations.',
      icon: '✅'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of partnerships and working together towards common goals.',
      icon: '🤝'
    }
  ];

  const team = [
    {
      name: 'Hannar Wambui',
      role: ' CEO',
      experience: '5+ years experience in business consultancy and project management',
      expertise: 'Strategic Planning, Business Development'
    },
    {
      name: 'Peter Wambugu',
      role: 'Operations Director',
      experience: '3+ years in operations management and quality assurance',
      expertise: 'Process Optimization, Team Leadership'
    },
    {
      name: 'Joel manga',
      role: 'Technical Director',
      experience: '6+ years in IT solutions and digital transformation',
      expertise: 'Software Development, Systems Integration'
    },
    {
      name: 'Simon Chege',
      role: 'Client Relations Manager',
      experience: '4+ years in customer service and relationship management',
      expertise: 'Client Management, Service Delivery'
    }
  ];

  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="header-content">
            <h1 className="page-title">About Us</h1>
            <p className="page-subtitle">
              Learn about our journey, mission, and the team behind our success
            </p>
          </div>
        </div>
      </section>

      {/* About Introduction */}
      <section className="about-intro">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2>Who We Are</h2>
              <p>
                We are a dynamic self-help group dedicated to providing exceptional services to businesses, 
                government institutions, and NGOs. Founded on the principles of professionalism, integrity, 
                and community impact, we have grown to become a trusted partner for organizations seeking 
                reliable and innovative solutions.
              </p>
              <p>
                Our diverse team brings together expertise from various fields, enabling us to offer 
                comprehensive services that address the unique challenges faced by modern organizations. 
                We believe in the power of collaboration and are committed to delivering excellence in 
                every project we undertake.
              </p>
              <div className="intro-stats">
                <div className="stat-item">
                  <div className="stat-number">2020</div>
                  <div className="stat-label">Year Founded</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Team Members</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="intro-image">
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <div className="placeholder-icon">🏢</div>
                  <div className="placeholder-text">Our Team</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-item">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To empower organizations through professional services, innovative solutions, 
                and unwavering commitment to excellence, fostering sustainable growth and 
                positive community impact.
              </p>
            </div>
            <div className="mv-item">
              <div className="mv-icon">🔮</div>
              <h3>Our Vision</h3>
              <p>
                To be the leading self-help group recognized for transforming organizations 
                through exceptional service delivery, innovation, and community development 
                across all sectors we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide our actions and decisions
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Leadership Team</h2>
            <p className="section-subtitle">
              Meet the experienced professionals leading our organization
            </p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-avatar">
                  <div className="avatar-placeholder">
                    <span className="avatar-initials">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <div className="member-role">{member.role}</div>
                  <div className="member-experience">{member.experience}</div>
                  <div className="member-expertise">
                    <strong>Expertise:</strong> {member.expertise}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="community-impact">
        <div className="container">
          <div className="impact-content">
            <div className="impact-text">
              <h2>Community Impact</h2>
              <p>
                As a self-help group, we are deeply committed to creating positive change in the communities 
                we serve. We believe that successful businesses and organizations have a responsibility to 
                contribute to societal development and sustainable growth.
              </p>
              <p>
                Through our various initiatives and partnerships, we have helped create employment opportunities, 
                supported local businesses, and contributed to community development projects. Our approach 
                combines professional service delivery with social responsibility, ensuring that our success 
                translates into broader community benefits.
              </p>
              <div className="impact-stats">
                <div className="impact-stat">
                  <div className="impact-number">1000+</div>
                  <div className="impact-label">Jobs Created</div>
                </div>
                <div className="impact-stat">
                  <div className="impact-number">50+</div>
                  <div className="impact-label">Community Projects</div>
                </div>
                <div className="impact-stat">
                  <div className="impact-number">$2M+</div>
                  <div className="impact-label">Economic Impact</div>
                </div>
              </div>
            </div>
            <div className="impact-visual">
              <div className="impact-icon-large">🌍</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Join Our Journey</h2>
            <p>
              Partner with us and experience the difference that professionalism, integrity, 
              and commitment can make for your organization.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <Link to="/services" className="btn btn-outline">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
