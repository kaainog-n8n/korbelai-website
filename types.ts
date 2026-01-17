export interface NavItem {
  label: string;
  href: string;
}

export interface CaseStudy {
  id: number;
  client: string;
  testimonial: string;
  role: string;
  image: string;
  metric?: string;
}

export interface Project {
  id: number;
  title: string;
  type: 'automation' | 'website';
  description: string;
  image: string;
  tags: string[];
}

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
