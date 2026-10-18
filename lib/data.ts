export interface HeroSlideData {
  id: number;
  translationKeyTitle: string;
  translationKeyDesc: string;
  defaultTitle: string;
  defaultDesc: string;
  imageUrl: string;
  badge: string;
}

export interface ServiceData {
  id: string;
  titleKey: string;
  descKey: string;
  defaultTitle: string;
  defaultDesc: string;
  iconName: string;
  popular?: boolean;
  tag: string;
  fullDetails: string;
}

export interface TestimonialData {
  id: number;
  name: string;
  tag: string;
  quote: string;
  rating: number;
  location?: string;
  avatarUrl: string;
}

export interface BlogData {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  content: string;
}

export const HERO_SLIDES: HeroSlideData[] = [
  {
    id: 1,
    translationKeyTitle: 'hero1_title',
    translationKeyDesc: 'hero1_desc',
    defaultTitle: 'Express Entry & Skilled Immigration',
    defaultDesc: 'Fast-track Canadian PR via Federal Skilled Worker, Canadian Experience Class (CEC), and Provincial Nominee pathways.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop', // Toronto Skyline Financial District
    badge: 'Express Entry & PR Specialist',
  },
  {
    id: 2,
    translationKeyTitle: 'hero2_title',
    translationKeyDesc: 'hero2_desc',
    defaultTitle: 'Reunite With Your Loved Ones',
    defaultDesc: 'Bring your family to Canada. We handle spousal, parental, dependent child sponsorships, and Super Visas.',
    imageUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1920&auto=format&fit=crop', // Happy family outdoors
    badge: 'Spousal & Family Sponsorship',
  },
  {
    id: 3,
    translationKeyTitle: 'hero3_title',
    translationKeyDesc: 'hero3_desc',
    defaultTitle: 'Study & Work in Canada',
    defaultDesc: 'Comprehensive study permit guidance, college admissions, and Post-Graduation Work Permit (PGWP) transition to PR.',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1920&auto=format&fit=crop', // Students studying together
    badge: 'Study Permits & PGWP Success',
  },
  {
    id: 4,
    translationKeyTitle: 'hero4_title',
    translationKeyDesc: 'hero4_desc',
    defaultTitle: 'LMIA & Employer Solutions',
    defaultDesc: 'Assisting Canadian employers and foreign skilled workers with Labour Market Impact Assessments and LMIA-supported work permits.',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop', // Professionals at work
    badge: 'LMIA & Work Authorizations',
  },
  {
    id: 5,
    translationKeyTitle: 'hero5_title',
    translationKeyDesc: 'hero5_desc',
    defaultTitle: 'Your Canadian Dream Starts Here',
    defaultDesc: 'Licensed RCIC representation with a 96% visa approval rate, honest advice, and offices in Brampton and Edmonton.',
    imageUrl: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1920&auto=format&fit=crop', // Canadian Rockies Lake
    badge: '96% Visa Approval Rate',
  },
];

export const TOP_SERVICES: ServiceData[] = [
  {
    id: 'express-entry',
    titleKey: 's1_title',
    descKey: 's1_desc',
    defaultTitle: 'Express Entry & Permanent Residency',
    defaultDesc: 'Fast-track Canadian PR for skilled workers under FSWP, CEC, and FSTP with comprehensive CRS score optimization.',
    iconName: 'Zap',
    popular: true,
    tag: 'Permanent Residency',
    fullDetails: 'Express Entry manages applications for permanent residence under Federal Skilled Worker (FSW), Canadian Experience Class (CEC), and Federal Skilled Trades (FST). We optimize your Comprehensive Ranking System (CRS) score, verify ECA and language benchmark credentials, and represent you from initial pool entry through ITA and final PR landing.',
  },
  {
    id: 'pnp',
    titleKey: 's2_title',
    descKey: 's2_desc',
    defaultTitle: 'Provincial Nominee Programs (PNP)',
    defaultDesc: 'Targeted pathways for skilled workers, graduates, and entrepreneurs in Alberta (AAIP), Ontario (OINP), BC, and beyond.',
    iconName: 'MapPin',
    popular: true,
    tag: 'Provincial Nomination',
    fullDetails: 'Provincial Nominee Programs allow Canadian provinces to nominate individuals tailored to local labor market demands. Saras Immigration specializes in Alberta Advantage Immigration Program (AAIP - Opportunity Stream, Express Entry, Tech Pathway) and Ontario Immigrant Nominee Program (OINP). A provincial nomination awards an automatic 600 bonus points in Express Entry.',
  },
  {
    id: 'lmia',
    titleKey: 's3_title',
    descKey: 's3_desc',
    defaultTitle: 'LMIA & Employer Sponsorship',
    defaultDesc: 'Assisting Canadian businesses with Labour Market Impact Assessments (High/Low-Wage, Dual-Intent) to hire foreign talent.',
    iconName: 'Briefcase',
    popular: true,
    tag: 'Employer Solutions',
    fullDetails: 'A Labour Market Impact Assessment (LMIA) proves that a Canadian employer needs a foreign worker to fill a job and no Canadian citizen or permanent resident is available. We handle advertising compliance, ESDC submissions, transition plans, and dual-intent LMIAs that support both temporary work permits and 50/200 PR points.',
  },
  {
    id: 'family-sponsorship',
    titleKey: 's4_title',
    descKey: 's4_desc',
    defaultTitle: 'Spousal & Family Sponsorship',
    defaultDesc: 'Reunite with your spouse, common-law partner, dependent children, or parents in Canada with complete legal representation.',
    iconName: 'Users',
    popular: true,
    tag: 'Family Reunification',
    fullDetails: 'Canadian citizens and permanent residents can sponsor their loved ones. We structure comprehensive relationship proof (inland and outland), financial undertakings, and Spousal Open Work Permits (SOWP) to ensure your family is reunited smoothly without avoidable procedural delays.',
  },
  {
    id: 'study-permits',
    titleKey: 's5_title',
    descKey: 's5_desc',
    defaultTitle: 'Study Permits & PGWP Pathways',
    defaultDesc: 'DLI admissions, study visa applications, Provincial Attestation Letters (PAL), and Post-Graduation Work Permits.',
    iconName: 'GraduationCap',
    tag: 'Student Pathways',
    fullDetails: 'Canada offers top-tier education and a direct pathway to permanent residence. Founded by a former international student, Saras Immigration assists with Designated Learning Institution (DLI) admissions, robust Statements of Purpose (SOP), financial documentation, PAL compliance, and subsequent Post-Graduation Work Permit (PGWP) filings.',
  },
  {
    id: 'super-visa',
    titleKey: 's6_title',
    descKey: 's6_desc',
    defaultTitle: 'Super Visa & Visitor Visas',
    defaultDesc: 'Multi-entry Super Visas allowing parents and grandparents to stay up to 5 consecutive years, plus visitor extensions.',
    iconName: 'HeartHandshake',
    tag: 'Temporary Residency',
    fullDetails: 'The Super Visa is a multi-entry visa valid for up to 10 years, allowing eligible parents and grandparents of Canadian citizens and PRs to remain in Canada for up to 5 years per visit. We ensure full compliance with minimum income requirements (LICO) and Canadian medical insurance policies.',
  },
];

export const TESTIMONIALS: TestimonialData[] = [
  {
    id: 1,
    name: 'Kamalpreet Kaur',
    tag: 'Express Entry & Study Pathway - Approved',
    quote: 'Amazing experience working with Saras Immigration consultancy, especially with Amanpreet Sir! His patience, deep legal knowledge, and genuine interest in finding the best path for my situation made all the difference. He guided me step by step with my application, keeping me informed and confident throughout the journey. Highly recommended to anyone seeking honest and reliable immigration help!',
    rating: 5,
    location: 'Brampton, Ontario',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Meenu Dhir',
    tag: 'Spousal Sponsorship & PR - Approved',
    quote: 'I really like the service provided by Aman at Saras Immigration. He is very trustworthy, transparent, and professional throughout the entire process. My spousal sponsorship application was prepared with meticulous detail and approved without any issues. Thank you so much for bringing our family together in Canada!',
    rating: 5,
    location: 'Toronto, Ontario',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Baltej Singh Assi',
    tag: 'Work Permit to PR Transition - Success',
    quote: 'Extremely reliable and professional service provided by Aman and the team at Saras Immigration. They handled my work permit extension and subsequent permanent residency application with great precision. Their honest advice saved me both time and money. I always recommend Saras Immigration to all my friends and family.',
    rating: 5,
    location: 'Edmonton, Alberta',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Manjodh Bhatti',
    tag: 'LMIA & Express Entry - Approved',
    quote: 'Great experience with Amanpreet sir regarding my immigration processes! From reviewing my LMIA documentation to optimizing my Express Entry profile, his strategic guidance was second to none. Whenever I had questions, he answered promptly and with complete clarity.',
    rating: 5,
    location: 'Edmonton, Alberta',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Navjot S. & Employer',
    tag: 'Employer LMIA Application - Approved',
    quote: 'We used Saras Immigration for filing a Labour Market Impact Assessment (LMIA) for our company in Ontario. Amanpreet handled the job advertising, ESDC portal submission, and interview preparation with utmost professionalism. Approved in record time with zero hassles!',
    rating: 5,
    location: 'Brampton / Mississauga, ON',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Gurpreet Singh',
    tag: 'Visitor Visa to Work Authorization',
    quote: 'Saras Immigration helped navigate my case when other consultants told me it was too complicated. Aman evaluated my profile honestly during our initial consultation and built a clear legal strategy that resulted in my approved status. Truly client-centered and dependable.',
    rating: 5,
    location: 'Calgary, Alberta',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 7,
    name: 'Harmanpreet Kaur',
    tag: 'Parents Super Visa - Approved',
    quote: 'Secured a 5-year Super Visa for both my parents through Saras Immigration. Amanpreet Sir made sure every medical insurance detail and income proof document met IRCC guidelines perfectly. My parents are now happily here in Canada with us.',
    rating: 5,
    location: 'Brampton, Ontario',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 8,
    name: 'Simranjeet K.',
    tag: 'Alberta AAIP Provincial Nomination - Approved',
    quote: 'I reached out to the Edmonton office of Saras Immigration for my Alberta Advantage Immigration Program (AAIP) nomination. Their knowledge of Alberta labor streams is unmatched. I received my provincial nomination and 600 points boost in no time!',
    rating: 5,
    location: 'Edmonton, Alberta',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
  },
];

export const BLOGS: BlogData[] = [
  {
    id: 1,
    title: 'Express Entry 2026: Category-Based Draws, STEM & Healthcare Occupations',
    excerpt: 'IRCC continues prioritizing in-demand economic sectors, French proficiency, and healthcare workers in targeted rounds of invitations.',
    category: 'Express Entry',
    date: 'October 14, 2026',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=600&auto=format&fit=crop',
    content: 'In 2026, Immigration, Refugees and Citizenship Canada (IRCC) continues prioritizing candidates through category-based selection in Express Entry. Targeted draws focus on Healthcare, STEM professions, Trades, Agriculture, and French-language proficiency. Consulting an RCIC helps align your NOC/TEER codes and calculate the optimal time to enter the pool.',
  },
  {
    id: 2,
    title: 'Alberta Advantage Immigration Program (AAIP): 2026 Pathway Updates',
    excerpt: 'Key strategies for international graduates, hospitality workers, and skilled trades applying for Alberta provincial nomination.',
    category: 'Provincial Nominees',
    date: 'October 08, 2026',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=600&auto=format&fit=crop',
    content: 'The Alberta Advantage Immigration Program (AAIP) remains one of Canada’s most welcoming provincial pathways. With our dedicated office in Edmonton, Saras Immigration guides candidates through the Alberta Opportunity Stream, Tourism and Hospitality Stream, and Accelerated Tech Pathway to secure 600 bonus CRS points.',
  },
  {
    id: 3,
    title: 'Complete Guide to Spousal Sponsorship & Spousal Open Work Permits (SOWP)',
    excerpt: 'How to build an airtight relationship evidence portfolio and sponsor your spouse or common-law partner with minimal processing delay.',
    category: 'Family Sponsorship',
    date: 'September 28, 2026',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop',
    content: 'Spousal sponsorship requires clear, convincing proof of a genuine and continuing relationship. Saras Immigration assists both Inland and Outland applicants, helping spouses apply for an Open Work Permit while their permanent residency file is under active IRCC review.',
  },
];
