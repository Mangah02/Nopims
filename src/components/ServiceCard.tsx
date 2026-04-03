import React from 'react';
import { Service } from '../types';
import './ServiceCard.css';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="service-card">
      <div className="service-icon">
        <span className="icon">{service.icon}</span>
      </div>
      <div className="service-content">
        <h3 className="service-title">{service.title}</h3>
        <p className="service-description">{service.description}</p>
        <ul className="service-features">
          {service.features.map((feature, index) => (
            <li key={index} className="feature-item">
              <span className="check-icon">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
