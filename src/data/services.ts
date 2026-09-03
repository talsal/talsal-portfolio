export interface Service {
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    title: 'Custom Web & App Development',
    description: 'Designing and shipping full products end-to-end — websites, web apps, and native mobile (iOS/Swift).',
  },
  {
    title: 'AI-Powered Automation & Agentic Workflows',
    description: 'Building AI-powered systems and agentic workflows — LLM-integrated pipelines (Claude, GPT-4, Gemini) plus hands-on daily use of Claude Code and custom Skills.',
  },
  {
    title: 'Test Automation Architecture',
    description: 'Designing and building end-to-end automation ecosystems and QA frameworks from scratch (API, UI, omnichannel).',
  },
  {
    title: 'CI/CD & DevOps Setup',
    description: 'Integrating automated test and build pipelines (GitHub Actions, Jenkins) into existing engineering workflows.',
  },
];
