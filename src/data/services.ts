export interface Service {
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    title: 'Test Automation Architecture',
    description: 'Designing and building end-to-end automation ecosystems and QA frameworks from scratch (API, UI, omnichannel).',
  },
  {
    title: 'CI/CD & DevOps Setup',
    description: 'Integrating automated test and build pipelines (GitHub Actions, Jenkins) into existing engineering workflows.',
  },
  {
    title: 'AI-Integrated Quality Engineering',
    description: 'Bringing GenAI/LLMs (Claude, GPT-4, Gemini) into testing and quality processes for smarter failure analysis and validation.',
  },
  {
    title: 'Custom Web & App Development',
    description: 'Building and shipping full products end-to-end, from native mobile (iOS/Swift) to web apps.',
  },
];
