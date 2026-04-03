export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  quote: string;
  rating: number;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  outcome: string;
  image?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
}
