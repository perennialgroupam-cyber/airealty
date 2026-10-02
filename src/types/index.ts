export type ProjectCategory = 'all' | 'land' | 'sra' | 'redevelopment';

export interface ProjectItem {
  id: string;
  name: string;
  location: string;
  category: 'land' | 'sra' | 'redevelopment';
  categoryLabel: string;
  status: string;
  description: string;
  image: string;
  metricsPlaceholder: string;
  isPlaceholderNotice: boolean;
}

export interface StatItem {
  number: string;
  label: string;
  subtext: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables?: string[];
}

export type InterestType = 
  | 'Land Acquisition & Development'
  | 'SRA Project Development'
  | 'Society Redevelopment'
  | 'Strategic Partnership'
  | 'Other';

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  interest: InterestType;
  message: string;
  audienceType?: 'Landowner' | 'Housing Society' | 'Development Partner';
}
