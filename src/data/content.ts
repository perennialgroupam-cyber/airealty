import type { ProjectItem, ProcessStep, StatItem } from '../types';

export const BRAND = {
  name: 'AI Realty',
  legalNotice: 'A Perennial Group Company • Est. 1996',
  tagline: 'From land to landmark.',
  secondaryTagline: 'Carried through from paperwork to possession.',
  slogan: 'Building Your Reality — The Smart Path to Real Estate',
  visionSlogan: 'Smarter Living. Better Investing.',
  contractorBadge: 'Licensed & Insured General Contractor',
  subtagline: 'Strategic real estate solutions across land acquisition, SRA projects and redevelopment.',
  groupName: 'Perennial Group',
  groupFounded: '1996',
  disclaimer: 'Figures, claims, and client references are based on company-provided information.',
  contact: {
    phone: '+91 (022) [To be provided by client]',
    phoneDisplay: '+91 22 [Client Number Placeholder]',
    email: 'advisory@airealty.in',
    address: 'Executive Suites, Commercial District (BKC / Lower Parel), Mumbai, Maharashtra 400051 [Official address to be provided by client]',
    hours: 'Monday – Saturday: 10:00 AM – 7:00 PM IST',
    whatsappNumber: '+919999999999',
  },
  assets: {
    logoOfficial: '/images/client/logo-official.jpeg',
    leaderMain: '/images/client/leader-portrait-main.jpeg',
    leaderBlueprint: '/images/client/leader-portrait-blueprint.jpeg',
    leaderSite: '/images/client/leader-construction-site.jpeg',
    leaderExecutive: '/images/client/leader-executive-penthouse.jpeg',
    brandGoldCard: '/images/client/brand-overview-gold.jpeg',
    brandDarkCard: '/images/client/brand-overview-dark.jpeg',
    brandPoster: '/images/client/brand-possession-poster.jpeg',
  }
};

export const STATS: StatItem[] = [
  {
    number: '1996',
    label: 'Group Legacy',
    subtext: 'Decades of foundational construction and development background through Perennial Group.'
  },
  {
    number: '1000+',
    label: 'Satisfied Customers',
    subtext: 'Homeowners, society members, and corporate clients engaged across group history.'
  },
  {
    number: '3',
    label: 'Core Business Verticals',
    subtext: 'Dedicated focus on Land Acquisition, SRA Initiatives, and Society Redevelopment.'
  },
  {
    number: 'Mumbai',
    label: 'Project Focus',
    subtext: 'Specialized focus on high-potential urban corridors and metropolitan redevelopment.'
  }
];

export const EXPERTISE_CARDS = [
  {
    id: 'land',
    number: '01',
    category: 'LAND',
    title: 'Land Acquisition & Development',
    description: 'Acquisition and sale of strategic land parcels with a focus on development potential, regulatory clearance, and commercial viability.',
    clientQuote: 'Deal with Land — Identifying and structuring high-potential parcels.',
    highlights: [
      'Acquisition and sale of land parcels',
      'Title scrutiny & regulatory due diligence',
      'Direct landowner & investor facilitation'
    ],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    link: '#land-section'
  },
  {
    id: 'sra',
    number: '02',
    category: 'SRA',
    title: 'SRA Project Development',
    description: 'Specialized Slum Rehabilitation Authority projects, transforming lives through community development, stakeholder consensus, and disciplined delivery.',
    clientQuote: 'Specialized Slum Rehabilitation Authority projects transforming lives through community development.',
    highlights: [
      'Slum dweller consensus & biometric coordination',
      'Statutory compliance & transparent documentation',
      'Rehabilitation & high-grade sale-component planning'
    ],
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1200&q=80',
    link: '#sra-section'
  },
  {
    id: 'redevelopment',
    number: '03',
    category: 'REDEVELOPMENT',
    title: 'Society Redevelopment',
    description: 'Expert legal and architectural solutions for society redevelopment projects, ensuring maximum value, safety, and seamless execution.',
    clientQuote: 'Expert legal and architectural solutions for society redevelopment projects.',
    highlights: [
      'Expert legal and architectural solutions',
      'Hardship corpus & bank guarantee protection',
      'Timely transit rent & transparent handover'
    ],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    link: '#redevelopment-section'
  }
];

export const SRA_PROCESS: ProcessStep[] = [
  {
    step: '01',
    title: 'Assessment',
    description: 'Thorough evaluation of land survey, slum cluster eligibility, demographic data, and planning regulations under SRA guidelines.'
  },
  {
    step: '02',
    title: 'Planning',
    description: 'Preparation of architectural master layout, rehabilitation density mapping, and sale-component viability modeling.'
  },
  {
    step: '03',
    title: 'Coordination',
    description: 'Active stakeholder alignment, consent generation, cooperative society formation, and regulatory filing with SRA authorities.'
  },
  {
    step: '04',
    title: 'Execution',
    description: 'Seamless transit accommodation or rent distribution, site clearance, statutory approvals (LOI, IOA), and civil works launch.'
  },
  {
    step: '05',
    title: 'Development',
    description: 'High-quality rehabilitation housing delivery alongside premium commercial or residential sale tower completion.'
  }
];

export const REDEVELOPMENT_STEPS: ProcessStep[] = [
  {
    step: 'Stage 1',
    title: 'Society Discussion',
    description: 'Engaging with managing committees and housing society members to understand specific aspirations, space requirements, and collective priorities.'
  },
  {
    step: 'Stage 2',
    title: 'Feasibility & Planning',
    description: 'Detailed architectural feasibility, allowable FSI / TDR calculations, structural review, and financial viability reports tailored to the society plot.'
  },
  {
    step: 'Stage 3',
    title: 'Project Structuring',
    description: 'Formulating clear commercial terms: additional carpet area, hardship corpus funds, monthly rent allowance, and bank guarantee protections.'
  },
  {
    step: 'Stage 4',
    title: 'Approvals & Coordination',
    description: 'Navigating municipal sanctions (MCGM / BMC), fire NOCs, environmental clearances, and formal Development Agreement execution.'
  },
  {
    step: 'Stage 5',
    title: 'Execution',
    description: 'Disciplined construction management, transparent progress reporting to society members, and quality control benchmarks.'
  },
  {
    step: 'Stage 6',
    title: 'Transformation',
    description: 'Timely handover of contemporary, amenity-rich homes to existing residents, culminating in modern landmark living.'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-01',
    name: 'Strategic Land Opportunity [Placeholder]',
    location: 'Western Suburban Corridor, Mumbai [Placeholder]',
    category: 'land',
    categoryLabel: 'Land Acquisition & Development',
    status: 'Due Diligence & Masterplanning Phase [Placeholder]',
    description: 'Facilitating a strategic multi-acre land parcel evaluation with integrated development potential along key transit arterials.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    metricsPlaceholder: 'Potential GFA / FSI to be determined upon client confirmation',
    isPlaceholderNotice: true
  },
  {
    id: 'proj-02',
    name: 'Metropolitan SRA Initiative [Placeholder]',
    location: 'Central Mumbai Suburban Cluster [Placeholder]',
    category: 'sra',
    categoryLabel: 'SRA Project Development',
    status: 'Stakeholder Alignment & Planning Phase [Placeholder]',
    description: 'Structured rehabilitation initiative focused on sustainable community housing combined with high-grade modern sale towers.',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80',
    metricsPlaceholder: 'Slum rehabilitation & sale ratio under statutory formulation',
    isPlaceholderNotice: true
  },
  {
    id: 'proj-03',
    name: 'Society Redevelopment Landmark [Placeholder]',
    location: 'South-Central Mumbai [Placeholder]',
    category: 'redevelopment',
    categoryLabel: 'Society Redevelopment',
    status: 'Society Consensus & Structuring Phase [Placeholder]',
    description: 'Transforming an established cooperative housing society into an architectural landmark with modern lifestyle amenities.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
    metricsPlaceholder: 'Project scope subject to finalized Development Agreement',
    isPlaceholderNotice: true
  },
  {
    id: 'proj-04',
    name: 'Urban Infill Land Parcel [Placeholder]',
    location: 'Eastern Express Corridor, Mumbai [Placeholder]',
    category: 'land',
    categoryLabel: 'Land Acquisition & Development',
    status: 'Title Verification & Feasibility [Placeholder]',
    description: 'Advisory and structuring for clear-title land holding earmarked for mixed-use or commercial grade redevelopment.',
    image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1000&q=80',
    metricsPlaceholder: 'Commercial/mixed viability study in progress',
    isPlaceholderNotice: true
  },
  {
    id: 'proj-05',
    name: 'Community Renewal SRA Cluster [Placeholder]',
    location: 'Western Harbor Vicinity, Mumbai [Placeholder]',
    category: 'sra',
    categoryLabel: 'SRA Project Development',
    status: 'Regulatory Submission & Advisory [Placeholder]',
    description: 'Facilitating comprehensive urban regeneration through structured rehabilitation and infrastructure integration.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
    metricsPlaceholder: 'Eligible beneficiary survey underway',
    isPlaceholderNotice: true
  },
  {
    id: 'proj-06',
    name: 'Premier Residential Redevelopment [Placeholder]',
    location: 'Prime Suburban Sub-Market, Mumbai [Placeholder]',
    category: 'redevelopment',
    categoryLabel: 'Society Redevelopment',
    status: 'Architectural Design & Approvals [Placeholder]',
    description: 'Replacing aged residential fabric with earthquake-resistant luxury high-rise construction, rooftop amenities, and multi-tier parking.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    metricsPlaceholder: 'Height and configuration pending civic approvals',
    isPlaceholderNotice: true
  }
];

export const CLIENT_ASSOCIATIONS = [
  { name: 'Larsen & Toubro (L&T)', tag: 'Engineering & Construction' },
  { name: 'VITS Hotels', tag: 'Hospitality' },
  { name: 'Toyota Showroom', tag: 'Commercial & Automotive' },
  { name: 'HDFC Bank', tag: 'Financial Institution' },
  { name: 'Kumar Builders & Developers', tag: 'Real Estate' },
  { name: 'Atlantic Wind Infrastructure Pvt. Ltd.', tag: 'Infrastructure & Energy' }
];

export const WHY_US_PILLARS = [
  {
    number: '01',
    title: 'Established Group Legacy',
    description: 'Backed by the stated experience of Perennial Group since 1996, bringing proven stability, construction depth, and execution rigor to every mandate.'
  },
  {
    number: '02',
    title: 'Project-Focused Approach',
    description: 'Intentionally specialized in Land Acquisition, SRA, and Redevelopment rather than generic brokerage, providing disciplined real-estate problem solving.'
  },
  {
    number: '03',
    title: 'End-to-End Perspective',
    description: 'From initial opportunity assessment, regulatory navigation, and financial structuring through civil execution and final delivery.'
  },
  {
    number: '04',
    title: 'Long-Term Relationships',
    description: 'Building transparent, enduring relationships with landowners, housing societies, financial investors, and public development authorities.'
  }
];

export const TIMELINE_EVENTS = [
  {
    year: '1996',
    title: 'Perennial Group Established',
    description: 'Founded with a dedication to civil construction excellence, contracting reliability, and institutional infrastructure standards.'
  },
  {
    year: 'Expansion',
    title: 'Construction & Development Depth',
    description: 'Over 25+ years of delivering civil works, satisfied customer handovers, and technical project management expertise across Western India.'
  },
  {
    year: 'AI Realty',
    title: 'Specialized Real Estate Arm',
    description: 'Established to address the complex regulatory, social, and commercial dynamics of modern Mumbai metropolitan real estate.'
  },
  {
    year: 'Present & Beyond',
    title: 'Land • SRA • Redevelopment Focus',
    description: 'Unlocking strategic urban value through structured land development, humane SRA rehabilitation, and landmark society transformations.'
  }
];
