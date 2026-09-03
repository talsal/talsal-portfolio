export interface ExperienceEntry {
  role: string;
  company: string;
  years: string;
  bullets: string[];
  tech: string[];
}

export interface EarlierEntry {
  years: string;
  role: string;
  company: string;
  summary: string;
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Automation Architect',
    company: 'CommBox',
    years: '2025 – Present',
    bullets: [
      "Designed and built a comprehensive QA regression framework from scratch in Python covering the product's core API infrastructure.",
      'Architected automated testing across omnichannel communication (WhatsApp, SMS, Email, Facebook, Instagram, Messenger, Chat, Voice, AI Bots).',
      'Integrated LLMs (Claude, GPT-4, Gemini) into the testing lifecycle for automated data verification and AI-based failure investigation.',
      'Work hands-on daily with Claude Code, building custom Skills to automate and standardize recurring engineering workflows.',
      'Orchestrated nightly regression runs via GitHub Actions with real-time reporting to Google Chat.',
    ],
    tech: ['Python', 'SQL', 'Grafana', 'Jira', 'Claude Code'],
  },
  {
    role: 'Automation Lead Analyst (Tools Team)',
    company: 'Veeva Systems',
    years: '2021 – 2025',
    bullets: [
      'Owned all aspects of automated testing: planning, development, execution, and analysis.',
      'Built automation frameworks from scratch serving developers and managers.',
      'Developed in Java on a Cucumber framework hosted on GitHub.',
      'Interfaced GitHub Actions through Slack for automated runs and managed data environments on Amazon S3 and MongoDB.',
    ],
    tech: ['Java', 'Cucumber', 'GitHub Actions', 'Slack', 'AWS S3', 'MongoDB'],
  },
  {
    role: 'Automation Tech Lead (SCADA Cyber Team)',
    company: 'Cyberbit',
    years: '2016 – 2021',
    bullets: [
      'Technical lead for 3 engineers in a weekly-sprint Agile/Scrum environment.',
      'Owned full-cycle automated testing for SCADA cyber-domain protocols.',
      'Developed automation in Python on Linux, interfacing with Elasticsearch and PostgreSQL.',
      'Integrated with Jenkins for automated execution on every commit and release.',
    ],
    tech: ['Python', 'Linux', 'Elasticsearch', 'PostgreSQL', 'Jenkins'],
  },
  {
    role: 'Senior Automation & Performance Lead',
    company: 'SAP (via Matrix/TACT)',
    years: '2014 – 2016',
    bullets: [
      'Led load and performance testing planning, development, and implementation for an SSO product.',
      'Worked in an internationally distributed Agile Scrum team spanning Israel and Germany.',
      'Built automation with JMeter integrated with Chef and Bamboo.',
      'Managed environments via SAP Monsoon on Mac OS.',
    ],
    tech: ['JMeter', 'Chef', 'Bamboo', 'Mac OS'],
  },
  {
    role: 'Senior Expert Automation Engineer',
    company: 'AT&T Israel',
    years: '2012 – 2014',
    bullets: [
      'Built automation infrastructure across Windows, Linux, iOS, and Android.',
      'Built test scripts on JSystem infrastructure and used Selenium for web application testing.',
      'Provided tooling, documentation, training, and tier support to QA teams and developers.',
    ],
    tech: ['JSystem', 'Selenium', 'Windows', 'Linux', 'iOS', 'Android'],
  },
  {
    role: 'Senior Expert Automation Developer',
    company: 'Traiana',
    years: '2007 – 2012',
    bullets: [
      'Designed and developed automated test systems in Java, Linux, and shell scripting.',
      'Advanced Oracle SQL database interfacing (Toad, SQL Developer) and IBM MQ integration.',
      'Automated with QTP and Selenium while managing cross-functional projects to deliver high-quality releases.',
    ],
    tech: ['Java', 'Oracle SQL', 'IBM MQ', 'QTP', 'Selenium', 'Shell Scripting'],
  },
];

export const earlierCareer: EarlierEntry[] = [
  {
    years: '2004 – 2007',
    role: 'Expert Automation Engineer',
    company: 'Tel Aviv Stock Exchange (via Tesnet)',
    summary:
      'Headed automation infrastructure using Mercury QTP/Quality Center, transitioning large-scale manual test suites to automation.',
  },
  {
    years: '2004',
    role: 'Expert Automation Engineer',
    company: 'BackWeb & Clal Insurance (via Tesnet)',
    summary: 'Developed web automation POCs/pilots using WinRunner and data-driven Excel methodologies.',
  },
  {
    years: '2002 – 2004',
    role: 'Software Engineer, Logging & Storage Group',
    company: 'NICE',
    summary: 'Developed storage solutions and core features in .NET C# with SQL databases.',
  },
  {
    years: '2000 – 2002',
    role: 'Automation Team Leader',
    company: 'NICE',
    summary: 'Led a team of 3 programmers building 3-tier client-server automated/load testing frameworks in Delphi and WinRunner.',
  },
  {
    years: '1998 – 2000',
    role: 'Automation Developer',
    company: 'Tesnet',
    summary:
      'Delivered automated and load testing projects for tier-1 clients including ECI, Visa Alpha, Intel, and Israel Lands Administration using WinRunner and LoadRunner.',
  },
];
