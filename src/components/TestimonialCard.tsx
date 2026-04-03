import React from 'react';
import { Testimonial } from '../types';
import './TestimonialCard.css';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <div className="testimonial-quote">
          "{testimonial.quote}"
        </div>
        <div className="testimonial-rating">
          {renderStars(testimonial.rating)}
        </div>
      </div>
      <div className="testimonial-author">
        <div className="author-info">
          <div className="author-name">{testimonial.name}</div>
          <div className="author-company">{testimonial.company}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
