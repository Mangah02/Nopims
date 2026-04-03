import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../types';
import './ProjectsPage.css';

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: '1',
      title: 'Ministry of Health Office Cleaning',
      category: 'cleaning',
      description: 'Comprehensive cleaning and sanitization services for the main government health facility, ensuring a safe and hygienic environment for staff and visitors.',
      outcome: 'Improved facility hygiene standards by 95%, reduced health-related complaints by 80%, and established a regular maintenance schedule.',
      image: '🏥'
    },
    {
      id: '2',
      title: 'Tech Startup Business Consultancy',
      category: 'consultancy',
      description: 'Strategic business planning and operational support for a growing technology company, including market analysis and growth strategy development.',
      outcome: 'Client achieved 150% revenue growth within 12 months, successfully expanded to 3 new markets, and secured Series A funding.',
      image: '💼'
    },
    {
      id: '3',
      title: 'Agricultural Research Data Collection',
      category: 'research',
      description: 'Large-scale field research project collecting agricultural data across 5 counties, involving surveys and data analysis for policy development.',
      outcome: 'Collected and analyzed data from 10,000+ farmers, provided insights that influenced national agricultural policy, and created a comprehensive database.',
      image: '📊'
    },
    {
      id: '4',
      title: 'Bank IT Infrastructure Upgrade',
      category: 'technology',
      description: 'Complete IT infrastructure modernization for a regional bank, including network upgrade, security implementation, and staff training.',
      outcome: 'Improved system performance by 70%, enhanced security protocols preventing cyber threats, and reduced downtime by 90%.',
      image: '💻'
    },
    {
      id: '5',
      title: 'NGO Community Impact Assessment',
      category: 'research',
      description: 'Comprehensive impact assessment study for an international NGO working on community development projects across multiple regions.',
      outcome: 'Provided detailed impact reports covering 50+ projects, identified key success factors, and recommended strategies for program improvement.',
      image: '📋'
    },
    {
      id: '6',
      title: 'Corporate Office Deep Cleaning',
      category: 'cleaning',
      description: 'Specialized deep cleaning service for a multinational corporation headquarters, including carpet cleaning, window washing, and sanitization.',
      outcome: 'Transformed office environment, improved employee satisfaction scores, and established a quarterly deep cleaning schedule.',
      image: '🏢'
    },
    {
      id: '7',
      title: 'Manufacturing Process Optimization',
      category: 'consultancy',
      description: 'Business process reengineering for a manufacturing company to improve efficiency, reduce waste, and optimize production workflows.',
      outcome: 'Reduced operational costs by 30%, increased production efficiency by 45%, and improved quality control metrics.',
      image: '🏭'
    },
    {
      id: '8',
      title: 'E-commerce Platform Development',
      category: 'technology',
      description: 'Custom e-commerce solution for a retail business, including website development, payment integration, and inventory management system.',
      outcome: 'Launched successful online platform generating $500K+ in sales within 6 months, with 98% customer satisfaction rate.',
      image: '🛒'
    },
    {
      id: '9',
      title: 'Educational Facility Maintenance',
      category: 'cleaning',
      description: 'Ongoing cleaning and maintenance services for a large educational institution serving 5,000+ students across multiple buildings.',
      outcome: 'Maintained high hygiene standards, reduced facility maintenance costs by 25%, and improved overall campus environment.',
      image: '🏫'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'cleaning', label: 'Cleaning Services' },
    { value: 'consultancy', label: 'Consultancy' },
    { value: 'research', label: 'Data Collection & Research' },
    { value: 'technology', label: 'Technology Services' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'cleaning': return '🧹';
      case 'consultancy': return '💼';
      case 'research': return '📊';
      case 'technology': return '💻';
      default: return '📁';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'cleaning': return '#48bb78';
      case 'consultancy': return '#3182ce';
      case 'research': return '#805ad5';
      case 'technology': return '#ed8936';
      default: return '#4a5568';
    }
  };

  return (
    <div className="projects-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="header-content">
            <h1 className="page-title">Our Projects</h1>
            <p className="page-subtitle">
              Explore our portfolio of successful projects and the impact we've created for our clients
            </p>
          </div>
        </div>
      </section>

      {/* Projects Introduction */}
      <section className="projects-intro">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2>Proven Track Record of Success</h2>
              <p>
                Over the years, we have successfully completed numerous projects across various sectors, 
                delivering exceptional results and creating lasting value for our clients. Each project 
                represents our commitment to excellence, innovation, and client satisfaction.
              </p>
              <div className="intro-stats">
                <div className="stat-item">
                  <div className="stat-number">100+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">95%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Industries Served</div>
                </div>
              </div>
            </div>
            <div className="intro-visual">
              <div className="project-icons">
                <div className="project-icon-large">🏆</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-content">
            <h3>Filter by Category</h3>
            <div className="filter-buttons">
              {categories.map((category) => (
                <button
                  key={category.value}
                  className={`filter-btn ${filter === category.value ? 'active' : ''}`}
                  onClick={() => setFilter(category.value)}
                >
                  <span className="filter-icon">{getCategoryIcon(category.value)}</span>
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid-section">
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <div className="project-image">
                    <span className="project-icon">{project.image}</span>
                  </div>
                  <div className="project-category" style={{ color: getCategoryColor(project.category) }}>
                    <span className="category-icon">{getCategoryIcon(project.category)}</span>
                    {categories.find(c => c.value === project.category)?.label}
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-outcome">
                    <h4>Key Outcomes:</h4>
                    <p>{project.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Success Metrics */}
      <section className="success-metrics">
        <div className="container">
          <div className="metrics-content">
            <h2>Our Impact by Numbers</h2>
            <div className="metrics-grid">
              <div className="metric-item">
                <div className="metric-number">$10M+</div>
                <div className="metric-label">Economic Value Created</div>
              </div>
              <div className="metric-item">
                <div className="metric-number">50,000+</div>
                <div className="metric-label">People Impacted</div>
              </div>
              <div className="metric-item">
                <div className="metric-number">200+</div>
                <div className="metric-label">Partner Organizations</div>
              </div>
              <div className="metric-item">
                <div className="metric-number">25+</div>
                <div className="metric-label">Counties Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>
              Let us help you achieve your goals with our professional services and proven track record of success.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Start Your Project
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

export default ProjectsPage;
